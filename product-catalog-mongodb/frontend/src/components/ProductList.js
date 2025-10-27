import React, { useEffect, useState } from 'react';

export default function ProductList({ apiBase, onEdit, refresh }){
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');

  const fetchProducts = async () => {
    const url = apiBase + '/products' + (q ? '?q=' + encodeURIComponent(q) : '');
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(()=> { fetchProducts(); }, [refresh]);

  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <input placeholder="Search..." value={q} onChange={(e)=>setQ(e.target.value)} />
        <button onClick={fetchProducts}>Search</button>
      </div>
      {products.length === 0 && <div>No products found</div>}
      {products.map(p => (
        <div key={p._id} className="product">
          <img src={p.imageUrl || 'https://via.placeholder.com/80'} alt={p.name} />
          <div className="meta">
            <strong>{p.name}</strong>
            <div>{p.brand} — {p.category}</div>
            <div>₹{p.price} • Stock: {p.stock}</div>
          </div>
          <div>
            <button onClick={()=>onEdit(p)}>Edit</button>
            <button onClick={async ()=>{ if(confirm('Delete?')){ await fetch(apiBase + '/products/' + p._id, { method:'DELETE' }); fetchProducts(); } }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

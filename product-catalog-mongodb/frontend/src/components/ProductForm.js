import React, { useEffect, useState } from 'react';

export default function ProductForm({ apiBase, editing, onSaved }){
  const initial = { name:'', brand:'', category:'', description:'', price:0, stock:0, imageUrl:'' };
  const [form, setForm] = useState(initial);

  useEffect(()=> {
    if(editing) setForm(editing);
    else setForm(initial);
  }, [editing]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const method = form._id ? 'PUT' : 'POST';
      const url = apiBase + '/products' + (form._id ? '/' + form._id : '');
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if(!res.ok) throw new Error('Save failed');
      onSaved();
      setForm(initial);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSave}>
      <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
      <input placeholder="Brand" value={form.brand} onChange={e=>setForm({...form, brand:e.target.value})} />
      <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} />
      <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price: Number(e.target.value)})} />
      <input type="number" placeholder="Stock" value={form.stock} onChange={e=>setForm({...form, stock: Number(e.target.value)})} />
      <input placeholder="Image URL" value={form.imageUrl} onChange={e=>setForm({...form, imageUrl:e.target.value})} />
      <button type="submit">{form._id ? 'Update' : 'Add'}</button>
      {form._id && <button type="button" onClick={()=> setForm(initial)}>Cancel</button>}
    </form>
  );
}

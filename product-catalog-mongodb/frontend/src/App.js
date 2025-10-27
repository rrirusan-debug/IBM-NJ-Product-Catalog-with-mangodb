import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './styles.css';

const API = process.env.REACT_APP_API || 'http://localhost:5000/api';

function App(){
  const [editing, setEditing] = useState(null);
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <ProductForm apiBase={API} editing={editing} onSaved={()=>{ setEditing(null); setRefresh(r=>r+1); }} />
      <ProductList apiBase={API} onEdit={(p)=>setEditing(p)} refresh={refresh} />
    </div>
  );
}

export default App;

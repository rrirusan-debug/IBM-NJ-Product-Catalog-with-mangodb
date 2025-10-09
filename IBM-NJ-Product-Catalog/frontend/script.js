const container = document.getElementById('product-container');
const filter = document.getElementById('location-filter');

// Mock product data (Simulating MongoDB/Backend)
const products = [
  {
    name: ' Cloud Pak',
    description: 'A powerful cloud integration suite.',
    price: 499,
    image: 'https://image2url.com/images/1759997882997-1c3d5a9f-bb7e-4b04-bae3-05406a6bab9c.jpeg',
    location: 'New Jersey'
  },
  {
    name: ' Watson AI',
    description: 'AI solutions for business intelligence.',
    price: 799,
    image: 'https://image2url.com/images/1759997961817-3324b811-62c4-4891-914d-f38271be94dc.jpeg',
    location: 'California'
  },
  {
    name: ' Quantum System',
    description: 'Quantum computing for enterprise research.',
    price: 1299,
    image: 'https://image2url.com/images/1759997992842-97224871-3260-4c86-b101-cb53f36c89e2.jpeg',
    location: 'Texas'
  },
  {
    name: 'Analytics Engine',
    description: 'Big data and analytics service.',
    price: 699,
    image: 'https://image2url.com/images/1759998018426-823adecf-2784-43ab-b3ca-0c1a633bcf52.jpeg',
    location: 'New Jersey'
  }
];

// Function to render products
function renderProducts(items) {
  container.innerHTML = items.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Location:</strong> ${product.location}</p>
      <button>Learn More</button>
    </div>
  `).join('');
}

// Initial load
renderProducts(products);

// Filter products by location
filter.addEventListener('change', () => {
  const selected = filter.value;
  if (selected === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.location === selected);
    renderProducts(filtered);
  }
});

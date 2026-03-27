const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const API_URL = 'https://69c368d4b780a9ba03e6b5c9.mockapi.io/api/v1/restaurants';

const app = express();
app.use(cors({ origin: '*' }));
const PORT = process.env.PORT || 4000;

function getCategories(data) {
  return [...new Set(data.map(r => r.category))];
}

app.get('/restaurants', async (req, res) => {
  try {
    const { category } = req.query;
    const response = await fetch(API_URL);
    const data = await response.json();
    let filtered = data;
    if (category) {
      filtered = filtered.filter(r => r.category === category);
    }
    res.json({
      restaurants: filtered,
      categories: getCategories(data)
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
});

app.get('/restaurants/:id', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restaurant detail' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

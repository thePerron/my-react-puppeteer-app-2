// server/server.js
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3001;

app.get('/scrape', async (req, res) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Extraire du contenu de la page
  const content = await page.content();

  await browser.close();

  res.send(content);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

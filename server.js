const express = require('express');
const path = require('path');

const app = express();
//Pierwszy parametr tej funkcji ustala link, a drugi to callback – funkcja, która ma uruchomić się w sytuacji, gdy serwer wykryje, że użytkownik wchodzi pod ten link. 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/info.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/history.html'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
// ten plik po skompilowaniu, bedzie uruchamiał na komputerze serwer 
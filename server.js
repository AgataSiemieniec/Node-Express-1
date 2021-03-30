const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs()); // dane pliki powinny być renderowane przez dany silnik. informujemy Express o tym, że pliki o rozszerzeniu .hbs powinny być obsługiwane przez silnik hbs. 
app.set('view engine', 'hbs');//Ten fragment mówi, że w aplikacji używamy widoków właśnie o tym rozszerzeniu. 
//Dzięki temu, przy kompilacji, będziemy mogli wskazywać tylko jego nazwę, a Express sam domyśli się, że ma szukać pliku z odpowiednią końcówką.


//Pierwszy parametr tej funkcji ustala link, a drugi to callback – funkcja, która ma uruchomić się w sytuacji, gdy serwer wykryje, że użytkownik wchodzi pod ten link. 
app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/contact', (req, res) => {
  res.show('contact.html');
});

app.get('/info', (req, res) => {
  res.show('info.html');
});

app.get('/history', (req, res) => {
  res.show('history.html');
});

app.get('/hello/:name', (req, res) => {
  res.render('Hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
// ten plik po skompilowaniu, bedzie uruchamiał na komputerze serwer 
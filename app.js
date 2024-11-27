const express = require("express");
const morgan = require('morgan');
const app = express();

app.set("view engine", "ejs");

app.listen(3000);
app.use(express.static('public'));
app.use(morgan('tiny'));
 



app.get("/", (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: " lorem1kjsdjsifals  " },
    { title: 'How finds eggs', snippet: " lorem1kjsdjsifals  " },
    { title: 'mario finds eggs', snippet: " lorem1kjsdjsifals  " },
  ];

  res.render("index", { title: "Home",blogs:blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Creat a blog" });
});

app.use((req, res) => {
  res.render("404", { title: "404" });
});

const express = require('express')
const react = require('react')
const renderToString = require('react-dom/server').renderToString;
const Home = require('../component/Home/Home.jsx').default

const app = express()

app.get('/',(req,res) => {
    const content = renderToString(<Home />)
    res.send(content);
})

app.listen(5000,() => console.log("PORT 5000"))
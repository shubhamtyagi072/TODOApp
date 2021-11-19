const express = require("express");
const react = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("../component/Home/Home.jsx").default;

const app = express();

app.use(express.static("build"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
        <div>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
    `;
  res.send(html);
});

app.listen(5000, () => console.log("PORT 5000"));

import express from "express";
import os from "os";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const url = 'http://192.168.49.3:32529'
    var response = await fetch(url)
    let text = await response.text()
    res.send(text);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Web server is listening ${PORT}`);
});

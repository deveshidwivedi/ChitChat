const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r=await axios.post(
        "https://api.chatengine.io/users/",
        { username, secret, email, first_name, last_name },
        {headers:{"Private-Key":"813ae439-a99e-4ff0-aee4-5c97546f6b9a"}}
    );
    return res.status(res.status).json(res.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.listen(3001);
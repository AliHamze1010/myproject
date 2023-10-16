const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/matches', (req, res) => {
   axios
      .get('https://api.sportmonks.com/v3/football/fixtures?api_token=CEPSrpllILGarc8zqSCP67jm9C8zrAqO4ZUZeb3dBwQD1F5VZUpD8k1Usrv6&include=scores')
      .then((response) => {
         res.json(response.data);
      })
      .catch((error) => {
         console.log(error);
      });
}
);



// Routes placeholder
// TODO: Add routes for login, signup and fetch sports scores

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});

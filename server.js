const app = require('./app')
const dotenv = require('dotenv')
const fetch = require('node-fetch');
dotenv.config()

const {DB_HOST, PORT} = process.env

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })


// setInterval(() => {
// fetch(`https://mvt-api.onrender.com/health`)
//   .then(response => response.text())
//   .then(data => {
//     console.log('GET /health:');
//   })
//   .catch(error => {
//     console.error('GET /health Error:', error.message);
//   });
// }, 600000);
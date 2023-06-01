const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("/home/rutujapatil/Documents/Travelopia-Travellers-Assignment/Frontend"));
app.use('/app/*', express.static("/home/rutujapatil/Documents/Travelopia-Travellers-Assignment/Frontend/index.html"));

require("./app/routes/routes")(app);

const db = require("./app/storage/models");
db.sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
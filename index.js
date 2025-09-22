const http = require("http");
const app = require("./app");
const {
  scheduleRevenueCalculation,
} = require("./api/Schedules/revenueCalculation");
require('dotenv').config();

const port = process.env.PORT || 3002;

const server = http.createServer(app);

// scheduleRevenueCalculation();
// JSON.parse(process.env.FIREBASE_ADMIN_KEY);
// JSON.parse(process.env.FIREBASE_CONTENT_PROVIDER_KEY);
// console.log("FIREBASE_ADMIN_KEY:", process.env.FIREBASE_ADMIN_KEY);
// console.log("FIREBASE_CONTENT_PROVIDER_KEY:", process.env.FIREBASE_CONTENT_PROVIDER_KEY);

server.listen(port, function () {

  console.log("Susila Life is running on " + port);

});

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7500;

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the Server
app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}`);
})
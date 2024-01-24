// Server boot file
// import config settings
import { app, port } from "./config.js";

// Start up the server
app.listen(port, () => console.log("Server running on port " + port));

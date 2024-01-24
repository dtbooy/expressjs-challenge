// this is the server boot file
import { app, port } from "./config.js";

console.log(port);

app.listen(port, () => console.log("Server running on port " + port));

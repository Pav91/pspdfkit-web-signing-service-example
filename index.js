const app = require("./lib/app");

const port = process.env.SIGNING_SERVICE_PORT || "6100";

app.listen(port, () => console.debug(`Example app listening on port ${port}!`));

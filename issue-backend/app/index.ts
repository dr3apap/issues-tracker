import server from "./src/server";
import { HttpsCertConfig } from "./src/server";
import { readFileSync } from "node:fs";
import "dotenv/config";

const httpsServerConfObj = {
  cert: process.env.CERT_PEM,
  key: process.env.KEY_PEM,
} as HttpsCertConfig;

const httpsServer = server(httpsServerConfObj);
const httpServer = server();

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log(`\nServer listening on port:${PORT}\n`);
});

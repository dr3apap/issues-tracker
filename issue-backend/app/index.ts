import server from "./server";

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}\n`);
});

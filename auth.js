const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router("mock/database.json");
const middlewares = jsonServer.defaults();
const routes = require(path.join(__dirname, "/mock/routes.json"));

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(middlewares);

// Mapeia as rotas personalizadas
app.use(jsonServer.rewriter(routes));
app.use(auth);
app.use(router);
app.listen(3333);

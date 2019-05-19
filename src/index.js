import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/routes";
import renderer from "./server/renderer";
import createStore from "./server/createStore";

const app = express();

app.use('/api', proxy('https://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3003';
        return opts;
    }
}));
app.use(express.static("public"));

app.get("*", (req, res) => {
console.log('Req', req);
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
        res.status(404);
    }
    res.send(content);
  });
});

app.listen(3003, () => {
  console.log("Server started at 3003");
});

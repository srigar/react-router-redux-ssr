import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript';
import Routes from "../client/routes";

export default (req, store, context) => {
  const content = ReactDOMServer.renderToString(
    // Needs mandatory parameter context so passed empty object
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const template = `
          <html>
              <head>
                <link rel="stylesheet" href="style.css"></link>
              </head>
              <body>
                  <div id="root">
                      ${content}
                  </div>
                  <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                  </script>
                  <script src="bundle.js"></script>
              </body>
          </html>
      `;
  return template;
};

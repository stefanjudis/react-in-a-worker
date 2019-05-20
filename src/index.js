import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import routes from './routes';
import { matchPath } from 'react-router';
import { isSW } from './util/is-sw';

async function handleRequest(event) {
  const url = new URL(event.request.url);
  const path = url.pathname;

  let route = routes.find(route => matchPath(path, route));

  if (route) {
    let ctx = {
      component: route.component,
      match: { ...matchPath(path, route) },
      data: {}
    };

    if (ctx.component.getInitialProps) {
      ctx = {
        ...ctx,
        data: { ...(await ctx.component.getInitialProps(ctx)) }
      };
    }

    console.log(ctx);

    const markup = ReactDOMServer.renderToString(
      <App match={ctx.match} data={ctx.data} />
    );

    return new Response(
      `<html>
        <head>
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <div id="app">${markup}</div>
          <script src="/worker.js"></script>
          <script> window.__INITIAL_DATA__ = ${JSON.stringify(
            ctx.data
          )}</script>
        </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html'
        }
      }
    );
  } else {
    return caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    });
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

if (!isSW()) {
  window.addEventListener('load', function() {
    const app = document.querySelector('#app');

    if (window.__INITIAL_DATA__) {
      ReactDOM.hydrate(<App {...window.__INITIAL_DATA__} />, app);
    } else {
      ReactDOM.render(<App />, document.getElementById('app'));
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/worker.js').then(
        function(registration) {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          );
        },
        function(err) {
          console.log('ServiceWorker registration failed: ', err);
        }
      );
    }
  });
}

/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.144.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.32/mod.ts";

function App(url) {
    let pachanga;
    console.log(url);
    if ( url == "silbo" ) {
        pachanga='Pachanga'
    } else {
        pachanga=url+' Me lo repita'
    }
    return (
        <html>
          <head>
            <title>Qué pasa por la calle</title>
      </head>
          <body>
            <h1>{pachanga}</h1>
          </body>
        </html>
    );
}

function handler(req) {
    const thisUrl = new URL(req.url);
    const html = renderSSR(<App />,  thisUrl.pathname);
    return new Response(html, {
        headers: {
            "content-type": "text/html",
        },
    });
}

serve(handler);

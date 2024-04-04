import React, {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import Home from './components/home';
import type { LinksFunction } from "@remix-run/node";
import mainStyles from "./styles/global.css?url";

export const links: LinksFunction = () => [
    { type : "text/css", rel: "stylesheet", href: mainStyles },
  ];
  
  export default function App() {
    return (
      <html>
        <head>
          <title>LossAlamos | App Incubator</title>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
          <Meta />
          <Links />
        </head>
        <body>
          <Home />
          <Outlet />
          <Scripts />
        </body>
      </html>
    );
  }
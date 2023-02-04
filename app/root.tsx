import type { MetaFunction } from "@remix-run/node";
import clsx from "clsx";
import "flowbite";
import { ThemeProvider } from "~/utils/theme/ThemeProvider";
import styles from "./styles/app.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import FontProvider from "./utils/font/FontProvider";
import useFont from "./utils/font/useFont";
import useTheme from "./utils/theme/useTheme";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: "/images/logo.png" },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dectionary App",
  viewport: "width=device-width,initial-scale=1",
});

const App = () => {
  const [theme] = useTheme();
  const [font] = useFont();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main style={{ fontFamily: font }}>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  );
}

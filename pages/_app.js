import { Router } from "next/router";
import "../styles/globals.css";
import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import "../styles/Nprogress.css";

// Route Events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

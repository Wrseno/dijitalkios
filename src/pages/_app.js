import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}

export default MyApp;

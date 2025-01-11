import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();
  const scriptRef = useRef(null); // Keep track of the appended script

  useEffect(() => {
    if (scriptRef.current) {
      // Prevent appending the script if it already exists
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "CRYPTO:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
    scriptRef.current = script; // Save a reference to the script

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (scriptRef.current && container.current) {
        container.current.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);

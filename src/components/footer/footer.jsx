import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const CryptoCard = ({ data }) => {
  const priceChange = data.item.data.price_change_percentage_24h?.usd || 0;
  const price = data.item.data.price || "N/A";

  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <img src={data.item.small} alt={data.item.name} className="crypto-icon" />
        <span className="crypto-name">{data.item.symbol.toUpperCase()}</span>
        <span className={`crypto-change ${priceChange >= 0 ? 'positive' : 'negative'}`}>
          {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)}%
        </span>
      </div>
      <div className="crypto-price">${price}</div>
      <div className="chart-container2">
        <img 
          src={data.item.data.sparkline} 
          alt="Price chart" 
          className="sparkline"
          style={{
            filter: priceChange >= 0
              ? 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(118%) contrast(119%)'
              : 'invert(40%) sepia(89%) saturate(2526%) hue-rotate(337deg) brightness(100%) contrast(96%)',
          }}
        />
      </div>
    </div>
  );
};

const Carousel = ({ title, items, loading, error }) => {
    const containerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
  
    const updateScrollButtons = () => {
      const container = containerRef.current;
      if (!container) return;
    console.log(container);
      const scrollLeft = Math.floor(container.scrollLeft);
      const scrollMax = Math.ceil(container.scrollWidth - container.offsetWidth);
  
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollMax);
    };
  
    const handlePrev = () => {
      const container = containerRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };
  
    const handleNext = () => {
      const container = containerRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        updateScrollButtons();
        const throttledUpdate = () => {
          window.requestAnimationFrame(updateScrollButtons);
        };
        container.addEventListener("scroll", throttledUpdate);
        return () => container.removeEventListener("scroll", throttledUpdate);
      }
    }, []);
  
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
  
    return (
      <div className="section">
        <h2 className="section-title">{title}</h2>
        <div className="carousel-container">
          <button
            className="carousel-button prev"
            onClick={handlePrev}
            disabled={!canScrollLeft}
          >
            ←
          </button>
          <div className="carousel-wrapper">
            <div ref={containerRef} className="carousel-content">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <CryptoCard key={item.id} data={item} />
                ))
              ) : (
                <div className="empty-carousel">No items to display</div>
              )}
            </div>
          </div>
          <button
            className="carousel-button next"
            onClick={handleNext}
            disabled={!canScrollRight}
          >
            →
          </button>
        </div>
      </div>
    );
  };
  

const CryptoTracker = () => {
  const [recommendedCoins, setRecommendedCoins] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-bU9PvXTucAMPo7XqFxbStpN4');
        const data = await response.json();
        // console.log(data);
        // Split the coins into two groups for the carousels
        const allCoins = data.coins;
        const midPoint = Math.ceil(allCoins.length / 2);

        setRecommendedCoins(allCoins.slice(0, midPoint));
        setTrendingCoins(allCoins.slice(midPoint));
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-tracker">
      <Carousel
        title="You May Also Like"
        items={recommendedCoins}
        loading={loading}
        error={error}
      />
      <Carousel
        title="Trending Coins"
        items={trendingCoins}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default CryptoTracker;
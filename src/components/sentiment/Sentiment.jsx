import React, { useRef, useState, useEffect } from 'react';
import './Sentiment.css';

const KeyEvents = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const events = [
    {
      type: 'blue',
      icon: '📄',
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
    },
    {
      type: 'green',
      icon: '📈',
      title: 'Lorem ipsum dolor sit amet consectetur. Dui quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisic metus quis del'
    },
    {
      type: 'blue',
      icon: '📄',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.'
    }
  ];

  const checkScrollButtons = () => {
    const element = scrollRef.current;
    if (element) {
      setCanScrollLeft(element.scrollLeft > 0);
      setCanScrollRight(
        element.scrollLeft < element.scrollWidth - element.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', checkScrollButtons);
      return () => element.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    if (element) {
      const scrollAmount = direction === 'left' ? -316 : 316; // card width + gap
      element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="key-events">
      <h2 className="section-title">
        Key Events
        {/* <span className="info-icon">i</span> */}
      </h2>
      <div className="events-wrapper">
        <button
          className="carousel-button prev"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Previous event"
        >
          ←
        </button>
        <div className="events-container" ref={scrollRef}>
          {events.map((event, index) => (
            <div key={index} className={`event-card ${event.type}`}>
              <div className="event-header">
                <div className={`event-icon ${event.type}`}>
                  {event.icon}
                </div>
                <h3 className="event-title">{event.title}</h3>
              </div>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
        <button
          className="carousel-button next"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Next event"
        >
          →
        </button>
      </div>
    </div>
  );
};

const AnalystEstimates = () => {
  const estimates = [
    { label: 'Buy', value: 76, type: 'buy' },
    { label: 'Hold', value: 8, type: 'hold' },
    { label: 'Sell', value: 16, type: 'sell' }
  ];

  return (
    <div className="analyst-estimates">
      <h2 className="section-title">
        Analyst Estimates
        {/* <span className="info-icon">i</span> */}
      </h2>
      <div className="percentage-circle">
        76%
      </div>
      <div className="estimates-bars">
        {estimates.map((estimate, index) => (
          <div key={index} className="estimate-row">
            <span className="estimate-label">{estimate.label}</span>
            <div className="estimate-bar-container">
              <div 
                className={`estimate-bar ${estimate.type}`}
                style={{ width: `${estimate.value}%` }}
              />
            </div>
            <span className="estimate-value">{estimate.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sentiment = () => {
  return (
    <div className="sentiment-container">
      <KeyEvents />
      <AnalystEstimates />
    </div>
  );
};

export default Sentiment;


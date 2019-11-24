import React from 'react'
import Ticker from 'react-ticker'
import './liveLineRowSmall.css';

const LiveLineRowSmall = ({ text }) => {
  return (
    <section className="live-line-wrapper-row-small" >
      <Ticker
        offset="run-in"
        direction="toLeft"
        speed={5}
      >
        {() => (
          <p className="live-line-row-small">
            {text}
          </p>
        )}
      </Ticker>
    </section>
  )
}

export default LiveLineRowSmall
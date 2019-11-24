import React from 'react'
import './liveLine.css';
import Ticker from 'react-ticker'

const LiveLine = ({ text }) => {  
  return (
    <section className="live-line-wrapper" >
      <div style={{ margin:"10px 0px 10px 10px" }}>
        <Ticker
            direction="toLeft"
            offset="50%"
            speed={5}
        >
          {() => (
            <p className="live-line"> { text } </p>   
          )}
        </Ticker>
      </div>
    </section>
  )
}

export { LiveLine }
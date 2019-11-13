import React from 'react'
import './label.css';

const Label = props => {  
  return (
    <section className="label" >
      <p className="pLabel">
        { props.label }
      </p>
    </section>
  )
}

export { Label }
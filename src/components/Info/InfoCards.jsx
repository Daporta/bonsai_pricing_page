import React from 'react'

const InfoCards = ({ cards, state }) => {
  const infoCards = cards.map((c, idx) => {
    return (
      <div key={idx} className="card-wrapper">
        {c.popular 
          ? <div className="popular-banner">MOST POPULAR</div>  
          : null
        }
        <div className="card-content">
          <div className="card-name-description">
            <h3>{c.name}</h3>
            <p>{c.description}</p>
          </div>
          <div className={`card-price ${state === 'monthly' ? 'monthly' : 'yearly'}`}>
            <i className="fa fa-dollar-sign dollar-sign"></i>
            <div className='price'>
              {state === 'yearly' 
                ? c.yPrice
                : c.price
              }
            </div>
            <div className="month-text">/MONTH</div>
            {state === 'yearly' 
              ? <div className='billed-yearly-text'>Billed yearly</div>
              : null
            }
          </div>
          <div className="features-wrapper">
            <ul className="features-list">
              {c.features.map((f, idx) => {
                return (
                  <div key={idx} className="feature">
                    <i className="fa fa-check check"></i>
                    <li>{f}</li>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="card-button">
          <a href="/" className='card-start-free'>
            Start Free
          </a>
        </div>
      </div>
    )
  })

  return (
    <div className="cards-container">
      {infoCards}
    </div>
  )
}

export default InfoCards
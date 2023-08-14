import React from 'react'

const AddOns = ({ addOns, state }) => {
  const addOnsMonthly = addOns.monthly.map((m, idx) => {
    return (
      <div key={idx} className="add-on-wrapper">
        <div className="add-on-content">
          <div className="add-on-name-description-container">
            <h3>{m.name}</h3>
            <p>{m.description}</p>
            {m.link === true
              ? <div className="link">
                  <a href="/">LEARN MORE</a>
                  <i className="fa fa-chevron-right"></i>
                </div>
              : null
            }
          </div>
          {m.price === 'Free' 
            ? <div className="add-on-price-container">
                <div className='price-text'>{m.price}</div>
              </div>
            : <div className="add-on-price-container">
                <div className="price-number">
                  <i className="fa fa-dollar-sign dollar-sign"></i>
                  {m.price}
                </div>
                <div className="month-text">
                  /MONTH
                </div>
              </div>   
          } 
        </div>
      </div>
    )
  })

  const addOnsYearly = addOns.yearly.map((m, idx) => {
    return (
      <div key={idx} className="add-on-wrapper">
        <div className="add-on-content">
          <div className="add-on-name-description-container">
            <h3>{m.name}</h3>
            <p>{m.description}</p>
            {m.link === true
              ? <div className="link">
                  <a href="/">LEARN MORE</a>
                  <i className="fa fa-chevron-right"></i>
                </div>
              : null
            }
          </div>
          {m.price === 'Free' 
            ? <div className="add-on-price-container">
                <div className='price-text'>{m.price}</div>
              </div>
            : <div className="add-on-price-container">
                <div className="price-number">
                  <i className="fa fa-dollar-sign dollar-sign"></i>
                  {m.price}
                </div>
                <div className="year-text">
                  /YEAR
                </div>
              </div>   
          } 
        </div>
      </div>
    )
  })
  return (
    <div className="add-ons-container">
      { state === 'monthly' 
        ? addOnsMonthly
        : addOnsYearly
      }
    </div>
  )
}

export default AddOns
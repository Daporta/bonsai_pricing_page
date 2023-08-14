import React from 'react'

const ProductDropdown = ({ products, productsState, handler, workflowState }) => {
  const dropdown = products.map(product => {
    return (
      <div 
        className={`product-container container-${product.id}`} 
        key={product.id}
        onMouseOver={handler}
      >
        <div className="product-content">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    )
  })
  const workflow = products[0].options.map(option => {
    return (
      <div 
        className='option-container' 
        key={option.id}
      >
        <div className="option-content">
          <a href="/">
            <i className={option.icon}></i>
            <div className="option-info">
              <h4>{option.name}</h4>
              <p>{option.description}</p>
            </div>
          </a>
        </div>
      </div>
    )
  })
  return (
    <div className={`products-dropdown-container ${productsState? 'active': 'inactive'}`}>
      <div className="products-container">
        {dropdown}
      </div>
      <div 
        className={`workflow-container ${workflowState? 'active' : 'inactive'}`}
      >
        <i className='fa fa-chevron-right fa-lg'></i>
        {workflow}
      </div>
    </div>
  )
}

export default ProductDropdown
import React from 'react'

const TemplatesDropdown = ({ templates, templateState, handler, openTemplateState }) => {
  const templatesNames = templates.map((t, idx) => {
    return (
      <div 
        className="template-name-content"
        id={`${t.id}`} 
        key={idx}
        onMouseEnter={handler}
      >
        <div>
          <i className='fa fa-file-contract fa-lg'></i>
          <li>{t.name}</li>
        </div>
        <i className='fa fa-chevron-right fa-lg arrow'></i>
      </div>
    )
  })

  const templatesTitlesFeatures = templates.map((t, idx) => {
    return (
      <div 
        className={`template-title-feature-content container-${t.id} ${templateState === t.id ? 'active' : 'inactive'}`} key={idx}
      >
        <h3>{t.title}</h3>
        <ul>
          {t.features.map((f, idx) => 
            <li key={idx}>{f}</li>
          )}
        </ul>
        {t.more
          ? <div><a>See All Templates</a></div>
          : null}
      </div>
    )
  })
  return (
    <div className={`templates-container ${openTemplateState ? 'active' : 'inactive'}`}>
      <ul className='templates-names'>
        {templatesNames}
      </ul>
      <div className="templates-title-features">
        {templatesTitlesFeatures}
      </div>
    </div>
  )
}

export default TemplatesDropdown
import './footer.css'
import React, { useState } from 'react'




const Options = ({ o }) => {
      return (
        <div className="option">
          <a href="/">{o}</a>
        </div>
      )
}

const Accordion = ({ o, clickHandler, isActive }) => {
  
  return (
    <div className="accordion">
      <div className="title-chevron">
        <a href="/">{o.title}</a>
        {isActive 
          ? <i className="fa fa-chevron-up" onClick={clickHandler}></i>
          : <i className="fa fa-chevron-down" onClick={clickHandler}></i>
        }
        
      </div>
      <div className={`accordion-options ${isActive ? 'active' : ''}`}>
        {o.options.map(a => {
          return (
          isActive && <div className="option">
            <a href="/">{a}</a>
          </div>
          )  
        })}
      </div>
    </div>
  )
}

const FirstColumn = ({ columns }) => {
  const column = columns.first.map((c, idx) => {
    return (
      <div className="column-section" key={idx}>
        <div className="column-header">
          {c.title === null 
            ? null
            : <h4>{c.title}</h4>  
          }      
        </div>
        <div className="column-options">
          {c.options.map((o, idx) => (
            <Options o={o} key={idx}/>
          ))}
        </div>
      </div>
    )
  })
  
  return (
    <div className="column-container">
        {column}
    </div>
  )
}

const SecondColumn = ({columns}) => {
  const [activeAccordion, setActiveAccordion] = useState('')
  
  const column = columns.second.map((c, idx) => {
    return (
      <div className="column-section" key={idx}>
        <div className="column-header">
          {c.title === null 
            ? null
            : <h4>{c.title}</h4>  
          }       
        </div>
        <div className="column-options">
          {c.options.map((o, idx) => (
            <Options o={o} key={idx}/>
          ))}
        </div>
      </div>
    )
  }) 

  const templatesHeader = columns.templates.title
  const templatesOptions = columns.templates.options.map((o, idx) => {
    const isActive = idx === activeAccordion
    const activeHandler = () => {
      if (isActive) {
        setActiveAccordion('')
      } else {
        setActiveAccordion(idx)
      }
    }
    if (o.options !== null) {
      return (
        <Accordion o={o} key={idx} isActive={isActive} clickHandler={activeHandler}/>
      )
    } else {
      return (
        <Options o={o.title} key={idx}/>
      )
    }
    
  })
 
  return (
    <div className="column-container">
      {column}
      <div className="template-section">
        <div className="section-header">
          <h4>{templatesHeader}</h4>
        </div>
        <div className="section-options">
          {templatesOptions}
        </div>
      </div>
    </div>
  )
}

const ThirdColumn = ({columns}) => {
  const [activeAccordion, setActiveAccordion] = useState('')

  const column = columns.third.map((c, idx) => {
    return (
      <div className="column-section" key={idx}>
        <div className="column-header">
          {c.title === null 
            ? null
            : <h4>{c.title}</h4>  
          }       
        </div>
        <div className="column-options">
          {c.options.map((o, idx) => (
            <Options o={o} key={idx}/>
          ))}
        </div>
      </div>
    )
  }) 

  const isActive = 0 === activeAccordion
  const activeHandler = () => {
    if (isActive) {
      setActiveAccordion('')
    } else {
      setActiveAccordion(0)
    }
  }

  return (
    <div className="column-container">
      {column}
      <div className="comparisons-section">
        <Accordion o={columns.comparisons} key={0} isActive={isActive} clickHandler={activeHandler}/>
      </div>
    </div>
  )
}

const Footer = () => {
  const columns = {
    first: [
      {
        title: 'Product',
        options: ['Proposals','Contracts','Invoicing','Client CRM','Time Tracking','Task Tracking','Forms','Accounting','Bonsai Tax','Bonsai Cash']
      },
      {
        title: null,
        options: ['Pricing','Bonsai Reviews']
      },
    ],
    second: [
      {
        title: 'Free Resources',
        options: ['Freelance Resources', 'Freelance Blog by Bonsai', 'How to Write a Contract', 'Online Signature Maker']
      },
      {
        title: null,
        options: ['Self-Employed Taxes Hub', 'Self-Employed Tax Calculator', 'Self-Employed Tax Deductions']
      },
    ],
    templates: {
      title: 'Templates',
      options: [
        {
          title: 'Invoice Templates',
          options: ['Invoice Generator', 'Blank Invoice Template', 'Consultant Invoice Template', 'Editable Invoice Template', 'Graphic Design Invoice', 'Web Design Invoice', 'Contractor Invoice Template', 'Photography Invoice Template', 'Self Employed Invoice Template' ]
        },
        {
          title: 'Proposal Templates',
          options: ['Website Proposal Template', 'Digital Marketing Proposal Template', 'Social Media Marketing Proposal', 'Graphic Design Proposal', 'Freelance Proposal Template', 'SEO Proposal Template']
        },
        {
          title: 'Contract Templates',
          options: ['Online Contract', 'Graphic Design Contract', 'Freelance Contract Template', 'Social Media Marketing Contract', 'Software Development Contract', 'Web Design Contract', 'Video Production Contract', 'Public Relations Contract', 'Translation Contract']
        },
        {
          title: 'Agreement Templates',
          options: ['Retainer Agreement Template', 'Influencer Agreement Template', 'Collaboration Agreement Template', 'Software Development Agreement', 'Marketing Agreement Template']
        },
        {
          title: 'Scope of Work Template',
          options: ['Website Development Sxope of Work', 'Digital Marketing Scope of Work', 'Consiltant Statement of Work Template', 'Software Development Scope of Work']
        },
        {
          title: 'Quote Templates',
          options: ['Freelance Quotation Template', 'Web Design Quotation Template', 'Graphic Design Quotation Template', 'Interior Design Quotation Template', 'Video Production Quotation Template', 'Social Media Marketing Quotation']
        },
        {
          title: 'Credit Note Templates',
          options: null
        },
        {
          title: 'Estimate Templates',
          options: null
        },
        {
          title: 'Form Templates',
          options: null
        }
      ]
    },
    third: [
      {
        title: 'Bonsai',
        options: ['About', 'Careers', 'Support', 'Linkedin', 'Twitter', 'Privacy Policy', 'Legal']
      },
      {
        title: null,
        options: ['Affiliates', 'Write for Us']
      }
    ],
    comparisons: {
      title: 'Comparisons',
      options: ['Freshbooks Alternatives', 'Quickbooks Alternatives', 'Wave vs Quickbooks', 'Xero vs Quickbooks', 'Freshbooks vs Quickbooks']
    }       
  }

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="columns-container">
            <div className="first-column-wrapper">
              <FirstColumn columns={columns}/>
            </div>
          <div className="second-column-wrapper">
            <SecondColumn columns={columns}/>
          </div>
          <div className="third-column-wrapper">
            <ThirdColumn columns={columns}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
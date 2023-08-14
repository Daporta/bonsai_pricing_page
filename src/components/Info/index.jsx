import './info.css'
import React, {useState} from 'react'
import freeText from '../../assets/2-months-free-text.svg'
import InfoCards from './InfoCards'
import AddOns from './AddOns'

const Info = () => {
  const [state, setState] = useState('yearly')
  const toggleState = () => {
    state === 'monthly' 
      ? setState('yearly')
      : setState('monthly')
  }
  const cards = [
    {
      id: 1,
      name: 'Starter',
      description: 'Ideal fro freelancers and contractors just starting out.',
      price: '24',
      yPrice: '17',
      popular: false,
      features: [
        'All Template',
        'Unlimited Clients & Projects',
        'Invoicing & Payments',
        'Proposals & Contracts',
        'Tasks & Time Tracking',
        'Client CRM',
        'Expense Tracking',
        'Up to 5 Project Collaborators'
      ]
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Everything a growing independent business needs to thrive.',
      price: '39',
      yPrice: '32',
      popular: true,
      features: [
        'Everything in Starter plus...',
        'Custom Branding',
        'Forms & Questionnaires',
        'Workflow Automations',
        'Client Portal',
        'QuicBooks Integration',
        'Calendly Integration',
        'Zapier Integration',
        'Up to 15 Project Collaborators'
      ]
    },
    {
      id: 3,
      name: 'Business',
      description: 'The Perfect package for small businesses and agencies.',
      price: '79',
      yPrice: '52',
      popular: false,
      features: [
        'Everything in Starter and Professional plus...',
        'Subcontractor Management',
        'Hiring Agreement Templates (1099 contracts)',
        'Subcontractor Onboarding',
        'Talent Pool',
        '3 Team Seats (additional seats $9/month)',
        'Accountant Access',
        'Connect Multiple Bank Accounts',
        'Unlimited Subcontractors',
        'Unlimited Project Collaborators'
      ]
    }
  ]
  const addOns = {
    monthly: [
      {
        name: 'Collaborators',
        description: 'Invite other users to specific projects for limited access and functionality',
        price: 'Free',
        link: false,
      },
      {
        name: 'Partners',
        description: 'Invite other users for full account access and company management',
        price: 9,
        link: false,
      },
      {
        name: 'Bonsai tax',
        description: 'Track expenses, identify write-offs, and estimate quaterly taxes easily',
        price: 10,
        link: true,
      }
    ],
    yearly: [
      {
        name: 'Accounting & Tax Assistant',
        description: 'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.',
        price: 100,
        link: true,
      },
      {
        name: 'Partners',
        description: 'Invite other users for full account access and company management',
        price: 90,
        link: false,
      },
      {
        name: 'Bonsai tax',
        description: 'Invite other users to specific projects for limited access and functionality',
        price: 'Free',
        link: false,
      }
    ],
  }

  return (
    <div className="info-wrapper">
      <div className="blue-shape"></div>
      <div className='header-toggle-wrapper'>
          <div className="header-container">
            <h1>
              Plans & Pricing
            </h1>
          </div>
          <div className="toggle-container">
            <div className="monthly-text">
                MONTHLY
            </div>
            <div 
              className="toggle"
              onClick={toggleState}
            >
              <div className={`toggle-ball ${state === 'monthly' ? 'monthly' : 'yearly'}`}></div>  
            </div>
            <div className="yearly-text">
              YEARLY
            </div>
            <img className='header-image'src={freeText} alt="" />
          </div>
      </div>
      <div className="cards-wrapper">
        <InfoCards cards={cards} state={state}/>
      </div>
      <div className="add-ons-wrapper">
        <div className="add-on-header-container">
          <h2>Super charge your work with add-ons</h2>
        </div>
        <AddOns addOns={addOns} state={state}/>
      </div>
    </div>
    )
}

export default Info
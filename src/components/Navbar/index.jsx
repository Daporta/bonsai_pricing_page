import './navbar.css'
import React, {useState} from 'react'
import logo  from '../../assets/bonsai-logo.svg'
import ProductDropdown from './productDropdown'
import TemplatesDropdown from './templateDropdown'

const Navbar = () => {
  const products = [
    {
      id:1,
      name:'Bonsai Workflow',
      description:'Look professional, win more clients and manage your business from one place.',
      options:[
        {
          id:1,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Invoices',
          description:'Get paid faster with automatic invoicing, online payments and more.'
        },
        {
          id:2,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Proposals',
          description:'Create client-winning proposals with open receipts, custom packages and electronic approvals.'
        },
        {
          id:3,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Contracts',
          description:'Protect you business with fully-customizable contract templates.Edit and e-sign hassle free.'
        },
        {
          id:4,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Client CRM',
          description:'Add leads, manage exiting clients and track projects easily from one place.'
        },
        {
          id:5,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Forms & Automations',
          description:'Boost client intake and automate feedback with custom web forms and questionnaires.'
        },
        {
          id:6,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Time Tracking',
          description:'Stay organized with Bonsai\'s all-in-one tim tracker, automated timesheets and billing system.'
        },
        {
          id:7,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Accounting',
          description:'Manage your finances easily with income reports, expense tracking, tax reminders and more.'
        },
        {
          id:8,
          icon: "fa fa-file-invoice-dollar fa-lg",
          name:'Task Tracking',
          description:'Stress-free task management with project templates and integrated timesheets.'
        },
      ]
    },
    {
      id:2,
      name:'Bonsai Tax',
      description:'Track expenses, maximize tax write-offs, and estimate taxes without the headache'
    },
    {
      id:3,
      name:'Bonsai Cash',
      description:'Bonsai\'s all-in-one financial hub: No fees and lighting fast payouts'
    },
  ]
  const templates = [
    {
      id: 1,
      name:'Contract Templates',
      title:'Featured Contract Templates',
      features: [
        'Free Contract Maker',
        'Social Media Management Contract Template',
        'Graphic Design Contract Template',
        'Digital Marketing Contract Template'
      ],
      more: true,
    },
    {
      id: 2,
      name:'Proposal Templates',
      title:'Featured Proposal Templates',
      features: [
        'Graphic Design Proposal Template',
        'Business Proposal Template',
        'Brand Ambassador Proposal Template',
        'Data Entry Proposal Letter Template'
      ],
      more: true,
    },
    {
      id: 3,
      name:'Invoice Templates',
      title:'Featured Invoice Templates',
      features: [
        'Social Media Invoice Templates',
        'Contractor Invoice Template',
        'Web Design Invoice Template',
        'Influencer Invoice Template'
      ],
      more: true,
    },
    {
      id: 4,
      name:'Agreement Templates',
      title:'Featured Agreement Templates',
      features: [
        'Influencer Agreement Template',
        'Influencer Collaboration Agreement Template',
        'Monthly Retainer Agreement Template',
        'Writer Agreement Template'
      ],
      more: true,
    },
    {
      id: 5,
      name:'Quote Templates',
      title:'Featured Quote Templates',
      features: [
        'Web Design Quotation Template',
        'Interior Design Quotation Template',
        'Digital Marketing Quotation Template',
        'Video Production Quotation Template'
      ],
      more: true,
    },
    {
      id: 6,
      name:'Scope of Work Templates',
      title:'Featured Scope of Work Templates',
      features: [
        'Website Development Scope of Work Template',
        'Digital Marketing Scope of Work Template',
        'Consultant Scope of Work Template',
        'Interior Design Scope of Work Template'
      ],
      more: true,
    },
    {
      id: 7,
      name:'Brief Templates',
      title:'Featured Brief Templates',
      features: [
        'Design Brief Template',
        'Architecture Design Brief',
        'Fashion Design Brief',
        'Creative Brief Template'
      ],
      more: false,
    },
  ]

  const [openProduct, setOpenProduct] = useState(false);
  const [openWorkflow, setOpenWorkflow] = useState(false)
  const [openTemplate, setOpenTemplate] = useState(false)
  const [template, setTemplate] = useState(1)

  const toggleProducts = () => {
    setOpenProduct(!openProduct)
  };

  const toggleWorkflow = (event) => {
    if (event.target.classList.contains(`container-1`) || event.target.classList.contains('workflow-container')) {
      setOpenWorkflow(true)
    } else {
      setOpenWorkflow(false)
    }
  };

  const toggleTemplate = () => {
    setOpenTemplate(!openTemplate)
  };

  const templateHandler = (event) => {
    setTemplate(Number(event.target.id))
  }

  return (
      <div className="nav-container">
        <nav>
          <img src={logo} alt="bonsai logo" />
          <ul>
            <div 
              onMouseEnter={toggleProducts} onMouseLeave={toggleProducts}
            >
              <li className='dropdown-link'>Products
                <i className='fa fa-chevron-down fa-xs'></i>
              </li>
              <ProductDropdown 
                products={products} 
                productsState={openProduct}
                handler={toggleWorkflow}
                workflowState={openWorkflow}
              />
            </div>
            <div
              onMouseEnter={toggleTemplate} onMouseLeave={toggleTemplate}
            >
              <li className='dropdown-link'>Templates       <i className='fa fa-chevron-down      fa-xs'></i>
              </li>
              <TemplatesDropdown 
                templates={templates}
                templateState={template}
                handler={templateHandler}
                openTemplateState={openTemplate}
              />
            </div>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Reviews</a></li>
          </ul>
          <div className="buttons">
            <a className='log-in'>
              log in
            </a>
            <a className='start-free'>
              start Free
            </a>
          </div>
        </nav>
        
      </div>
  )
}

export default Navbar
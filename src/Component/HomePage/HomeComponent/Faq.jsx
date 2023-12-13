// import React from 'react'
const Faq = () => {

  const toggleAccordion = (event) => {
    const items = document.querySelectorAll(".accordion button");
    const itemToggle = event.currentTarget.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle === 'false') {
      event.currentTarget.setAttribute('aria-expanded', 'true');
    }
  };

  return (
    <div className="HomeTeam">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>FAQ</span></h1>
      <p>This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    {/* Glarry Image */}
       <div className="accordion">
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false" onClick={toggleAccordion}>
            <span className="accordion-title">Why is the moon sometimes out during the day?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
          </div>
        </div>
        {/* Add more FAQ items here */}
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false" onClick={toggleAccordion}>
            <span className="accordion-title">Why is the moon sometimes out during the day?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
          </div>
        </div>

        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false" onClick={toggleAccordion}>
            <span className="accordion-title">Why is the moon sometimes out during the day?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
          </div>
        </div>
        
      </div>
   













    <div className="clearfix"></div>    
    </div>
    
  </div>
  )
}

export default Faq

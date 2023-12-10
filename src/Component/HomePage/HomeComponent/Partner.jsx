// import React from 'react'

const Partner = () => {
    const rowData = [1,2,3,4,5,6];
  return (
    <div className="container patner">
      <div className="patner_text">
        <h1>Your Legal Ally: <span>Unrivaled Excellence and Business Solutions </span>   – Premier Law Firm Leading Dhaka&apos;s Legal Landscape.</h1>
        <p>Discover unparalleled legal support and strategic business solutions with our esteemed law firm in Dhaka. As your dedicated partner for legal excellence, we navigate complexities with expertise, ensuring robust solutions. Renowned as the top law firm in Dhaka, we offer comprehensive services, blending legal acumen with innovative business solutions. Our commitment to excellence transcends, providing clients with the strategic edge needed for success. Trust us as your legal ally to safeguard interests, navigate challenges, and propel your business forward with confidence. Elevate your legal experience with the premier law firm synonymous with excellence and business solutions in Dhaka</p>
      </div>
      <div className="patner_card">
        <div className="row">
            {
               rowData.map((dt) => (
                <div key={dt} className='col-md-4 patner_card_col'>
            <div className="patner_card_div">
            <h3>Foreign Direct Investment</h3>
            <span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi laboriosam quidem, illo perspiciatis rerum aperiam tempora unde nesciunt animi exercitationem deleniti esse vitae repellendus ipsum modi minus sequi omnis voluptatem ipsam maxime voluptatum magnam aliquid. Aliquid rem quis distinctio neque obcaecati veritatis laboriosam iste suscipit blanditiis, nam illum tenetur corrupti assumenda nobis voluptas repellat libero hic doloribus facilis illo quos quibusdam unde? Praesentium beatae, voluptate tempora minus optio repellendus?</p>
            </div>
        </div>
               )) 
            }
            </div>
      </div>
    </div>
  )
}

export default Partner

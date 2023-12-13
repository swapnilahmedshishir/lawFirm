// import React from 'react'
import { IoArrowForward} from "react-icons/io5";
import { Link } from "react-router-dom"
import { FaPhone } from "react-icons/fa6";


const Solution = () => {
  return (
    <div className="solution">
      <div className="container">
        <div className="row patner_text">
            <div className="col-md-6">
                <div>
                    <h1> <span>Our Expert professional law team </span>is always ready to serve you the best solution!</h1>
                    <p>Aspernatur vero blanditiis in reprehenderit commodi fugit quae beatae. Fugit facilis, doloribus, ab laborum dolore minima nulla incidunt modi asperiores ut aliquid rem qui pariatur tempore? Nisi, voluptatibus corporis eaque nostrum soluta modi aliquid enim molestias expedita eius quasi et consequuntur deleniti debitis vero doloremque fugit consequatur animi sunt recusandae pariatur iusto unde. Dolore vitae eius ab nemo iste quod? Maiores facere libero dolores vel quam eos odit, eum sit, alias voluptas reprehenderit quis.</p>
                    <Link to='/contact'><button type="btn" className="start_btn">contact us <IoArrowForward className="arrowcicon"/></button></Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="Free_Consultation">
                   <h3>Get a Free Consultation</h3>
                    <p>Take advantage of our offer for a free consultation and let us guide you towards effective legal solutions tailored to your specific needs.</p>
                    <div className="solution_call_us">
                        <div className="call_icon"><p><FaPhone/></p></div>
                        <div className="call_number">
                            <span>Call Us On:</span><br/>
                            <strong>+8801602555023</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Solution

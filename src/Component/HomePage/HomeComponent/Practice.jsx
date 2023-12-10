import { Link } from "react-router-dom"
import { SlBookOpen } from "react-icons/sl";
import { IoArrowForward } from "react-icons/io5";


const Practice = () => {
    const pacticeData = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <div className="practice">
      <div className="container">
      <div className="patner_text">
        <h1>OUR <span>PRACTICE AREA</span></h1>
        <p>Embark on a legal journey with us, where our practice areas span a vast terrain of expertise. From corporate law intricacies to navigating commercial litigation challenges and addressing taxation concerns, our seasoned team stands ready. Tailoring solutions to your unique needs, we offer unwavering guidance through every legal nuance. Our commitment to excellence ensures you receive strategic counsel and bespoke solutions, making us your trusted partner in the legal landscape. Trust us to unravel complexities, provide clarity, and secure success in the diverse realms of law, offering peace of mind and tailored solutions for your legal journey.</p>
      </div>
      <div className="row">
      {
      pacticeData.map((dt) => (
                <div key={dt} className="col-md-4">
                <div className="pactice_card">
                    <div className="icon"><SlBookOpen/></div>
                    <h3>BUSINESS SETUP</h3>
                    <p>We specialize in simplifying the complexities of business setup, providing you with a solid foundation for success.</p>
                    <Link to=''><button type="btn" className="start_btn">get started <IoArrowForward className="arrowcicon"/></button></Link>
                </div>
                </div>
               )) 
            }
         
      </div>
      </div>
    </div>
  )
}

export default Practice

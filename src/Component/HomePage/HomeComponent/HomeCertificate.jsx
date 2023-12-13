import imga1 from '../../../ALLImage/certificate-40983_1280.png';
import imga2 from '../../../ALLImage/certificate-2760734_1280.png';
import imga3 from '../../../ALLImage/picture-frame-3033273_1280.png';



const HomeCertificate = () => {
console.log();
  return (
    <div className="HomeTeam">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>Certificate of Appreciation</span></h1>
      <p>This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    {/* certificate Image */}
    
      <div className="row">
        <div className="col-md-4 certificate_img_col">
          <div className="certificate_img">
            <img src={imga2} alt=""/>
          </div>
        </div>

        <div className="col-md-4 certificate_img_col">
          <div className="certificate_img">
            <img src={imga1} alt=""/>
          </div>
        </div>

        <div className="col-md-4 certificate_img_col">
          <div className="certificate_img">
            <img src={imga3} alt=""/>
          </div>
        </div>
      </div>
    
    <div className="clearfix"></div>    
    </div>
    
  </div>
  )
}

export default HomeCertificate

import { BsPersonFillCheck } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { SiTrustpilot } from "react-icons/si";
import { GiClawHammer } from "react-icons/gi";

const CilentArea = () => {
  return (
    <div className="client_area">
      <div  className="container client_area_content">
        <div className="row client_area_row">
        <div className="col-md-3 col-sm-6 client_area_col">
            <span className="icon_div"><BsPersonFillCheck className="icon"/></span>
            <div className="text">
                <span>300 +</span><br/>
                <span>TRUSTED CLIENTS</span>
            </div>
        </div>
        <div className="col-md-3 col-sm-6 client_area_col">
            <span className="icon_div"><SiTrustpilot className="icon"/></span>
            <div className="text">
                <span>10 YEARS</span><br/>
                <span>EXPERIENCE</span>
            </div>
        </div>
        <div className="col-md-3 col-sm-6 client_area_col">
            <span className="icon_div"><GiClawHammer className="icon"/></span>
            <div className="text">
                <span>SUCCESSFUL</span><br/>
                <span>STORIES</span>
            </div>
        </div>
        <div className="col-md-3 col-sm-6 client_area_col">
            <span className="icon_div"><GoLaw className="icon"/></span>
            <div className="text">
                <span>5 STARS</span><br/>
                <span>CLIENT RATING</span>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CilentArea

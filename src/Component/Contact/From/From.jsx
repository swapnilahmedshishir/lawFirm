import './From.style.css';
// import'../../Button/Button.css';
import { useFormik } from 'formik';
 
const From = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phoneNumber:'',
            emailSubject:'',
            message:''
        },
        onSubmit:(values, {resetForm})=>{
            resetForm({values:''});
            console.log(values);
            
        }
    });
    
  return (
    
  <form className='from_Style' onSubmit={formik.handleSubmit}>
  <div className="form-row row">
    <div className="form-group col-md-5 from_text">
      <label htmlFor="name">Name</label>
      <input 
      
      type="text"
       name='name' 
       className="form-control" 
       onChange={formik.handleChange} 
       placeholder="John Carter" 
       value={formik.values.name} required/>
    </div>
    <div className="form-group col-md-6 from_text">
      <label htmlFor="email">Email</label>
      <input
       type="email"
       name='email'
       value={formik.values.email}
        required 
        className="form-control" 
        onChange={formik.handleChange}
         placeholder="example@email.com"
         />
    </div>
  </div>
  
  <div className="form-row row">
    <div className="form-group col-md-5 from_text">
      <label htmlFor="phoneNumber">Phone</label>
      <input type="tel" name='phoneNumber' required className="form-control" onChange={formik.handleChange} placeholder="+18143519153" value={formik.values.phoneNumber}/>
    </div>
    <div className="form-group col-md-6 from_text">
      <label htmlFor="emailSubject">Subject</label>
      <input type="text" name='emailSubject' required className="form-control" onChange={formik.handleChange} placeholder="ex.Donation" value={formik.values.emailSubject}/>
    </div>
  </div>
  <div className="form-group row">
  <div className="form-group col-md-11 from_text">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" name='message' id="exampleFormControlTextarea1" onChange={formik.handleChange} required rows="7" placeholder='Please type your message here...' value={formik.values.message}></textarea>
  </div>
  </div>

  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
      Contact me in the future with more information.
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn_main message_btn"><span>Submit Message</span></button>
</form>
    
  )
}

export default From

const validation =(values)=>{
    let errors={}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email=(" Enter Valid ! Email Address")
       
      }
  
  return errors;
      }

export default validation;

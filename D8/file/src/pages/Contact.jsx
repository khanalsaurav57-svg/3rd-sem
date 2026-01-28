import React from 'react'
import { useForm } from 'react-hook-form';
// import CustomButton from "../components/button/CustomButton";
// import "./Contact.css";


const Contact = () => {
    const{
        register, handleSubmit, formState:{errors}
    }= useForm({
        defaultValues:{
            name:"John Doe",
            email:" John Doe@example.com",
            message:"Hello, this is a default message."
    },});

    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                {...register("name",{
                    required:"Name is required",
                    minLength:{
                        value:3,
                        message:"Name must be at least 3 characters"
                    },
                    
                })}
                className="form-control"

              />
              <br />
              <p style={{color:"red"}}>{errors.name?.message}</p>
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                {...register("email",{
                    required:"Email is required"
                })}
                className="form-control"
               
                required
              />
              <br />
              <p style={{color:"red"}}>{errors.email?.message}</p>

            </div>
    
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                className="form-control"
                {...register("message",{required:"Message is required"})}
              ></textarea>
              <br />
              <p style={{color:"red"}}>{errors.message?.message}</p>

            </div>
    
            <div className="form-group">
              {/* <CustomButton
                // type={click}
                // onClick={() =>
                //   SetClick((prev) => (prev === "PRIMARY" ? "OUTLINE" : "PRIMARY"))
                // }
              />
    
              <CustomButton type="OUTLINE" /> */}
                <button type="submit">Submit</button>
            </div>
          </form>
        </>
 )
}

export default Contact
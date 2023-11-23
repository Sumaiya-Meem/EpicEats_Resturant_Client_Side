import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm()

  const {createUser} =useContext(AuthContext);
  const navigate=useNavigate()

  const onSubmit = (data) => {
    // console.log(data)
    createUser(data.email,data.password)
    .then(res=>{
      const loggedUser = res.user;
      console.log(loggedUser)
      navigate("/login")

    })
    
  }

  return (
        <div >
            
    <Card className="max-w-lg">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit(onSubmit)}>
      <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput id="email1" {...register("name",{ required: true })} type="text" placeholder="" />
          {errors.name?.type === "required" && (
        <p className='text-red-700'>Name is required</p>
      )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email"   {...register("email",{ required: true })}  placeholder="name@gmail.com" />
          {errors.email?.type === "required" && (
        <p className='text-red-700'>Email is required</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Photo " />
          </div>
          <TextInput id="email1"  {...register("image")}  type="text" placeholder="URL" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput  {...register("password",
         { required: true,
          minLength:5, 
          maxLength: 20,
          pattern: /(?=.*[A-Z])(?=.*[0-9])/
        }) } 
          type="password"  />

          {errors.password?.type === "pattern" && (
        <p className='text-red-600'>Password must have At least one uppercase character,Minimum six characters
         At least one number</p>
        )}

        </div>
        <input type="submit" value="Register"  className='btn bg-purple-500'/>

        <p>Have an account? <Link to="/login">
         Login here
        </Link></p>
      </form>
    </Card>

        </div>
    );
};

export default Register;
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const {signIn} =useContext(AuthContext)

    const navigate =useNavigate()

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;

        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        
        signIn(email,password)
        .then(res=>{
            const user =res.user;
            console.log("Login User: ",user);
            navigate("/")
        })

    }
    return (
        <div >
            
    <Card className="max-w-lg">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleLogin}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" name="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" name="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
        <p>Don't have an account? <Link to="/register">
         SignUp here
        </Link></p>
      </form>
    </Card>

        </div>
    );
};

export default Login;
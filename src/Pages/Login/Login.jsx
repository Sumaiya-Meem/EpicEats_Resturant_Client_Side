import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;

        const email= form.email.value;
        const password= form.password.value;

        console.log(email,password)
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
      </form>
    </Card>

        </div>
    );
};

export default Login;
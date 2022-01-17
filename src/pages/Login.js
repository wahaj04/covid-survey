import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { useState } from "react"

import { Layout } from 'antd';
import { Form, Input, Button} from 'antd';

const { Header} = Layout;

const Login = ()=>{
  const navigate = useNavigate()
  const [userLoginEmail, setUserLoginEmail] = useState('');
  const [userLoginPass, setUserLoginPass] = useState('');

  const loginHandler = async() => {
    try{
    const loginUser = await signInWithEmailAndPassword(auth, userLoginEmail, userLoginPass);
    if( loginUser)
    {
      navigate('../Form')

    }
    console.log(loginUser)
  }
  catch(error)
  {
    console.log(error.message)
  }
}
  


return(
  <div>
    <Header>
      <h1 >LOGIN FORM</h1>
    </Header>

  <Form
  name="normal_login"
  className="login-form"
  initialValues={{
    remember: true,
  }}
  
>      <Form.Item
        
        label="UserEmail"
        name="userLoginEmail"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
        
      >
      <Input onChange={(e) => {setUserLoginEmail(e.target.value)}}/>
      </Form.Item><br />

      <Form.Item
        label="Password"
        name="userLoginPass"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  onChange={(e) => {setUserLoginPass(e.target.value)}} />
      </Form.Item>

     
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ><br />
        <Button onClick={loginHandler} type="primary" htmlType="submit" className="btn-login">
         Login
        </Button>
      </Form.Item>
    </Form>
    </div>

)
}
export default Login;
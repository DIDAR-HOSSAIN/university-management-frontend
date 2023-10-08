"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "./../../assets/login-image.png"
import Image from "next/image";
import Form from "@/components/Forms/Form";
import {SubmitHandler} from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";


type FormValues = {
    id: string;
    password: string;
};


const LoginPage = () => {
const [userLogin] = useUserLoginMutation();
const router = useRouter();

    const onSubmit:SubmitHandler<FormValues> = async(data:any) =>{
        try{
            const res = await userLogin({...data}).unwrap();
            if(res?.accessToken){
              router.push("/profile");
              message.success("User logged in successfully");
            }
            storeUserInfo({accessToken: res?.accessToken});
            console.log(res);
        }catch(err:any){
          console.log(err.message);
        }
    };
    return (
     <Row justify="center" align="middle" style={{ minHeight: "100vh", }}>
    <Col sm={12} md={16} lg={8}>
      <Image src={loginImage} width={500} alt="Login Image" />
    </Col>

    <Col sm={12} md={8} lg={8}>
      <h1 style={{ margin: "15px 0px" }}>Login your account</h1>
      <div>
        <Form submitHandler={onSubmit}>
            <div>
                <FormInput name="id" type="text" size="large" label="User ID" />
            </div>
            <div style={{ margin: "15px 0px" }}>
                <FormInput name="password" type="password" size="large" label="User Password" />
            </div>

            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    </Col>
  </Row>
    );
};

export default LoginPage;
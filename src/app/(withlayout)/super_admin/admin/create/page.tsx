"use client";

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import UMBreadcrumb from '@/components/ui/UMBreadcrumb';
import { Button, Col, Row } from 'antd';

const CreateAdminPage  = () => {

    const onSubmit = async(data:any) =>{
        try{
            console.log(data);
        }catch(err:any){
          console.log(err.message);
        }
    };

    return (
        <div>
            <UMBreadcrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>
        <div style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>

        <p style={{ fontSize:"18px", marginBottom:"10px"  }}>
          Admin Information
        </p>
      

      <Form submitHandler={onSubmit}>
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <FormInput type="text" name="admin.name.firstName" size="large" label="First Name" />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput type="text" name="admin.name.middleName" size="large" label="First Name" />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom:"10px" }}>
            <FormInput type="text" name="admin.name.lastName" size="large" label="First Name" />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom:"10px" }}>
            <FormInput type="password" name="password" size="large" label="Password" />
          </Col>
        </Row>
        </div>
        <Button htmlType="submit" type="primary">Create</Button>
      </Form>
       </div>
        </div>
    );
};

export default CreateAdminPage ;
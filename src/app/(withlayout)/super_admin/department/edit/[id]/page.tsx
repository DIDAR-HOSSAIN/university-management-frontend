"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";


type IDprops = {
    params:any;
};

const EditDepartmentPage = ({params}:IDprops) => {
    const {id} = params;
    const {data, isLoading} = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();
    console.log("redux rtk", data?.title);

    const onSubmit = async (values: {title:string}) => {
    message.loading("Updating...");
    try {
    console.log(values);
      await updateDepartment( {id, body:values} );
      message.success("Department updated successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title:data?.title || "",
  }


    return (
        <div>
        <UMBreadcrumb items={[
        {
        label: "super_admin",
        link: "/super_admin"
        },
        {
        label: "department",
        link: "/super_admin/department"
        },
        ]}
        />

        <ActionBar title="Update Department"></ActionBar>
            <h1>{id}</h1>

        <Form submitHandler={onSubmit} defaultValues={defaultValues} >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
        </div>
    );
};

export default EditDepartmentPage;
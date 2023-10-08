import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"
import FormSelectField from "../Forms/FormSelectField"
import UploadImage from "../ui/UploadImage"
import { acDepartmentOptions, acSemesterOptions, facultyOptions, genderOptions } from "@/constants/global"

  const StudentInfo  = () => {

  return (
        <div style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
              marginTop: "20px"
            }}>

        <p style={{ fontSize:"18px", marginBottom:"10px"  }}>
          Student Information
        </p>
      
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <FormInput type="text" name="student.name.firstName" size="large" label="First Name" />
          </Col>
          <Col className="gutter-row" span={6}>
            <FormInput type="text" name="student.name.middleName" size="large" label="Middle Name" />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormInput type="text" name="student.name.lastName" size="large" label="Last Name" />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormInput type="password" name="password" size="large" label="Password" />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormSelectField size="large" name="student.academicDepartment" options={acDepartmentOptions} label=" Academic Department" placeholder='Select academic department' />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormSelectField size="large" name="student.academicFaculty" options={facultyOptions} label=" Academic Faculty" placeholder='Select academic faculty' />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormSelectField size="large" name="student.academicSemester" options={acSemesterOptions} label=" Academic Semester" placeholder='Select academic semester' />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
            <FormSelectField size="large" name="student.gender" options={genderOptions} label=" Gender" placeholder='Select gender' />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom:"10px" }}>
             <UploadImage />
          </Col>
        </Row>
        </div>

    );
};

export default StudentInfo;
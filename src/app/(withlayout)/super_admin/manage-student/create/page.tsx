"use client";

import StepperForm from '@/components/StepperForm/StepperForm';
import GuardianInfo from '@/components/StudentForms/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentForms/LocalGuardianInfo';
import StudentBasicInfo from '@/components/StudentForms/StudentBasicInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import UMBreadcrumb from '@/components/ui/UMBreadcrumb';
import React from 'react';

const CreateStudentPage = () => {
    const base = "super_admin";

    const steps = [
  {
    title: "Student Information",
    content: <StudentInfo />,
  },
  {
    title: 'Basic Information',
    content: <StudentBasicInfo />,
  },
  {
    title: 'Guardian Information',
    content: <GuardianInfo />,
  },
  {
    title: 'Local Guardian Information',
    content: <LocalGuardianInfo />,
  },
];

const handleStudentSubmit = async (data : any) => {
    try {
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};


    return (
        <div>
        <UMBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1>Create Student</h1>
      <StepperForm submitHandler={(value)=>handleStudentSubmit(value)} steps={steps} />
        </div>
    );
};

export default CreateStudentPage;
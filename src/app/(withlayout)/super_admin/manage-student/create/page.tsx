"use client";

import UMBreadcrumb from '@/components/ui/UMBreadcrumb';
import React from 'react';

const CreateStudentPage = () => {

    const base = "super_admin";

    return (
        <div>
        <UMBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1>Create Faculty</h1>
        </div>
    );
};

export default CreateStudentPage;
"use client";

import UMBreadcrumb from '@/components/ui/UMBreadcrumb';
import React from 'react';

const CreateFacultyPage = () => {

    const base = "super_admin";
    return (
        <div>
        <UMBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
        </div>
    );
};

export default CreateFacultyPage;
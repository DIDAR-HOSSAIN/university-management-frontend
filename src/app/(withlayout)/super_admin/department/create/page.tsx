"use client";

import UMBreadcrumb from '@/components/ui/UMBreadcrumb';
import React from 'react';

const CreateDepartmentPage = () => {

    const base = "super_admin";
    return (
        
        <div>
            <UMBreadcrumb
            items={[
            { label: `${base}`, link: `/${base}` },
            { label: "department", link: `/${base}/department` },
            ]}
        />
        <h1>Create Department</h1>
        </div>
    );
};

export default CreateDepartmentPage;
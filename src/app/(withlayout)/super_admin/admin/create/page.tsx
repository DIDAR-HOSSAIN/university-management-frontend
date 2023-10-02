"use client";

import UMBreadcrumb from '@/components/ui/UMBreadcrumb';

const CreateAdminPage  = () => {
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
        </div>
    );
};

export default CreateAdminPage ;
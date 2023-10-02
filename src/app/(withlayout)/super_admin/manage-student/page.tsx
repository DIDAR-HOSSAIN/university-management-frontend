"use client";

import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";


const ManageStudentPage = () => {

    const {role} = getUserInfo() as any;
    return (
        <div>
        <UMBreadcrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Student List</h1>
      <Link href="/super_admin/manage-student/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
    );
};

export default ManageStudentPage;
"use client";

import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { Button } from "antd";
import Link from "next/link";


const ManageFacultyPage = () => {
    return (
        <div>
            <UMBreadcrumb
            items={[
            {
                label: "super_admin",
                link: "/super_admin",
            },
            ]}
        />
        <h1>Faculty List</h1>
        <Link href="/super_admin/manage-faculty/create">
            <Button type="primary">Create</Button>
        </Link>
        </div>
    );
};

export default ManageFacultyPage;
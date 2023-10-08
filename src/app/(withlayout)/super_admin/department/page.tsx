"use client";

import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";


const DepartmentPage = () => {
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
        <h1>Department List</h1>
        <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
        </Link>

        <UMTable />
        </div>
    );
};

export default DepartmentPage;
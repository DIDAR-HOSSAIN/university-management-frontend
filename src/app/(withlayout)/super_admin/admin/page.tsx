"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { Button } from "antd";
import Link from "next/link";


const AdminPage = () => {
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

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
        </div>
    );
};

export default AdminPage;
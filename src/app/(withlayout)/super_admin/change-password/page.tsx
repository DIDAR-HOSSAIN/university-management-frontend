"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";


const ResetPasswordPage = () => {
    const {role} = getUserInfo() as any;

    return (
        <div>
            <UMBreadcrumb
            items= {[
                {
                    label:`${role}`,
                    link:`/${role}`,
                },
            ]}
             />           

            <ActionBar title="Change Password">
            <Link href="/super_admin/change-password/create">
            <Button type="primary">Create Password</Button>
            </Link>
            </ActionBar>
        </div>
    );
};

export default ResetPasswordPage;
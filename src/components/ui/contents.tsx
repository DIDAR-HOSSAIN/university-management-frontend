"use client";
import { Layout } from "antd";
import UMBreadcrumb from "./UMBreadcrumb";
import HeaderPage from "./header";

const {Content} = Layout

const Contents = ({children}:{children:React.ReactNode}) => {

    const base = "admin";
    return (
        <Content style={{ minHeight: "100vh" }}>
            <HeaderPage />
            <UMBreadcrumb
            items= {[
                {
                    label:`${base}`,
                    link:`/${base}`,
                },
                {
                    label:"Student",
                    link:`/${base}/student`,
                },
            ]}
             />
            {children}
        </Content>
    );
};

export default Contents;
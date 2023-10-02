"use client";
import { Layout } from "antd";
import HeaderPage from "./header";

const {Content} = Layout

const Contents = ({children}:{children:React.ReactNode}) => {

    return (
        <Content style={{ minHeight: "100vh" }}>
            <HeaderPage />
            {children}
        </Content>
    );
};

export default Contents;
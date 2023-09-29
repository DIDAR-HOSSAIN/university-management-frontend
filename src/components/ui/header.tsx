import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import {UserOutlined} from "@ant-design/icons";
import { removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';
import { useRouter } from 'next/navigation';


const { Header} = Layout;

const HeaderPage = () => {
    const router = useRouter();
    const logout = ()=>{
        removeUserInfo(authKey)
        router.push("/login");
    }

    const items: MenuProps['items'] =[{ 
        key:"0",
        label:(
        <Button onClick={logout} type='text' danger>
            Logout
        </Button>
        )
     }]
    return (
        <Header style={{ background:"#aaa" }}>
            <Row justify="end" align="middle" style={{ height:"100%" }}>
                <Dropdown menu={{ items }}>
                <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
                </Space>
                </Dropdown>
            </Row>

        </Header>
    );
};

export default HeaderPage;
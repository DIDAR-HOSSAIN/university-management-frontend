import { Breadcrumb } from "antd";
import Link from "next/link";
import {HomeTwoTone} from "@ant-design/icons";

const UMBreadcrumb = ({
    items
}:{
    items:{
        label:string;
        link:string;
    }[];
}) => {

    const breadcrumbItems = [
        {
            title :(
                <Link href="/">
                   <HomeTwoTone />     
                </Link>
            ),
        },

        ...items.map(item =>{
            return {
                title : item.link? (
                <Link href={item.link}>
                    {item.label}
                </Link>
                ):(
                <span>
                    {item.label}
                </span>
                ),
            };
        })
    ];

    return <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    
};

export default UMBreadcrumb;
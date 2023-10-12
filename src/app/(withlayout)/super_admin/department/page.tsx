"use client";

import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import UMTable from "@/components/ui/UMTable";
import {useDeleteDepartmentMutation, useDepartmentsQuery} from "@/redux/api/departmentApi";
import {Button, message} from "antd";
import Link from "next/link";
import {useState} from "react";
import { EditOutlined, DeleteOutlined, ReloadOutlined} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";



const DepartmentPage = () => {

    const query: Record < string,
        any > = {};

    const [page, setPage] = useState < number > (1);
    const [size, setSize] = useState < number > (10);
    const [sortBy, setSortBy] = useState < string > ("");
    const [sortOrder, setSortOrder] = useState < string > ("");
    const [searchTerm, setSearchTerm] = useState < string > ("");

    const [deleteDepartment] = useDeleteDepartmentMutation();

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    // query["searchTerm"] = searchTerm;

const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }


    const {data, isLoading} = useDepartmentsQuery({... query});
    const departments = data ?. departments;
    const meta = data ?. meta;

    const deleteHandler = async (id: string) => {
    message.loading("Deleting...");
    try {
      await deleteDepartment(id)
      console.log(data);
      message.success("Department deleted successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title'
        }, {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
             render: function (data: any) {
            return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
            key: 'age',
            sorter: true
            // sorter:(a:any, b:any)=>a.age - b.age,
        }, {
            title: 'Action',
            render: function (data : any) {
                return (
                    <>
                    <Link href={`/super_admin/department/edit/${data?.id}`}>
                        <Button style={
                            {
                                margin: "0px 5px"
                            }
                        }
                        onClick={
                            () => console.log(data)
                        }
                        type="primary">
                        <EditOutlined/>
                    </Button>
                    </Link>

                        <Button onClick={
                                () => deleteHandler(data?.id)
                            }
                            type="primary"
                            danger>
                            <DeleteOutlined/>
                        </Button>
                    </>
                );
            }
        },

    ];

    // const tableDta = [
    //     {
    //         key: '1',
    //         name: 'didar',
    //         age: 32,
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //     },
    //     ];


    const onPaginationChange = (page : number, pageSize : number) => {
        setPage(page);
        setSize(pageSize);
    }

    const onTableChange = (pagination : any, filter : any, sorter : any) => {
        const {order, field} = sorter;
        setSortBy(field as string)
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };

    const resetFilters = ()=>{
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    }

    return (
        <div>
            <UMBreadcrumb items={
                [{
                        label: "super_admin",
                        link: "/super_admin"
                    },]
            }/>
            <ActionBar title="Department List">
                <input type="text" placeholder="Search..."
                    style={
                        {
                            width: "20%"
                        }
                    }
                    onChange={
                        (e) => {
                            setSearchTerm(e.target.value)
                        }
                    }/>
                <div>
                    <Link href="/super_admin/department/create">
                    <Button type="primary">Create</Button>
                </Link>
                    {
                        (!!sortBy || !!sortOrder || !!searchTerm)&&(

                            <Button onClick={resetFilters} type="primary" style={{ margin: "0px 5px" }}>
                                <ReloadOutlined />
                            </Button>
                        )
                    }
                
                </div>
            </ActionBar>


            <UMTable loading={isLoading}
                columns={columns}
                dataSource={departments}
                pageSize={size}
                totalPages={
                    meta ?. total
                }
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}/>

        </div>
    );
};

export default DepartmentPage;




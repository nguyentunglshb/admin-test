import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link, Outlet } from "react-router-dom";

import { useQueryGetPosts } from "../apis";
import { ColumnsProps, Post } from "../models";
import { Navigation } from "@/dictionary";

const action = [
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text: string, record: Post, index: number) => {
      return (
        <Link to={Navigation.POST_DETAIL.replace(":id", record.id.toString())}>
          View
        </Link>
      );
    },
  },
];

export const ListPost = () => {
  const [filteredData, setFilteredData] = useState<Post[]>([]);

  const { data } = useQueryGetPosts();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ] as ColumnsProps<Post>[];

  useEffect(() => {
    setFilteredData(data?.data ?? []);
  }, [data?.data]);

  return (
    <div>
      <Table
        rowKey="id"
        columns={columns.concat(action)}
        dataSource={filteredData}
      />
      <Outlet />
    </div>
  );
};

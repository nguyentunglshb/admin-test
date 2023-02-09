import React from "react";
import { Button, Input, Table } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";

import { useQueryGetPosts } from "../apis";
import { ColumnsProps, Post } from "../models";
import { Navigation } from "@/dictionary";
import { Spinner } from "@/components";
import { usePushQueryToUrl } from "@/hooks";

interface QueryParamsForm {
  title?: string;
  userId?: string;
}

const action = [
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text: string, record: Post, index: number) => {
      return (
        <Link to={Navigation.POST_DETAIL.replace(":id", record.id.toString())}>
          <EyeOutlined />
        </Link>
      );
    },
  },
];

export const ListPost = () => {
  const { search } = useLocation();

  const params = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQueryGetPosts(params);

  const { pushQuery } = usePushQueryToUrl();

  const { control, handleSubmit } = useForm<QueryParamsForm>({
    defaultValues: {
      title: params.title ?? "",
      userId: params.userId ?? "",
    },
  });

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

  const onSubmit = (data: QueryParamsForm) => {
    if (!data.title?.trim()) delete data.title;
    if (!data.userId?.trim()) delete data.userId;
    pushQuery(data as Record<string, string>);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input {...field} placeholder="title" />}
        />
        <Controller
          control={control}
          name="userId"
          render={({ field }) => <Input {...field} placeholder="userId" />}
        />
        <Button htmlType="submit">Submit</Button>
      </form>

      <Spinner isLoading={isLoading}>
        <Table
          rowKey="id"
          columns={columns.concat(action)}
          dataSource={data?.data}
        />
      </Spinner>
      <Outlet />
    </div>
  );
};

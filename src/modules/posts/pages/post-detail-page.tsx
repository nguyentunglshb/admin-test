import React from "react";
import { Modal, Typography } from "antd";
import { useParams, useNavigate } from "react-router-dom";

import { Navigation } from "@/dictionary";
import { useQuerryPostDetail } from "../apis/useQuerryPostDetail";
import { Spinner } from "@/components";

const { Title, Paragraph } = Typography;

export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuerryPostDetail(id ?? "");

  const closeModal = () => {
    navigate(Navigation.POSTS);
  };

  return (
    <Modal open={!!id} onCancel={closeModal} onOk={closeModal}>
      <Spinner isLoading={isLoading}>
        <Title>{data?.data?.title}</Title>
        <Paragraph>{data?.data?.body}</Paragraph>
        <Paragraph
          style={{
            color: "blue",
          }}
        >
          User Id: {data?.data?.userId}
        </Paragraph>
      </Spinner>
    </Modal>
  );
};

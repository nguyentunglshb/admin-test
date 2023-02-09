import React from "react";
import { Modal } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/dictionary";

export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(Navigation.POSTS);
  };

  return (
    <Modal open={!!id} onCancel={closeModal}>
      This is modal
    </Modal>
  );
};

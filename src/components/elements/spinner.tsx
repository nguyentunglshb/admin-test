import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface SpinnerProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Spinner = ({ children, isLoading }: SpinnerProps) => {
  return isLoading ? (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  ) : (
    <>{children}</>
  );
};

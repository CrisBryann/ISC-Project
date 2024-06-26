"use client";
import React from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleGoHome}>
          Back Home a
        </Button>
      }
    />
  );
};
export default NotFound;

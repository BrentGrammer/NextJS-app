"use client";
import React from "react";

interface Props {
  error: Error; // NextJS automatically passes Error obj to this component
  reset: () => void; // NextJS passes this automatically - used for retries
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      <div>An unexpected Error has occurred.</div>
    </>
  );
};

export default ErrorPage;

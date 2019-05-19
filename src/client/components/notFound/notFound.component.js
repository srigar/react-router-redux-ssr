import React from "react";

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    staticContext.notFound = true;
  }
  return <h1>Not Found</h1>;
};

export default {
  component: NotFoundPage
};

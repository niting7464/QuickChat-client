import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "QuickChat",
  description = "This is Chatter App",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;

import React from "react";
import Helmet from "react-helmet";

const Meta = () => {
  return (
    <Helmet>
      <link href="" rel="canonical" />
      <meta name="theme-color" content="#55828b" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#55828b" />
      <title>Oluwaferanmi Olatunji &mdash; Frontend Developer</title>
      <meta
        name="description"
        content="I am a self taught frontend developer based in Lagos, Nigeria. I enjoy creating beautiful, responsive, functional and interactive user interfaces."
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Oluwaferanmi Olatunji &mdash; Frontend Devloper"
      />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta
        property="og:description"
        content="I am a self taught frontend developer based in Lagos, Nigeria. I enjoy creating beautiful, responsive, functional and interactive user interfaces."
      />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:creator" content="https://twitter.com/rinsoIa" />
      <meta
        name="twitter:description"
        content="I am a self taught frontend developer based in Lagos, Nigeria. I enjoy creating beautiful, responsive, functional and interactive user interfaces."
      />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="https://twitter.com/rinsoIa/" />
    </Helmet>
  );
};

export default Meta;

import React, { cloneElement } from "react";
import { Helmet } from "react-helmet";

export default function ReactHelmet(props) {
  const [title, setTitle] = React.useState(props.title);
  const [link, setLink] = React.useState(props.link);
  const [description, setDescription] = React.useState(props.description);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={link} />
        <meta name="description" content={description} />
      </Helmet>
      {cloneElement(props.children, {
        link,
        setLink,
        description,
        setDescription,
        title,
        setTitle,
      })}
    </>
  );
}

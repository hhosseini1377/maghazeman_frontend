import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Typography } from "@material-ui/core";

import { Breadcrumbs } from "./BreadCrumb.styled-compoenents";
import { IBreadCrumb } from "./BreadCrumb.types";

const BreadCrumb = ({ links, pageText }: IBreadCrumb) => {
  return (
    <Breadcrumbs aria-label="Breadcrumb" mt={2}>
      {links.map((link, indx) => (
        <Link component={NavLink} key={indx} exact to={link.to}>
          {link.text}
        </Link>
      ))}
      <Typography>{pageText}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;

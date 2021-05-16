import React, { FC } from "react";
import { CardContent, Typography } from "@material-ui/core";

import { ICard } from "./Card.types";
import { CardWrapper } from "./Card.styled-components";

const Card: FC<ICard> = ({ children, title, subTitle }) => {
  return (
    <CardWrapper>
      <CardContent>
        {children || (
          <>
            <Typography variant="h3" gutterBottom align="center">
              {title}
            </Typography>
            <Typography variant="h5" component="h2" align="center">
              {subTitle}
            </Typography>
          </>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

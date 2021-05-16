import React from "react";
import { Typography } from "@material-ui/core";
import Card from "../Card";
import { persianNumbers } from "../../utils/persian-text";
import { IExtendedCard } from "./ExtendedCard.types";

const ExtendedCard = ({
  title,
  subtitle,
  content,
  contentDescription,
}: IExtendedCard<any>) => {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h3" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="h5">{title}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexBasis: "40%",
            justifyContent: "space-between",
          }}
        >
          <div>
            {content.map((con, indx) => (
              <Typography variant="body1" key={indx}>
                {con}
              </Typography>
            ))}
          </div>
          <div>
            {contentDescription.map((description, indx) => (
              /* eslint-disable */
              <Typography key={indx}>{persianNumbers(description)}</Typography>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExtendedCard;

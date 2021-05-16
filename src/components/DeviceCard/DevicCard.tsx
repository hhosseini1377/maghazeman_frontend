import React from "react";
import { Grid, CardActions, Collapse } from "@material-ui/core";
import Card from "../Card";

import DeviceModel from "../DeviceModel";
import { IDeviceCard } from "./DeviceCard.types";
import {
  useStyles,
  Typography,
  ColumnWrapper,
} from "./DeviceCard.styled-components";

const DeviceCard = ({
  deviceOS,
  visibleColumns,
  hiddenColumns,
}: IDeviceCard) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card>
        <Grid container>
          <Grid container alignItems="center">
            <Typography variant="h5">نام دستگاه / سازنده دستگاه</Typography>
            <DeviceModel>{deviceOS}</DeviceModel>
          </Grid>
          <Grid container>
            <Grid lg={4}>
              {visibleColumns[0].map((mkData) => (
                <ColumnWrapper>
                  <Typography variant="subtitle1" mb={1}>
                    {mkData.data}:
                  </Typography>
                  <Typography variant="subtitle2" mb={1} pr={2}>
                    {mkData.value}
                  </Typography>
                </ColumnWrapper>
              ))}
            </Grid>
            <Grid lg={4}>
              {visibleColumns[1].map((mkData) => (
                <ColumnWrapper>
                  <Typography variant="subtitle1" mb={1}>
                    {mkData.data}:
                  </Typography>
                  <Typography variant="subtitle2" mb={1} pr={2}>
                    {mkData.value}
                  </Typography>
                </ColumnWrapper>
              ))}
            </Grid>
            <Grid lg={4}>
              {visibleColumns[2].map((mkData) => (
                <ColumnWrapper>
                  <Typography variant="subtitle1" mb={1}>
                    {mkData.data}:
                  </Typography>
                  <Typography variant="subtitle2" mb={1} pr={2}>
                    {mkData.value}
                  </Typography>
                </ColumnWrapper>
              ))}
            </Grid>
            <Grid item lg={12}>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid container>
                  <Grid lg={4}>
                    {hiddenColumns[0].map((mkData) => (
                      <ColumnWrapper>
                        <Typography variant="subtitle1" mb={1}>
                          {mkData.data}:
                        </Typography>
                        <Typography variant="subtitle2" mb={1} pr={2}>
                          {mkData.value}
                        </Typography>
                      </ColumnWrapper>
                    ))}
                  </Grid>
                  <Grid lg={4}>
                    {hiddenColumns[1].map((mkData) => (
                      <ColumnWrapper>
                        <Typography variant="subtitle1" mb={1}>
                          {mkData.data}:
                        </Typography>
                        <Typography variant="subtitle2" mb={1} pr={2}>
                          {mkData.value}
                        </Typography>
                      </ColumnWrapper>
                    ))}
                  </Grid>
                  <Grid lg={4}>
                    {hiddenColumns[2].map((mkData) => (
                      <ColumnWrapper>
                        <Typography variant="subtitle1" mb={1}>
                          {mkData.data}:
                        </Typography>
                        <Typography variant="subtitle2" mb={1} pr={2}>
                          {mkData.value}
                        </Typography>
                      </ColumnWrapper>
                    ))}
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
          <CardActions className={classes.root}>
            <Typography
              color="primary"
              style={{ textAlign: "left", cursor: "pointer" }}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? "بستن" : "بیشتر"}
            </Typography>
          </CardActions>
        </Grid>
      </Card>
    </>
  );
};

export default DeviceCard;

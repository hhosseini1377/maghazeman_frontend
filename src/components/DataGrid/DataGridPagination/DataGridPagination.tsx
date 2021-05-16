import React from "react";
import { GridBaseComponentProps } from "@material-ui/data-grid";
import { CenteredPagination } from "./DataGridPagination.styled-components";

const DataGridPagination = ({ numberOfRows }: { numberOfRows: number }) => {
  const [page, setPage] = React.useState(1);
  return (
    <CenteredPagination
      shape="rounded"
      color="primary"
      page={page}
      onChange={(event, value) => {
        setPage(value);
      }}
      variant="outlined"
      showFirstButton
      showLastButton
    />
  );
};

export default DataGridPagination;

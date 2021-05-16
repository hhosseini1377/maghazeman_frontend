import React, { forwardRef } from "react";
import MaterialTable from "material-table";

// Its advised to default-import icons according to material-table docs
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";

import { Card, Paper, useStyles } from "./DataGrid.styled-components";
import { IDataGrid } from "./DataGrid.types";
import DataGridToolbar from "./DataGridToolbar";

import { tableFALocaleText } from "../../utils/dataGridLocalization";

/**
 * Make sure passed `data` and `columns` props
 *  are of type `IDataGridData[]` and `IDataGridColumn[]`
 *  respectively
 */
const DataGrid = ({ columns, data, pageSize, modalType }: IDataGrid) => {
  const classes = useStyles();
  return (
    <Card mb={6}>
      <Paper>
        <div className={classes.root}>
          <MaterialTable
            columns={columns}
            data={data}
            options={{
              // exportButton: true,
              toolbarButtonAlignment: "left",
              showTitle: false,
              // filtering: true,
              paginationType: "stepped",
              pageSize,
              pageSizeOptions: [],
            }}
            components={{
              Toolbar: (props) => (
                <DataGridToolbar modalType={modalType} {...props} />
              ),
            }}
            localization={tableFALocaleText}
            icons={{
              Search: forwardRef((props, ref) => (
                <Search {...props} ref={ref} />
              )),
              Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
              Delete: forwardRef((props, ref) => (
                <DeleteOutline {...props} ref={ref} />
              )),
              FirstPage: forwardRef((props, ref) => (
                <LastPage {...props} ref={ref} />
              )),
              LastPage: forwardRef((props, ref) => (
                <FirstPage {...props} ref={ref} />
              )),
              NextPage: forwardRef((props, ref) => (
                <ChevronRight {...props} ref={ref} />
              )),
              PreviousPage: forwardRef((props, ref) => (
                <ChevronLeft {...props} ref={ref} />
              )),
              ResetSearch: forwardRef((props, ref) => (
                <Clear {...props} ref={ref} />
              )),
              SortArrow: forwardRef((props, ref) => (
                <ArrowDownward {...props} ref={ref} />
              )),
              Export: forwardRef((props, ref) => (
                <SaveAlt {...props} ref={ref} />
              )),
              Filter: forwardRef((props, ref) => (
                <FilterList {...props} ref={ref} />
              )),
            }}
          />
        </div>
      </Paper>
    </Card>
  );
};

export default DataGrid;

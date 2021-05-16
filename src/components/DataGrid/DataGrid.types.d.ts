import { string } from "prop-types";
import * as React from "react";

export interface IDataGridData {
  [key: string]: string;
  id: string;
}
export interface IDataGridColumn {
  field: string;
  title: string;
  render?: (rowData: RowData) => string | React.ReactNode;
}

export interface IDataGrid {
  data: Array<IDataGridData>;
  columns: Array<IDataGridColumn>;
  pageSize: number;
  modalType?: string;
}

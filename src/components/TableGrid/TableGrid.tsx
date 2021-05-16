import React, { FC } from "react";

import {
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import { MoreVertical } from "react-feather";
import { Card, TableWrapper, Paper } from "./TableGrid.styled-components";
import { ITableGrid } from "./TableGrid.types";

const TableGrid: FC<ITableGrid> = ({ title, rows, cols, markLastRow }) => {
  const createData1 = (...rest: any[]) => {
    const colLength = cols.length;
    let ReturnedObj = {};
    for (let i = 0; i < colLength; i++) {
      ReturnedObj = Object.assign(ReturnedObj, { [cols[i].id]: rest[i] });
    }
    return ReturnedObj;
  };

  const modifiedRows = rows.map((row: any) => createData1(...row));

  return (
    <Card mb={6}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title={title}
      />
      <Paper>
        <TableWrapper>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {cols.map((col: any) => (
                  <TableCell key={col.id} align="center">
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {modifiedRows.map((row: any, indx: number) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={indx}>
                  {cols.map((column: any) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{
                          color:
                            markLastRow && indx === modifiedRows.length - 1
                              ? red[600]
                              : "",
                        }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Card>
  );
};

export default TableGrid;

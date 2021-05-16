import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";
import { MTableToolbar } from "material-table";
import SaveAlt from "@material-ui/icons/SaveAlt";
import FilterList from "@material-ui/icons/FilterList";

import Modals from "../../Modals";

import {
  CustomizedButton,
  ButtonsWrapper,
  DataGridToolbarWrapper,
} from "./DataGridToolbar.styled-components";

const DataGridToolbar = (props: any) => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const { modalType, ...otherProps } = props;

  return (
    <DataGridToolbarWrapper>
      <MTableToolbar {...otherProps} />
      <ButtonsWrapper>
        {/* <Button href="#text-buttons" color="primary"></Button> */}
        <Tooltip title="فیلتر کردن">
          <CustomizedButton
            size="small"
            onClick={() => setModalOpenStatus((c) => !c)}
          >
            <FilterList />
          </CustomizedButton>
        </Tooltip>
        <Tooltip title="دانلود CSV">
          <CustomizedButton size="small">
            <SaveAlt />
          </CustomizedButton>
        </Tooltip>
        {modalType && modalOpenStatus && (
          <>
            <Modals
              modalType={modalType}
              handleClick={setModalOpenStatus}
              open={modalOpenStatus}
            />
          </>
        )}
        {/*
        <Tooltip title="جستجو">
          <CustomizedButton size="small">
            <Search />
          </CustomizedButton> 
        </Tooltip>
        */}
      </ButtonsWrapper>
    </DataGridToolbarWrapper>
  );
};

export default DataGridToolbar;

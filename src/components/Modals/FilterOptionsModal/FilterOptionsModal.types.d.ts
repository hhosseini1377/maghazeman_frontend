import React from "react";

export interface IFilterOptionsModal {
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

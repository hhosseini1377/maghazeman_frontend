import React, { useCallback } from "react";
import FilterOptionsModal from "./FilterOptionsModal";
import { IModalType } from "./Modals.types";

const Modals = ({
  modalType,
  handleClick,
  open,
  ...otherProps
}: IModalType) => {
  const selectModal = useCallback(() => {
    switch (modalType) {
      case "UsersList":
        return (
          <FilterOptionsModal
            handleClick={handleClick}
            open={open}
            {...otherProps}
          />
        );
      default:
        return <></>;
    }
    /* eslint-disable */
  }, [modalType]);

  return selectModal();
};

export default Modals;

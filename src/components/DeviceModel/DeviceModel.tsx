import React from "react";
import { CustomChip } from "./DeviceModel.styled-components";

const DeviceModel: React.FC = ({ children }) => {
  return <CustomChip label={children} color="primary" />;
};

export default DeviceModel;

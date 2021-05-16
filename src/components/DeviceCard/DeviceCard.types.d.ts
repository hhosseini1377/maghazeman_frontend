interface IDeviceData {
  data: string;
  value: string;
}

type DeviceDataColumnType = IDeviceData[];
export interface IDeviceCard {
  deviceOS: "iOS" | "Web" | "Andriod";
  visibleColumns: DeviceDataColumnType[];
  hiddenColumns: DeviceDataColumnType[];
}

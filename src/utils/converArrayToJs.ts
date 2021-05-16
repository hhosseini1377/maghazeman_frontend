type convertArrayToObj = (prop1: string, prop2: string, arr: any[]) => any;
export const convertArrayToObj: convertArrayToObj = (prop1, prop2, arr) => {
  const UpDataList: any = arr.reduce((total: any, currentValue: any, index) => {
    const data: any = {};
    data[prop1] = currentValue;
    data[prop2] = currentValue;

    return [...total, data];
  }, []);
  return UpDataList;
};

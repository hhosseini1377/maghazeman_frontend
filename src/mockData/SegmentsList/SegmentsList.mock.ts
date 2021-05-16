import { persianNumbers } from "../../utils/persian-text";

import { IDataGridColumn, IDataGridData } from "../../components/DataGrid";

export const columns: IDataGridColumn[] = [
  {
    field: "name",
    title: "نام دسته‌بندی",
  },
  {
    field: "usersCount",
    title: "تعداد کاربر",
  },
  {
    field: "campaignsCount",
    title: "تعداد کمپین",
  },
  {
    field: "journeyCount",
    title: "تعداد Journey",
  },
  {
    field: "creationDate",
    title: "تاریخ ایجاد",
  },
];

export const data: IDataGridData[] = [
  {
    id: "101",
    name: "test1",
    usersCount: persianNumbers("31"),
    campaignsCount: persianNumbers("54"),
    journeyCount: persianNumbers("22"),
    creationDate: persianNumbers("1309/08/25"),
  },
  {
    id: "102",
    name: "test2",
    usersCount: persianNumbers("32"),
    campaignsCount: persianNumbers("534"),
    journeyCount: persianNumbers("23"),
    creationDate: persianNumbers("1399/08/252"),
  },
  {
    id: "103",
    name: "test3",
    usersCount: persianNumbers("3"),
    campaignsCount: persianNumbers("54"),
    journeyCount: persianNumbers("32"),
    creationDate: persianNumbers("1399/08/25"),
  },
  {
    id: "104",
    name: "test4",
    usersCount: persianNumbers("3"),
    campaignsCount: persianNumbers("2"),
    journeyCount: persianNumbers("3"),
    creationDate: persianNumbers("1399/01/25"),
  },
];

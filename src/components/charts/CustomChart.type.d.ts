interface dataChart {
  datasets: SurChartDataSets[];
  labels: string[];
  options?: ChartOptions;
  width?: number;
  height?: number;
}
export interface ICustomChart {
  typeChart: string;
  dataChart?: IFakeDataChart;
  title: string;
  subtitle?: string;
  theme?: any;
}
export interface IFakeDataChart {
  labels: string[];
  data: any[];
}
export interface IDatasets {
  label: string;
  fill?: boolean;
  backgroundColor: string;
  data: number[];
}

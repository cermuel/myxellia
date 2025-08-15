interface Stat {
  value: string;
  label: string;
  change: number;
}

export interface SalesCardProps {
  chartLabels: string[];
  chartDataSets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
  stats: Stat[];
  dateRange: string;
}

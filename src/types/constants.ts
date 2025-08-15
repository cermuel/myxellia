export interface NAV_TABS {
  icon: string;
  title: string;
  url: string | undefined;
}
export interface METRICS {
  image: string[];
  title: string;
  metric: string;
}

export interface OVERVIEW {
  icon: string;
  title: string;
  stats: OVERVIEW_STATS[];
}

interface OVERVIEW_STATS {
  title: string;
  value: string;
}

export interface CHART_DATA {
  label: string;
  data: number[];
  backgroundColor: string;
}
export interface CHART_STAT {
  value: string;
  label: string;
  change: number;
}

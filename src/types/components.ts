import { Dispatch } from "react";

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

export interface CalendarProps {
  open: boolean;
  setIsOpen: Dispatch<boolean>;
}

export interface BudgetingProps {
  open: boolean;
  setIsOpen: Dispatch<boolean>;
}

export interface ArrowIconProps {
  color?: string;
}

export interface NavbarProps {
  setOpenCalendar: Dispatch<boolean>;
  setOpenBudgeting: Dispatch<boolean>;
}

import type { IconType } from "react-icons";
import type {
  BUDGET,
  CHART_DATA,
  CHART_STAT,
  METRICS,
  NAV_TABS,
  OVERVIEW,
} from "@/types/constants";
import { PiUsersFourFill } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";
import { TbAuth2Fa, TbLogout2 } from "react-icons/tb";

const MAIN_NAV_TABS: string[] = [
  "/icons/bell.svg",
  "/icons/calculator.svg",
  "/icons/calendar.svg",
  "/icons/message-notif.svg",
];

const SECONDARY_NAV_TABS: NAV_TABS[] = [
  { title: "Dashboard", icon: "/icons/home.svg", url: "/" },
  { title: "Listings", icon: "/icons/toolbox.svg", url: undefined },
  { title: "Users", icon: "/icons/user.svg", url: undefined },
  { title: "Request", icon: "/icons/article.svg", url: undefined },
  { title: "Applications", icon: "/icons/scroll.svg", url: undefined },
];

const METRICS: METRICS[] = [
  {
    metric: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    image: ["/images/metric-1.jpg", "/images/metric-2.jpg"],
  },
  {
    metric: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    image: [
      "/images/metric-2.jpg",
      "/images/metric-1.jpg",
      "/images/metric-3.jpg",
    ],
  },
  {
    metric: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    image: ["/images/metric-3.jpg", "/images/metric-1.jpg"],
  },
];

const OVERVIEW_STATS: OVERVIEW[] = [
  {
    title: "Listings Overview",
    icon: "/icons/home-colored.svg",
    stats: [
      { title: "Total", value: "1.8K" },
      { title: "Active", value: "80" },
      { title: "Archived", value: "1K" },
    ],
  },
  {
    title: "User Overview",
    icon: "/icons/user-colored.svg",
    stats: [
      { title: "Total", value: "20.7K" },
      { title: "Active", value: "8.5K" },
      { title: "Archived", value: "7.5K" },
    ],
  },
];
const CHART_DATA_SETS: CHART_DATA[] = [
  {
    label: "Blue",
    data: [35, 5, 15, 15, 10, 35, 23, 22, 34],
    backgroundColor: "#4545FE",
  },
  {
    label: "Green",
    data: [28, 28, 8, 28, 5, 50, 35, 8, 32],
    backgroundColor: "#12B76A",
  },
  {
    label: "Red",
    data: [10, 10, 3, 10, 8, 7, 15, 15, 8],
    backgroundColor: "#F04438",
  },
];

const CHART_STATS: CHART_STAT[] = [
  { value: "₦120,000,000.00", label: "Total Inflow", change: 2.5 },
  { value: "₦50,000,000.00", label: "MRR", change: 2.5 },
  {
    value: "₦200,000,000.00",
    label: "Commission Revenue",
    change: 0.5,
  },
  { value: "₦100,000,000.00", label: "GMV", change: -0.5 },
];
const CHART_LABELS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];
const BUDGET_DETAILS: BUDGET[] = [
  {
    title: "Set up annual budgets by account category",
    text: "Allocate funds across income and expense lines with full visibility.",
    icon: "/icons/settings.svg",
  },
  {
    title: "Track actuals vs budget in real time",
    text: "See how your community is performing against plan, month by month.",
    icon: "/icons/trend-up.svg",
  },
  {
    title: "Adjust figures and forecast with ease",
    text: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: "/icons/chart.svg",
  },
];

const USER_ACTIONS: { icon: IconType; title: string }[] = [
  { icon: PiUsersFourFill, title: "Teams" },
  { icon: TiUser, title: "Contact Person" },
  { icon: IoIosLock, title: "Change Password" },
  { icon: TbAuth2Fa, title: "2-Factor Authentication" },
  { icon: TbLogout2, title: "Logout" },
];
export const constants = {
  MAIN_NAV_TABS,
  SECONDARY_NAV_TABS,
  METRICS,
  OVERVIEW_STATS,
  CHART_DATA_SETS,
  CHART_STATS,
  CHART_LABELS,
  BUDGET_DETAILS,
  USER_ACTIONS,
};

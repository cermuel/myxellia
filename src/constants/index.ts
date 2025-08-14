import type { NAV_TABS } from "@/types/constants";

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
export const constants = { MAIN_NAV_TABS, SECONDARY_NAV_TABS };

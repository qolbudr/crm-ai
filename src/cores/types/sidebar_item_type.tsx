import type { JSX } from "react";

export interface SidebarItemType {
  label: string;
  icon?: JSX.Element;
  href: string; 
  isActive?: boolean;
}
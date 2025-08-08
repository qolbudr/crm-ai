import type { SidebarItemType } from "../types/sidebar_item_type";
import { Icon } from '@iconify/react';

export const sidebarItem: SidebarItemType[] = [
  {
    label: 'Dashboard',
    icon: <Icon icon="material-symbols:home-outline-rounded" className="size-6" />,
    href: '/',
  },
  {
    label: 'Customers',
    icon: <Icon icon="lucide:contact" className="size-6" />,
    href: '/customers',
  },
  {
    label: 'Appointments',
    icon: <Icon icon="lets-icons:calendar" className="size-6" />,
    href: '/appointments',
  },
  {
    label: 'Analytics',
    icon: <Icon icon="ion:analytics-outline" className="size-6" />,
    href: '/analytics',
  },
]
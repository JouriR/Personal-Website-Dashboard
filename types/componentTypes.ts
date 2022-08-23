export interface LinkPrimaryProps {
  children: string;
  href: string;
}

export interface LinkButtonProps {
  children: string;
  href: string;
}

export interface LinkNavigationProps{
  navItem: {
    name: string;
    href: string;
    icon: string;
    current: boolean;
  }
}
export interface SidebarOption {
  name: string;
  title: string;
  icon: string;
  route?: string;
  key?: string;
  test?: boolean;
  disabled?: boolean;
  isSuper?: boolean;
  children: SidebarOption[];
}

export interface SidebarOption {
  label?: string;
  route?: string;
  inUnderConstruction?: boolean;
  children?: Child[];
}

interface Child {
  label?: string;
  route?: string;
  children?: Child[];
}

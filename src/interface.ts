export interface MenuState {
	menuCollapse: boolean;
	lists: MenuList[];
};

export interface MenuList {
	icon?: string;
	name: string;
	child?: MenuList[];
};

export interface DataState {
  pageSize: number;
	page: number;
  totalPages: Option[];
  categoryValue: string;
  categoryOptions: Option[];
  subtitleValue: string;
	lists: DataList[];
};

export interface DataList {
  id: number;
  title: string;
  likes: number;
  comments: number;
  shares: number;
  tag: string;
  date: string;
  remark: boolean;
};

export interface Option {
  value: string | number;
  label: string;
};
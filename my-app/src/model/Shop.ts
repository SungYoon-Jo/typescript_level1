export type Shop = {
  title: string;
  ceo: string;
  location: Location;
  menu: Menu[];
};

export type Location = {
  city: string;
  state: string;
};

export type Menu = {
  name: string;
  price: number;
};

export type LocationWithState = Omit<Location, "state">;
export type LocationOnlyCity = Pick<Location, "city">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type ShopResponse = ApiResponse<Shop>;
export type MenuResponse = ApiResponse<Menu>;

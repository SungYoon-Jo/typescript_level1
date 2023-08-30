import React from "react";
import { Shop, Location } from "./model/Shop";

interface OwnProps {
  info: Shop;
  changeLocation(location: Location): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.ceo}</div>;
};

export default Store;

import React from "react";
import { Menu } from "./model/Shop";

interface OwnProps extends Menu {
  showBestMenu(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({ name, price, showBestMenu }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{showBestMenu("good")}</div>
    </div>
  );
};

export default BestMenu;

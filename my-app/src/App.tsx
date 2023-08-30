import React, { useState } from "react";
import "./App.css";
import Strore from "./Store";
import { Shop, Location } from "./model/Shop";
import BestMenu from "./BestMenu";

let data: Shop = {
  title: "GoodDay Shop",
  ceo: "Mr.Jo",
  location: {
    city: "New York",
    state: "NY",
  },
  menu: [
    {
      name: "pizza",
      price: 30000,
    },
    {
      name: "kimchi",
      price: 5000,
    },
    {
      name: "tea",
      price: 1000,
    },
  ],
};

const showBestMenu = (name: string) => {
  return name;
};

const App: React.FC = () => {
  const [myShop, setmyShop] = useState<Shop>(data);
  const changeLocation = (location: Location) => {
    setmyShop({
      ...myShop,
      location: location,
    });
  };
  return (
    <div className="App">
      <Strore info={myShop} changeLocation={changeLocation}></Strore>
      <BestMenu
        name="pizza"
        price={50000}
        showBestMenu={showBestMenu}
      ></BestMenu>
    </div>
  );
};

export default App;

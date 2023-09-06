import { Collapse, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import { NavbarWithMegaMenu } from "./components/NavbarWithMegaMenu";
import { navListMenu } from "./constants/common";
import NestedList from "./components/Test";
import { SwiperList } from "./components/SwiperList";
import { CollapseList } from "./components/CollapseList";
import { Section } from "./components/Section";
import { Transparency } from "./components/Transparency";
import { Customer } from "./components/Customer";
import { Revenue } from "./components/Revenue";
import { JoinTeam } from "./components/JoinTeam";
import Footer from "./components/Footer";
import { Intro } from "./components/Intro";

function App() {
  return (
    <>
      <NavbarWithMegaMenu navListMenu={navListMenu} />
      <Intro />
      <SwiperList />
      <CollapseList />
      <Transparency />
      <Customer />
      <Revenue />
      <JoinTeam />
      <Footer />
    </>
  );
}
export default App;

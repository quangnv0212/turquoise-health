import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton } from "@mui/material";
import * as React from "react";

export interface IImageSectionProps {
  title: string;
  img: string;
  desc: string;
  open: boolean;
  id: number;
}
const dataCollapse = [
  {
    id: 1,
    title: "Search Procedures",
    desc: "Search shoppable services to get an idea of the cost by providers in your area.",
    img: "	https://static.turquoise.health/static/images/faq-overview-img1.c6930ddc2c39.png",
  },
  {
    id: 2,
    title: "Compare Price",
    desc: "Search shoppable services to get an idea of the cost by providers in your area.",
    img: "	https://static.turquoise.health/static/images/faq-overview-img1.c6930ddc2c39.png",
  },
  {
    id: 3,
    title: "Weight Quality",
    desc: "Search shoppable services to get an idea of the cost by providers in your area.",
    img: "		https://static.turquoise.health/static/images/faq-overview-img2.6ec2ae72bb00.png",
  },
  {
    id: 4,
    title: "Calculate Estimate",
    desc: "Search shoppable services to get an idea of the cost by providers in your area.",
    img: "https://static.turquoise.health/static/images/faq-overview-img3.867479fe07d2.png",
  },
];

export function ImageSection({
  id,
  title,
  img,
  desc,
  open,
}: IImageSectionProps) {
  const [active, setActive] = React.useState(dataCollapse[0]);

  const handleClick = () => {
    setActive({
      id,
      desc,
      title,
      img,
    });
  };
  return (
    <div className="flex mx-28">
      <div className="">
        <img
          src="https://static.turquoise.health/static/images/faq-overview-img1.c6930ddc2c39.png"
          alt=""
        />
      </div>
      <div className="">
        <ListItemButton onClick={handleClick}>
          Search Procedures
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          Search shoppable services to get an idea of the cost by providers in
          your area.
        </Collapse>
      </div>
    </div>
  );
}

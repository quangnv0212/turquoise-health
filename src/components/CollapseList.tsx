import { Collapse, List, ListItemButton } from "@mui/material";
import * as React from "react";
import { Section } from "./Section";

export interface ICollapseListProps {}
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
export function CollapseList(props: ICollapseListProps) {
  const [active, setActive] = React.useState(dataCollapse[0]);
  console.log(active);
  return (
    <>
      <Section
        buttonText="Search Care"
        desc="   It's your right to know the cost of healthcare. Take advantage of
                 hospital price transparency by comparing the costs of services and
                 providers near you."
        title=" Shop healthcare just like anything else."
      >
        <div className="grid w-full grid-cols-2 gap-7">
          <div className="w-full">
            <img src={active.img} alt="" />
          </div>
          <div className="w-full">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className=""
            >
              {dataCollapse.map((x) => (
                <>
                  <ListItemButton
                    className="w-full text-2xl font-bold collapse-item"
                    onClick={() => setActive(x)}
                  >
                    {x.title}
                    {x.id === active.id ? <span>-</span> : <span>+</span>}
                  </ListItemButton>
                  <Collapse
                    in={x.id === active.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {x.desc}
                    </List>
                  </Collapse>
                </>
              ))}
            </List>
          </div>
        </div>
      </Section>
    </>
  );
}

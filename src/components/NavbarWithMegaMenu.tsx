import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Collapse from "@mui/material/Collapse";
import React from "react";
import { useMediaQuery } from "react-responsive";
export function NavbarWithMegaMenu({ navListMenu }: { navListMenu: any[] }) {
  const [openNav, setOpenNav] = React.useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const allowHover = isLargeScreen ? false : isSmallScreen ? true : false;
  function NavListMenu({
    navListMenuItems,
    label,
  }: {
    navListMenuItems: any[];
    label: string;
  }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    let isRich = navListMenuItems[0].icon;
    const a = `${
      isRich ? "grid grid-cols-2" : ""
    } text-black outline-none gap-y-2 outline-0 `;
    const b = "text-black outline-none gap-y-2 outline-0 ";
    const renderItems = (
      <ul className={isLargeScreen ? a : b}>
        {navListMenuItems.map(({ icon, title, description }, key) => (
          <a className="" href="#" key={key}>
            <MenuItem
              className={`flex menu-item items-center gap-3 rounded-lg min-w-[175px] ${
                isLargeScreen ? "hover:underline" : "hover:bg-gray-200"
              } `}
            >
              {isRich ? (
                <>
                  <div className={`rounded-lg p-5`}>
                    {React.createElement(icon, {
                      strokeWidth: 2,
                      className: "h-6 w-6",
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center pr-2 text-sm "
                    >
                      {title}
                    </Typography>
                    <div className="hidden lg:block ">
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-gray-400"
                      >
                        {description}
                      </Typography>
                    </div>
                  </div>
                </>
              ) : (
                <p className="p-3 rounded-lg">{title}</p>
              )}
            </MenuItem>
          </a>
        ))}
      </ul>
    );

    return (
      <List className="flex-col p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:p-1">
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={!allowHover}
        >
          <MenuHandler>
            <Typography variant="small" className="font-normal">
              <ListItem
                className="flex items-center justify-between gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <span className="text-black lg:text-white">{label}</span>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl menulist-bg rounded-xl lg:block">
            {renderItems}
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse in={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </List>
    );
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <>
      <div className="bg-[#01363D] py-5">
        <Navbar className="max-w-[1232px] border-none w-full m-0 px-4 py-2 mx-auto bg-[#01363D]">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="">
              <img
                src="https://static.turquoise.health/static/images/logo-wht.e66a9bd5dcf8.svg"
                alt=""
              />
            </div>
            <div className="hidden lg:flex">
              {navListMenu.map((x) => (
                <NavListMenu label={x.label} navListMenuItems={x.menulist} />
              ))}
            </div>
            <div className="hidden gap-2 lg:flex">
              <Button
                variant="text"
                size="sm"
                color="blue-gray"
                className="hidden text-black lg:inline-block text-xs font-bold bg-[#A8E6E1] rounded-3xl "
              >
                Platform Sign In
              </Button>
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="text-white lg:hidden "
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="w-6 h-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse in={openNav} timeout="auto">
            <div className="my-collapse">
              {navListMenu.map((x) => (
                <NavListMenu label={x.label} navListMenuItems={x.menulist} />
              ))}
              <div className="flex items-center justify-center w-full gap-2 flex-nowrap lg:hidden">
                <Button
                  variant="outlined"
                  size="sm"
                  color="blue-gray"
                  className=" text-black inline-block text-xs font-bold bg-[#A8E6E1] rounded-3xl mt-3 "
                >
                  Platform Sign In
                </Button>
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

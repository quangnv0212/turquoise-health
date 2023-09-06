import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { navListMenu } from "../constants/common";
const Footer = () => {
  return (
    <>
      <footer className="flex my-16 mx-52">
        <div className="w-1/3 ">
          <img
            src="https://static.turquoise.health/static/images/logo-foot.4e9810458d58.svg"
            alt=""
          />
          <div className="flex flex-row items-center gap-3 my-5 ">
            <div className="p-2 bg-black">
              <TwitterIcon className="text-white " />
            </div>
            <div className="p-2 bg-black">
              <LinkedInIcon className="text-white " />
            </div>
          </div>
          <div className="">
            <img
              src="https://static.turquoise.health/static/images/soc-black.5ddc1ad40bab.png"
              alt=""
              className="w-28 h-28"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-2/3 gap-10">
          {navListMenu.map((x) => (
            <div className="flex flex-col gap-2">
              <p className="font-bold">{x.label}</p>
              <p>
                {x.menulist.map((x) => (
                  <p>{x.title}</p>
                ))}
              </p>
            </div>
          ))}
        </div>
      </footer>
      <hr />
      <div className="grid w-full grid-cols-2 my-10 mx-52 ">
        <p className="text-gray-400 w-[500px]">
          © 2023 Turquoise Health. All Rights Reserved. CPT® copyright 2020
          American Medical Association. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-5">
          <p>Contact us</p>
          <p>Email us</p>
          <p>Press us</p>
          <p>Privacy Policy</p>
          <p>Term of use</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

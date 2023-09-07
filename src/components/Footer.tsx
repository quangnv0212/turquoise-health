import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { navListMenu } from "../constants/common";
const Footer = () => {
  const FooterDesktop = () => (
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
        <p className="w-full text-gray-400">
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
  const FooterMobile = () => (
    <>
      <div className="gap-5 p-8 md:px-10 md:py-16 md:flex">
        <div className="">
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
          <img
            src="https://static.turquoise.health/static/images/soc-black.5ddc1ad40bab.png"
            alt=""
            className="w-28 h-28"
          />
        </div>

        <div className="my-10 md:my-0 md:flex flex-row gap-5 text-[#02363D]">
          {navListMenu.map((x) => (
            <div className="flex flex-col gap-2 my-10 md:my-0">
              <p className="font-bold">{x.label}</p>
              <p>
                {x.menulist.map((x) => (
                  <p className="my-2">{x.title}</p>
                ))}
              </p>
            </div>
          ))}
        </div>
        <hr />
      </div>
      <div className="flex p-10">
        <p className="text-gray-400">
          © 2023 Turquoise Health. All Rights Reserved. CPT® copyright 2020
          American Medical Association. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-5 text-xs text-center">
          <p>Contact us</p>
          <p>Email us</p>
          <p>Press us</p>
          <p>Privacy Policy</p>
          <p>Term of use</p>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </div>
  );
};

export default Footer;

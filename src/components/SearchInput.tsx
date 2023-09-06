import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";
import useHospital from "../hooks/useSearchHospital";
import useQueryParams from "../hooks/useQueryParams";

export function SearchInput() {
  const { onSubmitSearch, register, watch, setValue } = useHospital();
  const searchParams = useQueryParams();
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  const handleClickOutside = () => {
    setFocus(false);
  };
  const handleClickInside = () => {
    setFocus(true);
  };
  React.useEffect(() => {
    setValue("query", searchParams?.query);
  }, []);
  useOnClickOutside(ref, handleClickOutside);
  const watchQuery = watch("query");
  return (
    <div className="w-full border-t-2">
      <form className="min-w-[350px] w-full" onSubmit={onSubmitSearch}>
        <div
          ref={ref}
          onClick={handleClickInside}
          className={`flex flex-row w-full gap-2 p-3 my-6 bg-white border rounded-3xl ${
            focus ? "border-black" : ""
          }`}
        >
          <SearchIcon />
          <input
            type="text"
            className="w-full outline-0"
            placeholder="Enter health system name..."
            {...register("query")}
          />

          {watchQuery && (
            <div
              className="cursor-pointer"
              onClick={() => {
                setValue("query", "");
              }}
            >
              <CloseIcon />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

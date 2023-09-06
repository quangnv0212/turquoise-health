import * as React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import hospitalApi from "../apis/hospital.api";
import { alphabet, perPage } from "../constants/common";
import useQueryParams from "../hooks/useQueryParams";
import UsePagination from "./PaginationHook";
import { SearchInput } from "./SearchInput";
export function TableData() {
  const navigate = useNavigate();
  const searchParams = useQueryParams();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setQueryParam({ ...queryParam, page });
    const searchParam = createSearchParams({
      ...searchParams,
      page: value.toString(),
      query: queryParam.query,
      letter: queryParam.letter,
    }).toString();
    navigate(`?${searchParam}`);
    navigate(0);
  };
  const query = searchParams?.query || "";
  const letter = searchParams?.letter || "";
  let page = Number(searchParams?.page) || 1;
  const [queryParam, setQueryParam] = React.useState({
    page,
    query,
    letter,
    perPage,
  });
  const handleAlphabetClick = (letter: string) => {
    setQueryParam({ ...queryParam, page: 1, letter });
    const searchParam = createSearchParams({
      page: "1",
      letter,
    }).toString();
    navigate(`?${searchParam}`);
    navigate(0);
  };
  const [hospitalList, sethospitalList] = React.useState([]);
  const [totalPage, setTotalPage] = React.useState(0);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await hospitalApi.gethospitalList(queryParam);
        sethospitalList(res.data.hospitals);
        setTotalPage(res.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [queryParam]);

  return (
    <div className="mx-52 mb-36">
      <div className="px-5 mx-3">
        <div className="flex justify-center w-full">
          <SearchInput />
        </div>
        <ul className="flex flex-row gap-2 px-2 text-gray-500 bg-gray-100 border">
          {alphabet.map((x, index) => (
            <button
              className={`p-2 ${
                x === queryParam.letter
                  ? "border-b-4 border-cyan-500 font-bold"
                  : ""
              }`}
              onClick={() => {
                setQueryParam({ ...queryParam, page: 1, letter: x });
                handleAlphabetClick(x);
              }}
            >
              {x ? x : "ALL"}
            </button>
          ))}
        </ul>
        <div className="grid grid-cols-3 p-2 border">
          {hospitalList && hospitalList.length > 0 ? (
            hospitalList.map((hospital, index) => (
              <p key={index} className="p-3 cursor-pointer hover:underline">
                {hospital}
              </p>
            ))
          ) : (
            <p>No matches found for "{query}"</p>
          )}
        </div>

        <div className="flex justify-center my-2">
          {totalPage ? (
            <UsePagination
              count={totalPage}
              onChange={handleChange}
              page={queryParam.page}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

import { isUndefined, omitBy } from "lodash";
import useQueryParams from "./useQueryParams";

export default function useQueryConfig() {
  const queryParams = useQueryParams();
  const queryConfig = omitBy(
    {
      page: queryParams.page || "1",
      query: queryParams.query || "",
      letter: queryParams.letter || "",
    },
    isUndefined
  );
  return queryConfig;
}

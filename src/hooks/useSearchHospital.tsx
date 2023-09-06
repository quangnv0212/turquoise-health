import omit from "lodash/omit";
import { useForm } from "react-hook-form";
import useQueryConfig from "./useQueryConfig";
import { createSearchParams, useNavigate } from "react-router-dom";
export default function useHospital() {
  const queryConfig = useQueryConfig();
  const { register, watch, handleSubmit, setValue } = useForm<{
    query: string;
  }>({
    defaultValues: {
      query: "",
    },
  });
  const navigate = useNavigate();

  const onSubmitSearch = handleSubmit((data) => {
    const config = omit(
      {
        ...queryConfig,
        query: data.query,
      },
      ["page", "letter"]
    );
    navigate({
      search: createSearchParams(config).toString(),
    });
    navigate(0);
  });
  return { onSubmitSearch, register, watch, setValue };
}

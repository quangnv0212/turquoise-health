import * as React from "react";
import usePagination, { UsePaginationProps } from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination(props: UsePaginationProps) {
  const { items } = usePagination({
    count: props.count,
    onChange: props.onChange,
    page: props.page,
  });

  return (
    <div className="flex justify-center">
      <nav className="p-0 m-5 border rounded-3xl">
        <List className="flex">
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = (
                <>
                  <span className="flex items-center px-3 py-2">...</span>
                </>
              );
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  className="h-10 px-3 py-2 border border-y-0 hover:underline"
                  style={{
                    fontSize: 14,
                    color: selected ? "white" : undefined,
                    backgroundColor: selected ? "#36C5BA" : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type === "previous" && (
                    <span className="flex items-center px-3 py-2 ">‹‹</span>
                  )}
                  {type === "next" && (
                    <span className="flex items-center px-3 py-2 ">››</span>
                  )}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </div>
  );
}

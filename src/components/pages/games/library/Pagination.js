import { useMemo, useState } from "react";

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage
}) => {
  const paginationRange = useMemo(()=> {
    const totalPageCount = Math.ceil(totalCount / pageSize);
  }, [totalCount, pageSize, currentPage])

  return paginationRange
}

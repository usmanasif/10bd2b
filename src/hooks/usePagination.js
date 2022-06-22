export const DOTS = "...";

function usePagination({
  currentPage,
  totalPages,
}) {
  // This hook will return the format of page numbers to be displayed in the pagination view    

  let paginationFormat = [1, DOTS, currentPage - 1, currentPage, currentPage +1, DOTS, totalPages];
  if (totalPages <= 3) {
    paginationFormat = [ ...Array(totalPages).keys() ].map(i => i+1);
  } else if ([1, 2].includes(currentPage)) {
    paginationFormat = [1, 2, 3, DOTS, totalPages];
  } else if ([totalPages, totalPages - 1].includes(currentPage)) {
    paginationFormat = [1, DOTS, totalPages - 2, totalPages - 1, totalPages];
  }

  return paginationFormat;
}

export default usePagination;

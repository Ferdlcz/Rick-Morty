import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Siguiente"
      previousLabel="Anterior"
      previousClassName="btn btn-dark"
      nextClassName="btn btn-dark"
      nextLinkClassName="text-white"
      previousLinkClassName="text-white"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

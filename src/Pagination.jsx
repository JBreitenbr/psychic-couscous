import usePaginationRange, { DOTS } from "./usePaginationRange";
const Pagination = ({
  tracksPerPage,
  totalTracks,
  setCurrentPage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTracks / tracksPerPage); i++) {
    pageNumbers.push(i);
  }
  let pR=usePaginationRange({totalPageCount:pageNumbers.length,buttonConst:3,siblingCount:1,currentPage:currentPage});
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination grid grid-cols-10">
        {pR.map((item) => (
    <li
            key={item}
            className={`page-item ${currentPage === item ? "active" : ""}`} style={{marginBottom:"5px"}}>
            <button>
            <a
              onClick={(e) => paginate(item, e)}
              href="!#"
              className="page-link"
            >
              {item}
            </a></button>
          </li>)
        )}
      </ul>
    </nav>
  );
};   
export default Pagination;
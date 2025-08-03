const Pagination = ({
  tracksPerPage,
  totalTracks,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTracks / tracksPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="mt-8 bg-slate-300 h-12 stuck">
      <ul className="pagination grid grid-cols-10">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`} >
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};
export default Pagination;
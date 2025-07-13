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
    <nav>
      <ul className="pagination grid grid-cols-10">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`} >
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className="page-link"
              style={totalTracks>200?{backgroundColor:"papayawhip",width:"10px",height:"10px","margin":"2px"}:{backgroundColor:"white",width:"18px",height:"18px","margin":"5px"}}
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
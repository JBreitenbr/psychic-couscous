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
  let pR=usePaginationRange({totalPageCount:pageNumbers.length,buttonConst:1,siblingCount:1,currentPage:currentPage});
  /*let arr=[];
  for(let i=0;i<pR.length-1;i++){
    if((pR[i]==DOTS && pR[i+1]!=DOTS)||pR[i]!=DOTS){
      arr.push(pR[i]);
    }
  }
  arr.push(pR[pR.length-1]);*/
  let arr=pR.filter((item)=>item!=DOTS);
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination grid grid-cols-10">
        {arr.map((item) => (
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
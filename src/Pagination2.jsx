import usePaginationRange, { DOTS } from "./usePaginationRange";
const Pagination2 = ({
  tracksPerPage,
  totalTracks,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTracks / tracksPerPage); i++) {
    pageNumbers.push(i);
  }
  //let rnd=[1,0,3,3,3,3,1,1,0,3,3,3,1,1,0];
let conv=(num,ind,nArr)=>nArr[ind]==DOTS && nArr[ind+1]==DOTS ? 9:num;
//let newArr=rnd.map(conv).filter(num=>num!=9);
  let pR=usePaginationRange({totalPageCount:pageNumbers.length,buttonConst:3,siblingCount:1,currentPage:currentPage});
  let arr=pR.filter(item=>item!=DOTS);
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
/*let arr;
  if(pageNumbers.length<7){
    arr=pageNumbers;
  } else { arr=pR;}*/
  return (
    <nav className="mt-8 h-12 stuck">
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
export default Pagination2;
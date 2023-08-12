import {Dispatch, FC, SetStateAction} from "react";
import ReactPaginate from "react-paginate";
import styles from './Paginate.module.scss'

interface IPaginateProps {
  setCounterPagination:Dispatch<SetStateAction<number>>
  pageCount:number
}


const Paginate: FC<IPaginateProps> = ({setCounterPagination,pageCount}) => {
  return (
     <div className={'container'}>
       < ReactPaginate
          className={styles.root}
          breakLabel = "..."
          nextLabel = "далее >"
          onPageChange = {(e)=>setCounterPagination(++e.selected)}
          pageRangeDisplayed = { 5 }
          pageCount = {pageCount}
          previousLabel = "< предыдущая"
          renderOnZeroPageCount = {null}
         />
     </div>
  )
}

export default Paginate
import { useState } from 'react';
import './pagination.css'

const Pagination = ({page,noOfPage,setPage}) => {
  
  const [currPage, setCurrPage] = useState([true, false, false]);

  let arr = []
  for(let i=1; i<=noOfPage; i++){
    arr.push(i)
  }
  
  const handlePage =(e,elm)=>{
    window.scroll(0,0)
    setCurrPage(()=>currPage.map((el,ind)=> ind+1 === elm ? true:false))
    setPage(elm)
    }
  

    return (
   
    <div className='pagination'>  
{noOfPage>1? arr.map((elm,ind)=>{
  return (<span className={`page ${currPage[ind] && 'selectedPage'}`} key={ind} onClick={(e)=>handlePage(e,elm)} >{elm}</span>
  )
}): null}     
    </div>
  )
}

export default Pagination
import {createContext, useState,useEffect} from 'react'
import Data from '../data.json'

  
export const DataContext =createContext()

const DataContextProvider = ({children}) => {

const [ data, setData] = useState([])

useEffect(()=>{
  const res = Data 
 setData(()=>res)
}
  
  ,[])



  return (
    <DataContext.Provider value ={{ Data,data, setData }}> {children} </DataContext.Provider>
  )
}

export default DataContextProvider
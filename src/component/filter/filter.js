import { useState, useRef, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import Data from '../../data.json'
import { DataContext } from '../../ContextApi/DataContext'
import './filter.css'


const Filter = () => {
  const screenwidth = window.innerWidth;
  const [price, setPrice] = useState(50)
  const [gender, setGender] = useState('')
  const categoryRef = useRef()
  const {data, setData} = useContext(DataContext)
  

  const filteritem = () => {
     const arr=['electronic','book','grocery']
     const filterData = data.filter((e)=> (Number(e.price) >= price && e.category === categoryRef.current.value.toLowerCase() && (arr.includes(categoryRef.current.value.toLowerCase())|| !gender? true:e.gender === gender)))
     setData(()=>filterData)
     }
   

  const resetFilter =()=>{
      setData(()=> Data)
      categoryRef.current.value = 'Electronic'
      setPrice(50)
     }
    return (
    <div className='filter'>
        <h1>Filter</h1>
        <hr />
       <div className='filterItem'> <Form.Label>Price  -<div style={{ display: 'inline-block' }}>${price}</div></Form.Label>

        <Form.Range min='0' max='100' value={price} step={5} onChange={(e) => setPrice(e.target.value)} />

        <Form.Label>Category</Form.Label>
        <Form.Select className='category' ref={categoryRef}>
          <option value="Electronic">Electronic</option>
          <option value="Cloth">Cloth</option>
          <option value="Footwear">Footwear</option>
          <option value="Book">Book</option>
          <option value="Grocery">Grocery</option>
        </Form.Select>
       <Form.Label>Gender</Form.Label>
        <div className='radioButton'>
          <Form.Check 
            type='radio'
            id='male'
            name='gender'
            value='male'
            label='Male'
            onClick={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type='radio'
            id='female'
            name='gender'
            value='female'
            label='Female'
            onClick={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='btncontainer'><Button className='buttn' onClick={() => filteritem()}>Filter</Button>
        <Button className='buttn' onClick={() => resetFilter()}>Reset</Button>
        </div>
        </div>
      </div>
    )
  }

  export default Filter
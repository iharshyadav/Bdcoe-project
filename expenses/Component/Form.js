import React, { useRef } from 'react'

const form = ({Income,setIncome}) => {
  const desc = useRef(null) 
  const price = useRef(null) 
  const date = useRef(null) 
  const AddIncome = (e)=>{
    e.preventDefault()
    console.log(desc.current.value)
    console.log(price.current.value)
    console.log(date.current.value)

    desc.current.value="";
    price.current.value="";
    date.current.value="";
  }

  return (
    <form className='income-form' onSubmit={AddIncome}>
        <div className="inner-elem">
          <input className='submit1' type="text" name="desc" id="desc"
            placeholder='Description.... ' ref={desc}/>
          <input className='submit1' type="number" name='price' id='price' placeholder='Amount' ref={price} />
          <input className='submit1' type="date" name='date' id='date' placeholder='Amount date... ' ref={date}/>
          <input className='submit' type="submit" value="Add Income" />
        </div> 
    </form>
  )
}

export default form
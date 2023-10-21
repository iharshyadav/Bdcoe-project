import React, { useRef } from 'react'

const form = ({income,setIncome}) => {
  const desc = useRef(null) 
  const price = useRef(null) 
  const date = useRef(null) 
  // const AddIncome = (e)=>{
  //   e.preventDefault()
  //   console.log(desc.current.value)
  //   console.log(price.current.value)
  //   console.log(date.current.value)

    

    const AddIncome= e =>{
      e.preventDefault();

      setIncome([...income,{
        "desc": desc.current.value,
        "date": date.current.value,
        "price":price.current.value
      }]);

      desc.current.value="";
      price.current.value=null;
      date.current.value=null;
      
    }
      

  

  return (
    <form className='income-form' onSubmit={AddIncome}>
        <div className="inner-elem">
          <h3>Description:</h3>
          <input className='submit1' type="text" name="desc" id="desc"
            placeholder=' Description.... ' ref={desc}/>
            <h3>Amount:</h3>
          <input className='submit2' type="number" name='price' id='price' placeholder=' Amount...' ref={price} />
          <h3>Date:</h3>
          <input className='submit3' type="date" name='date' id='date' placeholder=' Amount date... ' ref={date}/>
          <input className='submit' type="submit" value="Add Income" />
        </div> 
    </form>
  )
}

export default form
"use client"
import React, { useEffect, useState } from "react";
import Header from "@/Component/Header";
import Form from "@/Component/Form";
const page=()=>{
    const [income, setIncome] = useState([])
    const [totalIncome, settotalIncome] = useState(0);


    const deleteNote=(i)=>{
      let copyTask=[...income];
      copyTask.splice(i,1)
      setIncome(copyTask);
 }

    let renderTask=<h5>No Task Available</h5>

    if(income.length > 0){
      renderTask=income.map((t,i)=>{
        return(
          <>
            <li className="income-list">
               <div key={i} className="income-list-1">
                 <h5 className="description">{t.desc}</h5>
                 <p className="text-xl ">{t.price}</p>
                 <p className="text-xl ">{t.date}</p>
               </div> 
               <button
                 onClick={()=>{
                  deleteNote(i);
                 }}
                  className="income-list-2">Delete</button>
            </li> 
          </>  
        )
      })
    }
  
    
    useEffect(() => {
      let temp = 0;
      for(let i = 0; i < income.length; i++) {
        temp += parseInt(income[i].price);
      }
  
      settotalIncome(temp);
    }, [income]);

  return(
    <>
    <Header totalIncome={totalIncome}/>
    <Form income={income} setIncome={setIncome}/>
    {/* <div className="w-2/3 h-15 text-black">{(income.length > 0) ? income[0].desc : " "}</div> */}
    <hr/>
    <div>
       <ul>{renderTask}</ul>
    </div>
    </>
  );
}

export default page


"use client"
import React, { useEffect, useState } from "react";
import Header from "@/Component/Header";
import Form from "@/Component/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const page=()=>{

  const getItemLocal=()=>{
    let expenses = localStorage.getItem("expenses");

    if(expenses){
      return JSON.parse(localStorage.getItem("expenses"));
    }
    else{
      return [];
    }
  }

    const [income, setIncome] = useState(getItemLocal())
    const [totalIncome, settotalIncome] = useState(0);


    const deleteNote=(i)=>{
      let copyTask=[...income];
      copyTask.splice(i,1)
      setIncome(copyTask);
 }

    let renderTask=<h5>No Expenditure Available</h5>

    if(income.length > 0){
      renderTask=income.map((t,i)=>{
        return(
          <>
            <li className="income-list">
               <div key={i} className="income-list-1">
                 <h5 className="list-description">{t.desc}</h5>
                 <p className="list-price">+{t.price}</p>
                 <p className="list-date">{t.date}</p>
               </div> 
               <div className="income-list-2">
                 <button
                 onClick={()=>{
                  deleteNote(i);
                 }}
                    className="income-list-2-button">Delete</button>
                </div>
            </li> 
            <li className="phone-income-list">
               <div className="inner-phone-income-list">
                   <div key={i} className="phone-income-list-1">
                     <h5 className="phone-list-description">{t.desc}</h5>
                     <p className="phone-list-date">{t.date}</p>
                   </div> 
                   <p className="phone-list-price">+{t.price}</p>
                   <div className="phone-income-list-2">
                     <button
                     onClick={()=>{
                      deleteNote(i);
                     }}
                        className="phone-income-list-2-button fa-lg"> <FontAwesomeIcon icon={faTrash}/> </button>
                    </div>       
                </div>
            </li> 
          </>  
        )
      })
    }

    useEffect(()=>{
      localStorage.setItem("expenses",JSON.stringify(income))
   },[income])
  
    
    useEffect(() => {
      let temp = 0;
      for(let i = 0; i < income.length; i++) {
        if(income[i].price==0)
        {
          // temp = parseInt(income[i-1].price);
        }
        else{
          temp += parseInt(income[i].price);
        }
      }
  
      settotalIncome(temp);
    }, [income]);

  return(
    <>
    <Header totalIncome={totalIncome}/>
    <h2><span>Simple way</span> <br /> to manage <span>personal expenses</span></h2>
    <div className="phone"><span>Simple way</span> <br /> to manage <span> <br />personal expenses</span></div>
    <Form income={income} setIncome={setIncome}/>
    {/* <div className="w-2/3 h-15 text-black">{(income.length > 0) ? income[0].desc : " "}</div> */}
    <hr/>
    <div className="main-income-list">
       <ul>{renderTask}</ul>
    </div>
    </>
  );
}

export default page


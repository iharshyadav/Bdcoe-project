"use client"
import React, { useEffect, useState } from "react";
import Header from "@/Component/Header";
import Form from "@/Component/Form";
const page=()=>{
    const [Income, setIncome] = useState("")
    const [totalIncome, settotalIncome] = useState(0);
    
    useEffect(()=>{
      let temp=0;
      for(let i=0;i<Income.length;i++)
      {
        temp+=parseInt(Income[i].price)
      }
      settotalIncome(temp);
    },[Income]);

  return(
    <>
    <Header totalIncome={totalIncome}/>
    <Form Income={Income} setIncome={setIncome}/>
    </>
  )
}

export default page


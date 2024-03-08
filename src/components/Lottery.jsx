import React from 'react';
import { useState } from 'react';
import "./Lottery.css";
import { generateRandom,sum } from './helper';

export default function Lottery() {
    let [ticket ,setTicket] = useState(generateRandom(3));
    let [balance,setBalance] = useState(10);

   

    let winning = sum(ticket) == 15;
 
    let addMoney = ()=>{

        if(balance==0){
            setBalance(balance+=50);
        }
    }

    let newTicket = ()=>{
       if(balance>0){
        setTicket(generateRandom(3));
        setBalance(winning?balance+=100:balance-=5);
       }
        
    }
  
  return (
    <div>

<div className="box">
              <h4 className="account">&#8377; {balance}</h4>
               </div>
     
      <h1>Lottery Game</h1>
      <div className="Allticket">
        <span className="ticket">{ticket[0]}</span>
        <span className="ticket">{ticket[1]}</span>
        <span className="ticket">{ticket[2]}</span>
   
      </div>
      <button className='' onClick={newTicket}>Buy New Ticket</button>
      <h3 className="">{balance==0? "No money for ticket":"" }</h3>
      <h3 className="">{winning ? "Congratulations ,you won" : ""}</h3>
      <button onClick={addMoney}>{balance==0 &&"Add Money"}</button>

    </div>
  )
}

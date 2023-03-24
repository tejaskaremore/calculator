


import React, { useState } from 'react';
import './Cal.css';
import ButtonComp from './utils/Button';
const Cal = () => {

   const [value1, setvalue1] = useState(0);

   const [currentExp, setCurrentExp] = useState(0);

   const [currentop, setCurrentop] = useState(null);

   const [displayInput, setdisplayInput]= useState(true);

   const ButtonArry = [
      [
         {
            value: 1,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  let newvalue;
                  if (prevstate != 0) {
                     newvalue = `${prevstate}` + 1;
                  } else {
                     newvalue = 1;
                  }
                  return newvalue
               })
            },
            id: 1
         },

         {
            value: 2,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  // const variableName = condition? true op1: false opt2;
                  const newvalue = prevstate != 0 ? `${prevstate}` + 2 : 2;
                  return newvalue;
               })
            },
            id: 2
         },

         {
            value: 3,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 3 : 3;
                  return newvalue;
               })
            },
            id: 3
         },

      ],

      [
         {
            value: 4,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 4 : 4;
                  return newvalue;
               })
            },
            id: 4
         },

         {
            value: 5,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 5 : 5;
                  return newvalue;
               })
            },
            id: 5
         },

         {
            value: 6,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 6 : 6;
                  return newvalue;
               })
            },
            id: 6
         },

      ],

      [
         {
            value: 7,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 7 : 7;
                  return newvalue;
               })
            },
            id: 7
         },

         {
            value: 8,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 8 : 8;
                  return newvalue;
               })
            },
            id: 8
         },

         {
            value: 9,
            calFun: () => {
               setCurrentExp((prevstate) => {
                  const newvalue = prevstate != 0 ? `${prevstate}` + 9 : 9;
                  return newvalue;
               })
            },
            id: 9
         },

      ]
   ];

   const oprationarry = [

      {
         value: '+',
         calFun: () => {

            const currentValue = parseInt(currentExp) + value1;
            setCurrentExp(0);
            setvalue1(currentValue);
            console.log('value1', value1, currentValue)
            setCurrentop('+')

         },
         id: 'plus',
      },

      {
         value: '-',
         calFun: () => {

            const currentValue = parseInt(currentExp) - parseInt(value1);
            setCurrentExp(0);
            setvalue1(parseInt(currentValue));
            console.log('value1', value1, currentValue)
            setCurrentop('-')

         },
         id: 'minus',
      },
      {
         value: '=',
         id: 'equal',
         calFun: () => {
            console.log(currentop === "+");
            if (currentop === "+") {
               setCurrentExp(parseInt(currentExp) + parseInt(value1));
            } else if (currentop === "-") {
               return currentExp > value1 ? setCurrentExp(parseInt(currentExp) - parseInt(value1)) : setCurrentExp(parseInt(value1) - parseInt(currentExp));
            }

            setvalue1(0);
         }


      }

   ];

   const Buttons1 = ButtonArry[0].map((bt) => {

      return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />

   });

   const Buttons2 = ButtonArry[1].map((bt) => {

      return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />

   });

   const Buttons3 = ButtonArry[2].map((bt) => {

      return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />

   });

   const oprationButtons = oprationarry.map((bt) => {

      return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />

   });

   const changeCheckBox =(event)=>{
      console.log("changeEvent",event.target.checked);
      setdisplayInput(event.target.checked);
   }

   return (

      <div className="Cal-Com">
         <div className='Cal-Button-wrapper'>

            <div>

               <input type='checkbox' onChange={changeCheckBox} value={displayInput}/>
              {  displayInput ? <input type='number' value={currentExp} onChange={(event)=>setCurrentExp(event.target.value)}/>:<span>Check Input</span>}

            </div>

            <div className='cal-button-row'> {Buttons1}</div>
            <div className='cal-button-row'> {Buttons2}</div>
            <div className='cal-button-row'> {Buttons3}</div>
            <div className='cal-button-row'> {oprationButtons}</div>



         </div>
      </div>

   )
};

export default Cal;
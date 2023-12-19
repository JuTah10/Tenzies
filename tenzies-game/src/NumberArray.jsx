import React from "react";
import Number from "./Number";
import {nanoid} from "nanoid"
export default function NumberArray(){
    const [numArray,setNumArray] = React.useState(allNewDice())
    const [endGame,setEndGame] = React.useState(false)
    
    React.useEffect(()=>{
   
        const currentState = numArray.every(state => state.isHeld); // check all the element for the condition provided
        const firstValue = numArray[0].value
        const allSameValue = numArray.every(die => die.value === firstValue)
        if (currentState && allSameValue) {
            setEndGame(true)
        }
     
        
    },[numArray])

    function allNewDice(){
        let arr = [{}];
        for(let i =0;i<10;i++){
            arr[i] = {...arr[i],value: Math.ceil(Math.random()*6), isHeld:false, id: nanoid()};
        }
        return arr;
    }
    function rollDice(){
        if(endGame===true){
            setEndGame(false);
            setNumArray(allNewDice());    
        }
        else{
            setNumArray(prevArray=>{
                let arr = [...prevArray]
                for(let i =0;i<10;i++){
                    if(arr[i].isHeld===false){
                        arr[i] = {...arr[i], value: Math.ceil(Math.random()*6)}
                    }
                }
                return arr;
            })
        }
        
    }
    //too late to update (fixed baby)
    function changeState(id){
        setNumArray(prevArray=>{
            let arr = [...prevArray]
            for(let i =0;i<10;i++){
                if(arr[i].id===id){
                    arr[i] = {...arr[i], isHeld: !arr[i].isHeld}
                }
            }
            return arr;
        })
    }
    
    const numArrayElemet = numArray.map((num)=>{
        return <Number  num={num.value}
                        id={num.id}
                        isHeld={num.isHeld}
                        changeState = {changeState}
                       ></Number>
    })
    return(
        <div className="bottom-part">
            <div className="num-array">{numArrayElemet}</div>   
            <div style={{   display: endGame===true? "block" : "none",
                            marginTop:"20px",
                            color:"red"
                           }}>You Won!!!</div>
            <button className="button" onClick={rollDice}>{endGame?"New Game ":"Roll"}</button>
            {}
        </div>
   
        
    );
   
}
// import React from 'react'
import './Content.css';
import post from './Image/post.jpeg';
import React,{useState} from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { IoHeartDislike } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { BsHandIndexThumb } from "react-icons/bs";

const Function = () => {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("white")
    const [col,setCol] = useState("black")
    const [word,setWord] = useState("Welcome To My Instagram")
    const data = 1;
    function increment(data) {
        setCount(count + data)
        setColor("orangered")
    }
    // const [num,setNum] = useState(0);
      function decrement() {
        if(count<=0){
          setCount(0)
        }
        else{
          setCount(count - 1)
          setColor("white")
        }
      }
      function share(){
        setCol(col === "black" ? "lightcoral" : "black")
      }
      function tq(){
        setWord("Thank You For Posting")
      }
  return (
    <div>
        <div id='Container' style={{backgroundColor:col, height:'680px', width:'650px',marginLeft:'350px', borderRadius:'12px',border:'1px solid black'}}><br />
          <h1 style={{fontFamily:'serif',fontStyle:'italic',color:'white',justifyContent:'center',textAlign:'center'}}><FaSquareInstagram />{word}</h1>
            <div className='box1'>
                <img src={post} style={{height:'400px', width:'600px',marginLeft:'26px',borderRadius:'12px'}}></img>
            </div>
            <div className='box2' style={{color:'white',fontFamily:'serif',textAlign:'center',fontSize:'20px'}}>I think dogs are the most amazing creatures; they give unconditional <br />love. A dog is the only thing on earth that loves you more than <br />he loves himself.</div>
            <br />
            <br />
            <div style={{display:'flex'}}>
              <div className='box3'>
                <button onClick = {() => increment(data)} style={{height:'35px',width:'85px',marginLeft:'18px',backgroundColor:color, borderRadius:'12px'}}><FiHeart />({count})</button>
              </div>  
              <div className='box4' style={{color:'white'}}>
                <button onClick = {() => decrement(count)} style={{height:'34px',width:'84px',marginLeft:'5px', borderRadius:'12px'}}><IoHeartDislike /></button>
              </div> 
              <div className='box5' style={{color:'white'}}>
                <button onClick = {() => share()} style={{height:'34px',width:'84px',marginLeft:'5px', borderRadius:'12px'}}><BsFillSendFill /></button>
              </div> 
              <div className='box5' style={{color:'white'}}>
                <button onClick = {() => tq()} style={{height:'34px',width:'150px',marginLeft:'200px', borderRadius:'12px'}}><BsHandIndexThumb />Thank You</button>
              </div> 
            </div>
            <br />           
        </div>
    </div>
  )
}
export default Function
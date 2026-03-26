import {useState} from "react"

export default function usePokemon(data){

 let [i,setI]=useState(0);

 function next(){
  if(i<data.length-1) setI(i+1)
 }

 function prev(){
  if(i>0) setI(i-1)
 }
 function change(val){
  let idx = data.findIndex(x=>x.name===val)
  if(idx!==-1) setI(idx)
 }

 return {
  index:i,
  current:data[i],
  next,
  prev,
  change,
  isFirst:i===0,
  isLast:i===data.length-1
 }

}
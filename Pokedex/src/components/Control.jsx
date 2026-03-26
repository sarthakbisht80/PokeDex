export default function Controls({next,prev,disableNext,disablePrev}){

 return (
  <div style={{marginTop:"20px"}}>
    <button onClick={prev} disabled={disablePrev}>Previous</button>
    <button onClick={next} disabled={disableNext} style={{marginLeft:"10px"}}>Next</button>
  </div>
 )

}
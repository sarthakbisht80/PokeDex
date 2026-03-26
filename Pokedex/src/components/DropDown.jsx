export default function Dropdown({list,onChange,value}){

 return (
  <select value={value} onChange={(e)=>onChange(e.target.value)}>
   {
    list.map((p,i)=>(
     <option key={i} value={p.name}>{p.name}</option>
    ))
   }
  </select>
 )

}
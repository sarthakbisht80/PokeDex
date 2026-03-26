export default function PokemonCard({poke}){

 return (
  <div style={{border:"1px solid #ccc",padding:"20px",width:"250px",margin:"auto"}}>
    <img src={poke.image} style={{width:"180px"
        ,height:"120px"
     } }  />
    <h2>{poke.name}</h2>
    <p style={{fontSize:"12px"}}>{poke.description}</p>
  </div>
 )

}
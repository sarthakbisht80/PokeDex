import {pokemons} from "./data/data";
import usePokemon from "./hooks/usePokemon";

import PokemonCard from "./components/PokemonCard";
export default function App(){

 let {current,next,prev,change,index,isFirst,isLast} = usePokemon(pokemons);

 return (
  <div style={{textAlign:"center",marginTop:"40px"}}>

   
<PokemonCard/>
 

  </div>
 )

}
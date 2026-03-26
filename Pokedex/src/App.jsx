import {pokemons} from "./data/data"
import usePokemon from "./hooks/usePokemon"
import PokemonCard from "./components/PokemonCard"
import Dropdown from "./components/DropDown"
import Controls from "./components/Control"

export default function App(){

 let {current,next,prev,change,index,isFirst,isLast} = usePokemon(pokemons)

 return (

  <div style={{textAlign:"center",marginTop:"40px"}}>

    <h2 style={{
      color:"gray",
      textAlign:"center",
      fontFamily:"-apple-system"
    }}>PokeDex Dashboard</h2>
    <Dropdown list={pokemons} value={current.name} onChange={change} />

    <PokemonCard poke={current} />

    <Controls 
      next={next} 
      prev={prev} 
      disableNext={isLast} 
      disablePrev={isFirst} 
    />

  </div>
 )

}
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import PokemonType from '../pokemonType';

const PokemonInfo = () => {
  const { state: {selectedItem} }= useContext(PokemonContext)
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        {
          Object.keys(selectedItem.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>  
          ))
        }
      </table>
    </div>
  ): null;
}
  
  PokemonInfo.prototype = PokemonType;
  
  export default PokemonInfo;
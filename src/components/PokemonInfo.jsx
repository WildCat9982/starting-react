import PokemonType from '../pokemonType';
import { useSelector } from 'react-redux';

const PokemonInfo = () => {
  const selectedItem = useSelector(state => state.selectedItem);
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
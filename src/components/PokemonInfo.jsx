import PokemonType from '../pokemonType';

const PokemonInfo = ({name, base}) => (
    <div>
      <h1>{name.english}</h1>
      <table>
        {
          Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>  
          ))
        }
      </table>
    </div>
  )
  
  PokemonInfo.prototype = PokemonType;
  
  export default PokemonInfo;
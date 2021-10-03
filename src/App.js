import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import styled  from '@emotion/styled';
import Button from '@mui/material/Button';


const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingTop: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;




const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(',')}</td>
    <td>
      <Button variant="contained" color="primary" onClick={()=> onSelect(pokemon)}>Select</Button>
    </td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect:PropTypes.func
}


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

PokemonInfo.prototype = {
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,

  })
}

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem: null

    }
  }

  componentDidMount() {
    fetch('./starting-react/pokemon.json')
      .then(resp => resp.json())
      .then(pokemon => this.setState({...this.state, pokemon}))
  }



  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <Input 
              value={this.state.filter}
              onChange={(e) => this.setState({...this.state, filter: e.target.value}) }
            />
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                .filter((pokemon) =>pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))
                .slice(0, 20)
                .map(pokemon => (
                    <PokemonRow 
                      pokemon={pokemon} 
                      key={pokemon.id} 
                      onSelect={(item) => this.setState({...this.state, selectedItem: item})} 
                      />
                ))}
                
                </tbody>
            </table>
          </div>
            { this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} /> }
          </TwoColumnLayout>
      </Container>
    );
  }
}

function App() {
  const [filter, setFilter] = useState("")
  const [pokemon, setPokemon] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    fetch('./starting-react/pokemon.json')
      .then(resp => resp.json())
      .then(data => setPokemon(data))
  }, [])

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <Input 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
              .filter((pokemon) =>pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0, 20)
              .map(pokemon => (
                  <PokemonRow 
                    pokemon={pokemon} 
                    key={pokemon.id} 
                    onSelect={(pokemon) => setSelectedItem(pokemon)} 
                    />
              ))}
              
              </tbody>
          </table>
        </div>
          { selectedItem && <PokemonInfo {...selectedItem} /> }
        </TwoColumnLayout>
    </Container>
  );
}

export default App2;

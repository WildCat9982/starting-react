import React, { useEffect, useState } from 'react';
import './App.css';

import styled  from '@emotion/styled';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonContext from './PokemonContext'

import { CssBaseline } from '@mui/material';


const pokemonReducer = (state, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {
        ...state, 
        filter: action.payload
      };
    case 'SET_POKEMON':
      return {
        ...state, 
        pokemon: action.payload
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state, 
        selectedItem: action.payload
      };

    default:
      throw new Error('No Action')
  }
}

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  paddingTop: 1rem;
`;



function App(props) {
  const [filter, setFilter] = useState("")
  const [pokemon, setPokemon] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: "",
    selectedItem: null
  });

  useEffect(() => {
    fetch('./starting-react/pokemon.json')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'SET_POKEMON',
        payload: data
      }))
    
  }, [])

  if (!pokemon) {
    return <div>Loading data</div>
  }

  return (
    <PokemonContext.Provider
      value= {{
        state,
        dispatch,
      }}>
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
            <PokemonInfo />
          </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;

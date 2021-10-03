import React, { useEffect, useState } from 'react';
import './App.css';

import styled  from '@emotion/styled';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'

import { CssBaseline } from '@mui/material';

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
    <PageContainer>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter 
            filter={filter} 
            setFilter={setFilter} 
          />
          <PokemonTable pokemon={pokemon} filter={filter} setSelectedItem={setSelectedItem} />
        </div>
          { selectedItem && <PokemonInfo {...selectedItem} /> }
        </TwoColumnLayout>
    </PageContainer>
  );
}

export default App;

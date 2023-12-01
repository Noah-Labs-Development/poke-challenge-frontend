/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetPokemonNamesQuery } from "./store/pokemon";

import React from "react";

function PokemonCard(props: any) {
  // TODO:
  // use the useGetPokemonByNameQuery hook to fetch the pokemon data
  // this should display the pokemon's name, image, and allow for favouriting

  return <div></div>;
}

function PokemonGrid() {
  const { data, error, isFetching } = useGetPokemonNamesQuery(25);
  const [favouritesOnly, setFavouritesOnly] = React.useState(false);

  return (
    <div>
      <input type="checkbox" />
      Favourites only
      <div>
        {isFetching && <div>Loading...</div>}
        {error && <div>{error.toString()}</div>}
        {data?.map((name) => {
          return <PokemonCard /* TODO */ />;
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PokemonGrid />
    </div>
  );
}

export default App;

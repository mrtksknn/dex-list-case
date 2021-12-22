import React from "react";
import { Route, Switch } from 'react-router-dom';
import Characters from "./Characters/Characters";
import CharactersList from "./CharactersList/CharactersList";

function App() {
  return (
    <Switch>
      <Route 
        exact 
        path="/" 
        render={(props) => 
          <CharactersList {...props} />
        }
      />
      <Route 
        exact 
        path="/:characterId" 
        render={(props) => 
          <Characters {...props} />
        }
      />
    </Switch>
  );
}

export default App;

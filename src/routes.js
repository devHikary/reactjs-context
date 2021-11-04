import { UsuarioProvider } from 'contexts/Usuario';
import { Carrinho } from 'pages/Carrinho';
import { Feira } from 'pages/Feira';
import { Login } from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route path="/feira" >
            <Feira />
          </Route>
        </UsuarioProvider>
        <Route path="/carrinho" >
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
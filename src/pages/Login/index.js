import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { useContext, useState } from 'react';
import { UsuarioContext } from 'contexts/Usuario';
import { useHistory } from 'react-router';

export function Login() {
  const {
    nome,
    setNome,
    saldo,
    setSaldo
  } = useContext(UsuarioContext)
  
  const history= useHistory();

  return (
    <Container >
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={
            event => setNome(event.target.value)
          }
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
        value={saldo}
          onChange={
            event => setSaldo(Number(event.target.value))
          }
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick ={
          () => history.push('/feira')
        }
      >
        Avançar
      </Button>
    </Container>
  )
};

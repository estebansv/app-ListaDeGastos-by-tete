import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import {
  Header,
  Title,
  ContainerHeader,
  ContainerButtons,
} from "./elements/Header";
import Button from "./elements/Button";
import BtnLogout from "./elements/BtnLogout";
import ExpenseForm from "./components/ExpenseForm";
import BarSpent from "./components/BarSpent";

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gastos</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title> Agregar Gastos</Title>
          <ContainerButtons>
            <Button to="/categorias">Categorias</Button>
            <Button to="/lista">Lista de Gastos</Button>
            <BtnLogout />
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <ExpenseForm />
      <BarSpent />
    </>
  );
}

export default App;

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState(""); // name é uma variável de estado, setName é uma função que altera o estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao cadastrar usuário");
      }
    });
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiMail}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState(""); // name é uma variável de estado, setName é uma função que altera o estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();
    if (!name || !email || !password) { // ! negação, significa que tem campo vazio
      return toast.error("Preencha todos os campos"); // parou a função e não executa o restante
    }

    api
      .post("/users", { name, email, password })
      .then(() => { // then  a gente verifica se deu certo
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => { // catch a gente verifica se deu errado
        if (error.response) {
          toast.error(error.response.data.message); // mensagem de erro vinda com do back end por meio do json 
        } else {
          toast.error("Nao foi possível cadastrar"); // mensagem genérica de erro caso não cai no alert de cima
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

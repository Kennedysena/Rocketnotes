import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />

        <Link to="register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Avatar, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Kennedysena.png" alt="Foto de perfil" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}

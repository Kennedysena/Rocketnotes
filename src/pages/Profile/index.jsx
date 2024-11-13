import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Avatar, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: oldPassword,
    };

    await updateProfile({ user });
  }

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
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(event) => setOldPassword(event.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(event) => setPasswordNew(event.target.value)}
        />
        <Button
          title="Salvar"
          onClick={(event) => {
            event.preventDefault();
            handleUpdate();
          }}
        />
      </Form>
    </Container>
  );
}

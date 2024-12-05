import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  function validateField(field, value) {
    yup
      .reach(schema, field)
      .validate(value)
      .then(() => {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [field]: err.message }));
      });
  }

  function handleSignIn(event) {
    event.preventDefault();
    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        signIn({ email, password });
        setErrors({});
      })
      .catch((error) => {
        const validationErrors = {};
        error.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {errors.email && <span>{errors.email}</span>}
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(event) => {
            setPassword(event.target.value);
            validateField("password", event.target.value);
          }}
        />
        {errors.password && <span>{errors.password}</span>}
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}

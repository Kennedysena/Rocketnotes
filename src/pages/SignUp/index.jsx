import { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState(""); // name é uma variável de estado, setName é uma função que altera o estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
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

  function handleSignUp(event) {
    event.preventDefault();
    schema
      .validate({ name, email, password }, { abortEarly: false })
      .then(() => {
        setErrors({});

        api
          .post("/users", { name, email, password })
          .then(() => {
            // then  a gente verifica se deu certo
            toast.success("Usuário cadastrado com sucesso!");
            navigate("/");
          })
          .catch((error) => {
            // catch a gente verifica se deu errado
            if (error.response) {
              toast.error(error.response.data.message); // mensagem de erro vinda com do back end por meio do json
            } else {
              toast.error("Não foi possível cadastrar"); // mensagem genérica de erro caso não cai no alert de cima
            }
          });
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
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(event) => {
            setName(event.target.value);
            validateField("name", event.target.value);
          }}
        />
        {errors.password && <span>{errors.name}</span>}
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => {
            setEmail(event.target.value);
            validateField("email", event.target.value);
          }}
        />
        {errors.password && <span>{errors.email}</span>}
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

        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}

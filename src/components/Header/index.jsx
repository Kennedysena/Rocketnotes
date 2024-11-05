import { RiShutDownLine } from "react-icons/ri";
import { Container, Profiler, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profiler>
        <img src="https://github.com/Kennedysena.png" alt="Foto de perfil" />
        <div>
          <span>Bem-vindo</span>
          <strong>Kennedy Sena</strong>
        </div>
      </Profiler>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

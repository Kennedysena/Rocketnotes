import { RiShutDownLine } from "react-icons/ri";

import { Container, Profiler, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profiler>
        <img src="https://github.com/Kennedysena.png" alt="Foto de perfil" />
        <div>
          <span>Bem-vindo</span>
          <strong>Kennedy Sena</strong>
        </div>
      </Profiler>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Profiler, Logout } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
    toast.success("Logout efetuado com sucesso!");
  }

  return (
    <Container>
      <Profiler to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profiler>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

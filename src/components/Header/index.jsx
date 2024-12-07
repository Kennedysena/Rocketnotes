import { useState } from "react";
import { RiShutDownLine, RiMenuLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Profiler, Logout, Menu } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Modal } from "../../components/Modal/index.jsx";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header({ onOpenMenu}) {
  const { user, signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
    toast.success("Logout efetuado com sucesso!");
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
      <RiMenuLine />
      </Menu>
      <Profiler to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profiler>
      <Logout onClick={handleOpenModal}>
        <RiShutDownLine />
      </Logout>

      {isModalOpen && (
        <Modal
          title="Tem certeza que deseja sair da aplicação ?"
          onCancel={handleCloseModal}
          onConfirm={handleSignOut}
        />
      )}
    </Container>
  );
}

import { ModalOverlay, ModalContent } from "./styles";

export function Modal({ title, onConfirm, onCancel }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{title}</h2>
        <div>
          <button type="button" onClick={onConfirm}>
            Sim
          </button>
          <button type="button" onClick={onCancel}>
            Não
          </button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
}

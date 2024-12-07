import { FiPlus, FiX} from "react-icons/fi";

import { Brand, Container, Menu, NewNote, Button } from "./styles"; 
import { ButtonText } from "../ButtonText";

export function MenuBar({ menuIsOpen, onCloseMenu, tags, tagsSelected, handleTagSelected }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Brand>
        <h1>Rocketnotes</h1>
          {menuIsOpen && (
          <Button onClick={onCloseMenu}>
          <FiX />
          </Button>
        )}
      </Brand>
      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}

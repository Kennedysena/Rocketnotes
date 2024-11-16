import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName); // includes verifica se a tag ja esta selecionada

    if (alreadySelected) { // se está selecionada vou fazer alguma coisa
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName); // vai retornar um array com as tags que não estão selecionadas
      setTagSelected(filteredTags);
    } else {
      setTagSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags && tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "express" },
                { id: "2", name: "nodejs" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observação" />

          <Section title="Links úteis">
            <NoteItem value={"https://www.rocketseat.com.br"} />
            <NoteItem isNew />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}

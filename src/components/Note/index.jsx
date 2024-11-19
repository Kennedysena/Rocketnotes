import { Container } from "./styles";
import { Tag } from "../Tag";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{capitalizeFirstLetter(data.title)}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

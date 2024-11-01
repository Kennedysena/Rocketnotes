import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="submit" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}

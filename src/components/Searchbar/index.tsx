import { FiSearch } from  'react-icons/fi';
import { Container, Input } from "./styles";

export function Searchbar()  {
  return (
    <Container>
      <FiSearch />
      <Input placeholder="Search Notes" />
    </Container>
  );
};
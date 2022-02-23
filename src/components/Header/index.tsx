import { FiMoon, FiSearch } from  'react-icons/fi';
import { Container, Input, Searchbar } from "./styles";

export function Header()  {
  return (
    <Container>
      <Searchbar>
        <FiSearch />
        <Input placeholder="Search Notes" />
      </Searchbar>

      <FiMoon />
    </Container>
  );
};
import { FiSearch } from  'react-icons/fi';
import { ThemeIcon } from './../ThemeIcon';

import { Container, Input, Searchbar } from "./styles";

export function Header()  {
  return (
    <Container>
      <Searchbar>
        <FiSearch />
        <Input placeholder="Search Notes" />
      </Searchbar>

      <ThemeIcon />

    </Container>
  );
};
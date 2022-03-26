import { useTranslation } from 'react-i18next';
import { FiSearch } from  'react-icons/fi';
import { ThemeIcon } from './../ThemeIcon';

import { Container, Input, Searchbar } from "./styles";

export function Header()  {
  const { t } = useTranslation();

  return (
    <Container>
      <Searchbar>
        <FiSearch />
        <Input placeholder={ t('app.search') } />
      </Searchbar>

      <ThemeIcon />

    </Container>
  );
};
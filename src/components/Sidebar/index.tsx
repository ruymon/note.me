import { LogoIcon } from './../LogoIcon';
import { Container, Wrapper } from './styles';
// import * as S from './styles';

import { FiHome, FiPlus, FiLogOut } from 'react-icons/fi';
import { SidebarItem } from './../SidebarItem'

export function Sidebar() {
  return (
    <Wrapper>
      <Container>
        <LogoIcon />

        <div>
          <SidebarItem active>
            <FiHome size={28} />
          </SidebarItem>
            
          <SidebarItem>
            <FiPlus size={28} />
          </SidebarItem>
        </div>

        <SidebarItem>
            <FiLogOut size={28} />
        </SidebarItem>
        
      </Container>
    </Wrapper>
  );
}
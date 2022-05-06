import styled from 'styled-components';
import { colors } from '../../styles';

const Header = styled.header`
  text-align: center;
  text-transform: uppercase;
  padding: 80px 0 50px 0;
  color: ${colors.neutralDarkCyan};
  line-height: 1.3;
  letter-spacing: 4px;

  p {
    font-size: 24px;
  }
`;

export default Header;

import styled from 'styled-components';
import { colors } from '../../styles';
const Button = styled.button`
  background: ${colors.primaryStrongCyan};
  color: ${colors.neutralVeryDarkCyan};
  width: 100%;
  text-transform: uppercase;
  padding: 4px 0;
  font-size: 20px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  //   justify-self: ${({ align }) => align || 'auto'};
  justify-self: flex-end;

  &:hover {
    opacity: 70%;
  }
`;

export default Button;

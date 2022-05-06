import styled from 'styled-components';
import { colors } from '../../styles';

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 10px;
  column-gap: 10px;
  padding-top: 8px;

  button {
    background: ${colors.neutralVeryDarkCyan};
    color: white;
    border: 0;
    border-radius: 6px;
    text-align: center;
    padding: 4px 0;
  }

  button.selected {
    background: ${colors.primaryStrongCyan};
  }

  button:hover {
    background: ${colors.neutralLightGrayishCyan};
    color: ${colors.neutralVeryDarkCyan};
  }

  input {
    background: ${colors.neutralVeryLightGrayishCyan};
    border: 0;
    border-radius: 6px;
    text-align: center;
  }
`;

export default ThreeColumnGrid;

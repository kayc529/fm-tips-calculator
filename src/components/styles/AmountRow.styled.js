import styled from 'styled-components';
import { colors } from '../../styles';

const AmountRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  margin-bottom: 20px;

  .text-container {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: white;
  }

  p {
    line-height: 1.1;
    font-size: 14px;
  }

  h3 {
    color: ${colors.primaryStrongCyan};
    text-align: end;
  }
`;

export default AmountRow;

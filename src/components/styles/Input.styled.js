import styled from 'styled-components';
import { colors } from '../../styles';

const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ bottom }) => bottom || '0'};
  margin-top: ${({ top }) => top || '0'};

  p {
    padding-bottom: 4px;
    font-size: 16px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .input-field {
    padding: 8px 0 8px 12px;
    background: ${colors.neutralVeryLightGrayishCyan};
    align-items: center;
    border-radius: 8px;
    border: ${({ error }) => (error ? '3px solid red' : '0')};
  }

  .error-text {
    color: red;
    opacity: ${({ error }) => (error ? '100%' : '0')};
  }

  img {
    width: auto;
    height: 20px;
  }

  input {
    text-align: end;
    max-width: 80%;
    background: transparent;
    border: 0;
    font-family: 'Space Mono', monospace;
    color: ${colors.neutralGrayishCyan};
    font-size: 24px;
    margin-right: 10px;
  }

  .error {
    border: 1px solid red;
  }
`;

export default Input;

import styled from 'styled-components';
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  width: ${(props) => props.width || 'auto'};
  max-width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 20px 40px;
  background: ${(props) => props.bg || 'white'};
  box-shadow: ${(props) =>
    props.hideShadow ? '0 0 0' : '1px 10px 15px rgba(0,0,0,0.1)'};

  .two-column-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .card-column-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .two-column-container {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      row-gap: 28px;
    }
  }
`;

export default Card;

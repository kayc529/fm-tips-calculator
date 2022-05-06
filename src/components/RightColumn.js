import Card from './styles/Card.styled';
import { colors } from '../styles';
import AmountRow from './styles/AmountRow.styled';
import Button from './styles/Button.styled';
import { useContext } from 'react';
import { AppContext } from '../App';

const RightColumn = () => {
  const { resetInput, tipAmount, total } = useContext(AppContext);

  return (
    <Card bg={colors.neutralVeryDarkCyan} direction='column'>
      <div className='card-column-container'>
        <div>
          <AmountRow>
            <div className='text-container'>
              <p className='title'>Tip Amount</p>
              <p className='per-person'>/ person</p>
            </div>
            <h3>${tipAmount}</h3>
          </AmountRow>
          <AmountRow>
            <div className='text-container'>
              <p className='title'>Total</p>
              <p className='per-person'>/ person</p>
            </div>
            <h3>${total}</h3>
          </AmountRow>
        </div>
        <Button onClick={() => resetInput()}>reset</Button>
      </div>
    </Card>
  );
};

export default RightColumn;

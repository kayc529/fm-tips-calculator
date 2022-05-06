import Input from './styles/Input.styled';
import ic_dollar from '../images/icon-dollar.svg';
import ic_people from '../images/icon-person.svg';
import SelectTips from './SelectTips';
import { AppContext } from '../App';
import { useContext } from 'react';

const LeftColumn = () => {
  const {
    bill,
    customTips,
    numOfPeople,
    setBill,
    setNumOfPeople,
    setCustomTips,
    isError,
  } = useContext(AppContext);

  return (
    <div className='card-column-container'>
      <Input bottom='24px'>
        <p>Bill</p>
        <div className='input-field'>
          <img src={ic_dollar} alt='icon-dollar' />
          <input
            type='number'
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
      </Input>
      <SelectTips customTips={customTips} setCustomTips={setCustomTips} />
      <Input top='24px' error={isError}>
        <div>
          <p>Number of People</p>
          <p className='error-text'>Can't be zero</p>
        </div>
        <div className='input-field'>
          <img src={ic_people} alt='icon-dollar' />
          <input
            type='number'
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
          />
        </div>
      </Input>
    </div>
  );
};

export default LeftColumn;

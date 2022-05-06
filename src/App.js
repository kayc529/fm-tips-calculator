import React, { useEffect, useState } from 'react';
import Container from './components/styles/Container.styled';
import Card from './components/styles/Card.styled';
import Header from './components/styles/Header.styled';
import './App.css';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import { isValidNumOfPeople } from './helper';

export const AppContext = React.createContext();

function App() {
  const [bill, setBill] = useState('0');
  const [numOfPeople, setNumOfPeople] = useState('1');
  const [customTips, setCustomTips] = useState('0');
  const [selectedTip, setSelectedTip] = useState(0);
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [isError, setIsError] = useState(false);

  const resetInput = () => {
    setBill('0');
    setNumOfPeople('1');
    setCustomTips('0');
    setSelectedTip(0);
    setTipAmount('0.00');
    setTotal('0.00');
    setIsError(false);
  };

  useEffect(() => {
    if (!isValidNumOfPeople(numOfPeople)) {
      setIsError(true);
      return;
    }

    setIsError(false);

    let totalTip =
      selectedTip === 0
        ? parseFloat(bill) * (parseInt(customTips) / 100)
        : parseFloat(bill) * (selectedTip / 100);

    setTipAmount((totalTip / parseInt(numOfPeople)).toFixed(2));
    setTotal(
      ((totalTip + parseFloat(bill)) / parseInt(numOfPeople)).toFixed(2)
    );
  }, [bill, numOfPeople, selectedTip, customTips]);

  return (
    <AppContext.Provider
      value={{
        bill,
        numOfPeople,
        customTips,
        selectedTip,
        tipAmount,
        total,
        isError,
        setBill,
        setNumOfPeople,
        setCustomTips,
        setSelectedTip,
        resetInput,
      }}
    >
      <Container>
        <Header>
          <p>spli</p>
          <p>tter</p>
        </Header>
        <Card hideShadow={false} width={'800px'}>
          <div className='two-column-container'>
            <LeftColumn />
            <RightColumn />
          </div>
        </Card>
        <footer>
          Challenge provided by{' '}
          <a
            href='https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX'
            target='_blank'
            rel='noreferrer'
          >
            Frontend Mentor
          </a>
        </footer>
      </Container>
    </AppContext.Provider>
  );
}

export default App;

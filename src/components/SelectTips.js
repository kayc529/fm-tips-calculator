import ThreeColumnGrid from './styles/ThreeColumnGrid.styled';
import { tipsPercentages } from '../data';
import { useContext } from 'react';
import { AppContext } from '../App';

const SelectTips = () => {
  const { setSelectedTip, selectedTip, customTips, setCustomTips } =
    useContext(AppContext);

  return (
    <>
      <p>Select Tips %</p>
      <ThreeColumnGrid>
        {tipsPercentages.map((tip, index) => {
          let className = tip === selectedTip ? 'selected' : '';
          return (
            <button
              className={className}
              key={index}
              onClick={() => setSelectedTip(tip)}
            >
              {tip}%
            </button>
          );
        })}
        <input
          placeholder='Custom'
          type='number'
          value={customTips}
          onChange={(e) => {
            setSelectedTip(0);
            setCustomTips(e.target.value);
          }}
        />
      </ThreeColumnGrid>
    </>
  );
};

export default SelectTips;

import React,{useState} from 'react';

interface Switcher3Props {
  text: string;
  onPercentageChange: (newPercentage: number) => void;
}

const Switcher3 = ({ text, onPercentageChange }: Switcher3Props) => {
  const [percentage, setPercentage] = useState(0);

  const toggleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked ? 20 : -20;
      setPercentage(newValue);
      onPercentageChange(newValue);
      console.log(newValue); 
  };

  return (
          <div className="flex justify-end my-2">
              <span className="label-text">{text}</span>
              <input
                  type="checkbox"
                  name={text}
                  className="toggle mx-3"
                  onChange={toggleValue}
              />
              <br />
          </div>
  );
};

export default Switcher3;
import coffeeList from '../../data/coffeeList';
import { useEffect } from 'react';

const CoffeeGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {coffeeList.map((coffee) => {
        return <button>{coffee.name}</button>;
      })}
    </>
  );
};

export default CoffeeGuide;

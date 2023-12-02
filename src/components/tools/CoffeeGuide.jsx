import coffeeList from '../../data/coffeeList';

const CoffeeGuide = () => {
  return (
    <>
      {coffeeList.map((coffee) => {
        return <button>{coffee.name}</button>;
      })}
    </>
  );
};

export default CoffeeGuide;

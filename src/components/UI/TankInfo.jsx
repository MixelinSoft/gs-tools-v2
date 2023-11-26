const TankInfo = ({ tank, lang }) => {
  return (
    <div>
      <h2>
        {lang.header_2}
        {tank.tankId}
      </h2>
      <p>
        {lang.text_1}
        {tank.type}
      </p>
      <p>
        {lang.text_2}
        {tank.tube}л
      </p>
      <p>
        {lang.text_3}
        {tank.minCapcity}л
      </p>
      <p>
        {lang.text_4}
        {tank.maxCapacity}л
      </p>
      <p>
        {lang.text_5}
        {tank.maxHeight}см
      </p>
    </div>
  );
};

export default TankInfo;

import Snowfall from 'react-snowfall';
import { Form } from 'react-bootstrap';
import { IoSnowSharp } from 'react-icons/io5';
import { useState } from 'react';

const SnowFall = () => {
  const [showSnow, setShowSnow] = useState(true);
  const showSnowHandler = (e) => {
    setShowSnow(e.target.checked);
  };
  // console.log(showSnow);
  return (
    <>
      <Form.Check // prettier-ignore
        type='switch'
        className='snowFallSwitch'
        label={<IoSnowSharp className='snowFallSwitchIcon' />}
        checked={showSnow}
        onChange={showSnowHandler}
      />
      <Snowfall
        className='snowfall'
        style={{
          display: showSnow ? 'block' : 'none',
        }}
      />
    </>
  );
};
export default SnowFall;

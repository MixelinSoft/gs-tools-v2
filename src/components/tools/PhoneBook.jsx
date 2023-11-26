import gsDB from '../../data/gsDB';
import { useState } from 'react';
import SelectorGS from '../SelectorGS';
import GSCard from '../UI/GSCard';
import BackButton from '../UI/BackButton';
import localization from '../../data/localization';

const PhoneBook = () => {
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';

  const [gsId, changeGsId] = useState('empty');

  const [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  const changeGsIdHandler = (id) => {
    changeGsId(id);
  };
  return (
    <>
      <BackButton />
      <SelectorGS
        confirmButton={false}
        param={'address'}
        changerId={changeGsIdHandler}
        lang={localization[userSettingsLocalizaton].selectorGS}
      />
      {selectedGS ? <GSCard id='gsCard' gs={selectedGS} /> : ''}
      <div id='resultZone'></div>
    </>
  );
};

export default PhoneBook;

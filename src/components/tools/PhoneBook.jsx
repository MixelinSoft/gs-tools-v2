import gsDB from '../../data/GAS-STATION_DB';
import { useState, useEffect } from 'react';
import SelectorGS from '../SelectorGS';
import GSCard from '../UI/GSCard';
import BackButton from '../UI/BackButton';
import localization from '../../data/localization';
import SearchGS from '../UI/SearchGS';

const PhoneBook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';

  const [gsId, changeGsId] = useState('empty');
  const [searchInput, changeSearchInput] = useState('');
  const [searchResults, changeSearchResults] = useState([]);

  let [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  const changeGsIdHandler = (id) => {
    changeGsId(id);
    changeSearchInput('');
    changeSearchResults([]);
    selectedGS = gsDB.filter((gs) => gs.gsId === id);
  };

  const changeResultsHandler = (result) => {
    changeSearchResults(result);
  };
  const searchGsHandler = (input) => {
    const inputText = input.target.value;
    changeSearchInput(inputText);

    const result = gsDB.filter(
      (el) =>
        el.address.toLowerCase().includes(inputText.toLowerCase()) ||
        el.gsNumber.toLowerCase().includes(inputText.toLowerCase())
    );
    changeResultsHandler(result);
  };

  return (
    <>
      <BackButton />
      <SelectorGS
        confirmButton={false}
        param={'address'}
        changerId={changeGsIdHandler}
        lang={localization[userSettingsLocalizaton].selectorGS}
        value={selectedGS?.gsId}
      />
      <SearchGS
        onChange={searchGsHandler}
        value={searchInput}
        results={searchResults}
        onSelectGS={changeGsIdHandler}
      />

      {selectedGS ? <GSCard id='gsCard' gs={selectedGS} /> : ''}
      <div id='resultZone'></div>
    </>
  );
};

export default PhoneBook;

import gsDB from '../../data/GAS-STATION_DB';
import { useState, useEffect } from 'react';
import SelectorGS from '../SelectorGS';
import GSCard from '../UI/GSCard';
import BackButton from '../UI/BackButton';
import localization from '../../data/localization';
import SearchGS from '../UI/SearchGS';
import { FaSearchLocation, FaList } from 'react-icons/fa';
import { Button, InputGroup } from 'react-bootstrap';
import SearchGSResults from '../UI/SearchGSResults';

const PhoneBook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';

  const [gsId, changeGsId] = useState('empty');
  const [searchInput, changeSearchInput] = useState('');
  const [searchResults, changeSearchResults] = useState([]);
  const [searchMethod, changeSearchMethod] = useState(true);

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
    changeGsId('empty');

    const result = gsDB.filter(
      (el) =>
        el.address
          .trim()
          .toLowerCase()
          .includes(inputText.trim().toLowerCase()) ||
        el.gsNumber
          .trim()
          .toLowerCase()
          .includes(inputText.trim().toLowerCase()) ||
        el.gsFirm.trim().toLowerCase().includes(inputText.trim().toLowerCase())
    );
    inputText.length > 0
      ? changeResultsHandler(result)
      : changeResultsHandler([]);
  };

  const seatchMethodHandler = () => {
    changeGsId('empty');
    changeSearchResults([]);
    changeSearchInput('');
    selectedGS = undefined;
    changeSearchMethod(!searchMethod);
  };

  return (
    <>
      <BackButton />
      <InputGroup>
        {searchMethod ? (
          <SelectorGS
            confirmButton={false}
            param={'address'}
            changerId={changeGsIdHandler}
            lang={localization[userSettingsLocalizaton].selectorGS}
          />
        ) : (
          <SearchGS
            onChange={searchGsHandler}
            value={searchInput}
            placeholder={localization[userSettingsLocalizaton].tools.phoneBook}
          />
        )}
        <Button variant='dark' onClick={() => seatchMethodHandler()}>
          {searchMethod ? <FaSearchLocation /> : <FaList />}
        </Button>
      </InputGroup>
      {!searchMethod ? (
        <SearchGSResults
          results={searchResults}
          onSelectGS={changeGsIdHandler}
        />
      ) : (
        ''
      )}

      {selectedGS ? <GSCard id='gsCard' gs={selectedGS} /> : ''}
      <div id='resultZone'></div>
    </>
  );
};

export default PhoneBook;

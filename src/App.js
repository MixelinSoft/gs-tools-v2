import './App.css';
import localization from './data/localization';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Tool from './components/Tool';
import Toolbox from './components/Toolbox';
import Contacts from './components/Contacts';
import About from './components/About';
import ModalInfo from './components/UI/ModalInfo';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  let userSettingsLocalizaton = localStorage.getItem('language') ?? 'ru';
  const [userLocalization, setLocalization] = useState(userSettingsLocalizaton);
  const [showModalLocalization, setShowModalLocalization] = useState(
    !!!userSettingsLocalizaton
  );

  const localizationHandler = (lang) => {
    setLocalization(lang);
    localStorage.setItem('language', lang);
    setShowModalLocalization(false);
  };

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <ModalInfo
            showToggler={setShowModalLocalization}
            show={showModalLocalization}
            headerText={localization[userLocalization].selectLocalization}
            bodyText={
              <>
                <Button
                  variant='dark'
                  onClick={() => localizationHandler('ua')}>
                  Українська
                </Button>
                <br></br>
                <br></br>
                <Button
                  variant='dark'
                  onClick={() => localizationHandler('ru')}>
                  Русский
                </Button>
              </>
            }
          />
          <Routes>
            <Route
              path='/'
              element={
                <MainLayout localization={localization[userLocalization]} />
              }>
              <Route
                index
                element={
                  <Toolbox
                    lang={userLocalization}
                    localization={localization[userLocalization]}
                  />
                }
              />
              <Route path='/:slug' element={<Tool lang={userLocalization} />} />
              <Route
                path='/contacts'
                element={
                  <Contacts
                    localization={localization[userLocalization].menu.contacts}
                  />
                }
              />
              <Route
                path='/about'
                element={
                  <About
                    localization={localization[userLocalization].menu.about}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

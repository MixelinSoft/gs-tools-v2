import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SelectLocalization from './components/UI/SelectLocalization';
import MainLayout from './components/MainLayout';
import Tool from './components/Tool';
import Toolbox from './components/Toolbox';
import Contacts from './components/Contacts';
import Settings from './components/Settings';
import About from './components/About';
import { useState } from 'react';
import localization from './data/localization';

// import SnowFall from './components/UI/SnowFall';

function App() {
  let showModal = !!!localStorage.getItem('language');
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const [userLocalization, setLocalization] = useState(userSettingsLocalizaton);

  const localizationHandler = (lang) => {
    setLocalization(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          {showModal ? (
            <SelectLocalization
              show
              localizationHandler={localizationHandler}
            />
          ) : (
            ''
          )}
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
                path='/settings'
                element={
                  <Settings
                    localization={localization[userLocalization].menu.settings}
                    onChangeLocalization={localizationHandler}
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
      {/* <SnowFall /> */}
    </>
  );
}

export default App;

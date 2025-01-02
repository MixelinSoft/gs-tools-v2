import { useEffect, useRef, useState } from 'react';
import { Accordion, Button, Form, InputGroup } from 'react-bootstrap';
import SelectorGS from '../SelectorGS';
import localization from '../../data/localization';
import gsDB from '../../data/GAS-STATION_DB';
import BackButton from '../UI/BackButton';
import ModalInfo from '../UI/ModalInfo';
import { IoMdHelpCircleOutline } from 'react-icons/io';
// Import Guide Images
import f1 from '../../images/reportGenerator/fuelChecks/1.png';
import f2 from '../../images/reportGenerator/fuelChecks/2.png';
import f3 from '../../images/reportGenerator/fuelChecks/3.png';
import f4 from '../../images/reportGenerator/fuelChecks/4.png';
import r1 from '../../images/reportGenerator/createReport/1.png';
import r2 from '../../images/reportGenerator/createReport/2.png';
import r3 from '../../images/reportGenerator/createReport/3.png';
import r4 from '../../images/reportGenerator/createReport/4.png';
import r5 from '../../images/reportGenerator/createReport/5.png';
import r6 from '../../images/reportGenerator/createReport/6.png';
import r7 from '../../images/reportGenerator/createReport/7.png';
import r8 from '../../images/reportGenerator/createReport/8.png';
import r9 from '../../images/reportGenerator/createReport/9.png';
import { parseHTML, parseReportToText } from '../../utils/reportParsers';

const ReportGenerator = (props) => {
  // // Local Storage
  // Localization
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton];
  const toolText = localization[userSettingsLocalizaton].tools.reportGenerator;
  // Stored Reports
  const storedReports =
    JSON.parse(localStorage.getItem('productReports')) || {};
  // Create DOM Parser
  const parser = new DOMParser();

  // // States // //
  const [activeKey, setActiveKey] = useState(null);
  // Gas Station State
  const [gasStation, setGasStation] = useState('empty');
  const gasStationHandler = (gsId) => {
    const selectedGS = gsDB.filter((gs) => gs.gsId === gsId);
    setGasStation(selectedGS[0]);
  };
  // Fuel Checks State
  const [fuelChecks, setFuelChecks] = useState('');
  const fuelChecksHandler = (e) => {
    if (e === '') {
      setFuelChecks('');
    } else {
      setFuelChecks(+e.target.value);
    }
  };
  // Loaded Report State
  const [loadedReport, setLoadedReport] = useState('');
  const loadedReportHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file.type === 'text/html') {
      reader.onload = (e) => {
        const decoder = new TextDecoder('windows-1251');
        const htmlContent = decoder.decode(e.target.result);
        const doc = parser.parseFromString(htmlContent, 'text/html');

        if (
          doc.querySelector('body').textContent.includes('Підсумковий звіт')
        ) {
          setLoadedReport(htmlContent);
        } else {
          errorModalContentHandler(
            <div>
              <span>
                {toolText.errors.incorrectReport}
                <button
                  className={'helpButton'}
                  onClick={(e) => {
                    e.preventDefault();
                    showReportCreateGuideHandler(true);
                  }}
                >
                  <IoMdHelpCircleOutline className={'helpButtonIconBlack'} />
                </button>
              </span>
            </div>,
          );
          showErrorModalHandler(true);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      showErrorModalHandler(true);
      errorModalContentHandler(
        <div>
          <span>
            {toolText.errors.incorrectFileType}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showReportCreateGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIconBlack'} />
            </button>
          </span>
        </div>,
      );
    }

    if (loadedReport !== '') {
      fuelChecksHandler('');
    }
  };
  // Generated Report State
  const [generatedReport, setGeneratedReport] = useState(null);
  // Month Report State
  const [isReportMonth, setIsReportMonth] = useState(false);
  const isReportMonthHandler = (value) => {
    setIsReportMonth(value);
  };
  // Show Modal State
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (value) => {
    setShowModal(value);
  };
  // Show Guide States
  const [showFuelChecksGuide, setShowFuelChecksGuide] = useState(false);
  const showFuelChecksGuideHandler = (value) => {
    setShowFuelChecksGuide(value);
  };
  const [showReportCreateGuide, setShowReportCreateGuide] = useState(false);
  const showReportCreateGuideHandler = (value) => {
    setShowErrorModal(false);
    setShowReportCreateGuide(value);
  };
  // Error Modal State
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalContent, setErrorModalContent] = useState('');
  const showErrorModalHandler = (value) => {
    setShowErrorModal(value);
  };
  const errorModalContentHandler = (content) => {
    setErrorModalContent(content);
  };

  // // Refs
  // Saved Reports Accordeon Ref
  const accordionRef = useRef(null);

  // // Modal Content
  // Guides Content
  const fuelChecksGuide = (
    <div className={'guideBody'}>
      <p>{toolText.guideFuelChecks.p1}</p>
      <img src={f1} alt='Fuel Checks Guide' />
      <br />
      <br />
      <p>{toolText.guideFuelChecks.p2}</p>
      <img src={f2} alt='Fuel Checks Guide' />
      <br />
      <br />
      <br />
      <p>{toolText.guideFuelChecks.p3}</p>
      <img src={f3} alt='Fuel Checks Guide' />
      <p>{toolText.guideFuelChecks.p4}</p>
      <img src={f4} alt='Fuel Checks Guide' />
    </div>
  );
  const reportCreateGuide = (
    <div className={'guideBody'}>
      <p>{toolText.guideReportExport.p1}</p>
      <img src={r1} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p2}</p>
      <img src={r2} alt='Report Guide' />
      <br />
      <br />
      <br />
      <p>{toolText.guideReportExport.p3}</p>
      <img src={r3} alt='Report Guide' />
      <p>{toolText.guideReportExport.p4}</p>
      <br />
      <br />
      <img src={r4} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p5}</p>
      <img src={r5} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p6}</p>
      <br />
      <img src={r6} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p7}</p>
      <br />
      <br />
      <img src={r7} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p8}</p>

      <img src={r8} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p9}</p>
      <img src={r9} alt='Report Guide' />
    </div>
  );

  // Generate Report
  const generateReport = () => {
    if (!isReportMonth) {
      const storedReports =
        JSON.parse(localStorage.getItem('productReports')) || {};
      const formattedDate = `${String(
        generatedReport.reportDate.getDate(),
      ).padStart(2, '0')}${String(
        generatedReport.reportDate.getMonth() + 1,
      ).padStart(2, '0')}${String(
        generatedReport.reportDate.getFullYear(),
      ).slice(-2)}`;
      storedReports[formattedDate] = generatedReport;
      const dates = Object.keys(storedReports);
      if (dates.length > 14) {
        const sortedDates = dates.sort();
        const oldestDate = sortedDates[0];
        delete storedReports[oldestDate];
      }
      localStorage.setItem('productReports', JSON.stringify(storedReports));
    }
    showModalHandler(true);
  };

  // Generate Report On Input
  useEffect(() => {
    setGeneratedReport(null);
    if (loadedReport !== '' && gasStation !== 'empty' && fuelChecks !== '') {
      const reportObject = parseHTML(loadedReport, isReportMonth);

      reportObject.fuelChecks = fuelChecks;
      reportObject.daySum.sum = Math.round(reportObject.daySum.sum * 100) / 100;

      setGeneratedReport(reportObject);
    }
  }, [gasStation, fuelChecks, loadedReport, isReportMonth]);
  // Close Accordion On Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setActiveKey(null); // Закрыть аккордеон
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <Accordion
        ref={accordionRef}
        activeKey={activeKey}
        onSelect={(e) => setActiveKey(e)}
      >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Saved Reports</Accordion.Header>
          <Accordion.Body>
            {Object.keys(storedReports).map((date) => {
              return (
                <Button
                  key={date}
                  variant='dark'
                  className='reportButton'
                  onClick={() => console.log('MOnth Report')}
                >{`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(
                  4,
                  6,
                )}`}</Button>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Form>
        <SelectorGS
          changerId={gasStationHandler}
          param={'gsNumber'}
          lang={text.selectorGS}
        />
        <br />
        <Form.Group controlId='fuelChecksInput' className='mb-3'>
          <Form.Label>
            {toolText.labelFuel}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showFuelChecksGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIcon'} />
            </button>
          </Form.Label>
          <Form.Control
            placeholder={toolText.inputPlaceholder}
            value={fuelChecks}
            onChange={fuelChecksHandler}
            type='number'
            size='lg'
          />
        </Form.Group>
        <Form.Group controlId='formFileLg' className='mb-3'>
          <Form.Label>
            {toolText.labelReport}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showReportCreateGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIcon'} />
            </button>
          </Form.Label>
          <Form.Control type='file' size='lg' onChange={loadedReportHandler} />
        </Form.Group>
        <InputGroup>
          <Form.Check
            className='switch'
            type='switch'
            label={'month report'}
            checked={isReportMonth}
            onChange={() => isReportMonthHandler(!isReportMonth)}
          />
        </InputGroup>
        {generatedReport && (
          <Button variant={'dark'} onClick={generateReport}>
            {toolText.buttonGenerate}
          </Button>
        )}
      </Form>
      {generatedReport && (
        <ModalInfo
          headerText={toolText.modalHeader}
          bodyText={parseReportToText(
            generatedReport,
            gasStation,
            toolText,
            isReportMonth,
          )}
          showToggler={showModalHandler}
          show={showModal}
        />
      )}
      {/* Guides Modals */}
      <ModalInfo
        headerText={toolText.guideHeader}
        bodyText={fuelChecksGuide}
        show={showFuelChecksGuide}
        showToggler={showFuelChecksGuideHandler}
      />
      <ModalInfo
        headerText={toolText.guideHeader}
        bodyText={reportCreateGuide}
        show={showReportCreateGuide}
        showToggler={showReportCreateGuideHandler}
      />
      {/* Error Modal */}
      <ModalInfo
        headerText={toolText.errors.errorHeader}
        bodyText={errorModalContent}
        show={showErrorModal}
        showToggler={showErrorModalHandler}
      />
      <BackButton />
    </>
  );
};

export default ReportGenerator;

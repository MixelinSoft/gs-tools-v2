//Tools components Import
import SalaryCalc from '../components/tools/SalaryCalc';
import Calibration from '../components/tools/Calibration';
import DensityCalc from '../components/tools/DensityCalc';
import ReCalibrate from '../components/tools/ReCalibrate';
import PhoneBook from '../components/tools/PhoneBook';
import ExpirationDates from '../components/tools/ExpirationDates';
import CoffeeGuide from '../components/tools/CoffeeGuide';

//Icons import
import { GiThermometerScale, GiChemicalTank } from 'react-icons/gi';
import { MdOutlineContactPhone } from 'react-icons/md';
import { BsCashStack } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { RiWaterPercentLine } from 'react-icons/ri';
import { SiCoffeescript } from 'react-icons/si';

//Localization
import localization from '../data/localization';
// Separation of localization
const UAlocalization = localization.ua.tools;
const RUlocalization = localization.ru.tools;

const tools = [
  {
    // Fuel Calibration
    toolTitle: {
      ua: UAlocalization.calibration.title,
      ru: RUlocalization.calibration.title,
    },
    toolDescription: {
      ua: UAlocalization.calibration.description,
      ru: RUlocalization.calibration.description,
    },
    toolID: '01',
    toolSlug: 'calibrate',
    toolVersion: '1.3.3',
    tool: Calibration,
    icon: <GiThermometerScale className='rotate' />,
  },
  ////////////////////////////////////////////////////
  {
    // Fuel Back Calibration
    toolTitle: {
      ua: UAlocalization.reCalibrate.title,
      ru: RUlocalization.reCalibrate.title,
    },
    toolDescription: {
      ua: UAlocalization.reCalibrate.description,
      ru: RUlocalization.reCalibrate.description,
    },
    toolID: '02',
    toolSlug: 'recalibrate',
    toolVersion: '1.2.3',
    tool: ReCalibrate,
    icon: <GiChemicalTank />,
  },
  ////////////////////////////////////////////////////
  {
    // Density Calculator
    toolTitle: {
      ua: UAlocalization.densityCalc.title,
      ru: RUlocalization.densityCalc.title,
    },
    toolDescription: {
      ua: UAlocalization.densityCalc.description,
      ru: RUlocalization.densityCalc.description,
    },
    toolID: '03',
    toolSlug: 'density-calc',
    toolVersion: '1.0.3',
    tool: DensityCalc,
    icon: <RiWaterPercentLine />,
  },
  ////////////////////////////////////////////////////
  {
    // Phone Book
    toolTitle: {
      ua: UAlocalization.phoneBook.title,
      ru: RUlocalization.phoneBook.title,
    },
    toolDescription: {
      ua: UAlocalization.phoneBook.description,
      ru: RUlocalization.phoneBook.description,
    },

    toolID: '04',
    toolSlug: 'phone-book',
    toolVersion: '1.2.6',
    tool: PhoneBook,
    icon: <MdOutlineContactPhone />,
  },
  ////////////////////////////////////////////////////
  {
    // Salary Calculator
    toolTitle: {
      ua: UAlocalization.salaryCalc.title,
      ru: RUlocalization.salaryCalc.title,
    },
    toolDescription: {
      ua: UAlocalization.salaryCalc.description,
      ru: RUlocalization.salaryCalc.description,
    },
    toolID: '05',
    toolSlug: 'salary-calc',
    toolVersion: '1.1.11',
    tool: SalaryCalc,
    icon: <BsCashStack />,
  },
  ////////////////////////////////////////////////////
  {
    // Expiration Date Calculator
    toolTitle: {
      ua: UAlocalization.expirationDate.title,
      ru: RUlocalization.expirationDate.title,
    },
    toolDescription: {
      ua: UAlocalization.expirationDate.description,
      ru: RUlocalization.expirationDate.description,
    },
    toolID: '06',
    toolSlug: 'expiration-date',
    toolVersion: '1.2.5',
    tool: ExpirationDates,
    icon: <LuCalendarClock />,
  },
  ///////////////////////////////////////////////////

  // {
  //   toolTitle: {
  //     // Coffee Guide
  //     ua: UAlocalization.coffeeGuide.title,
  //     ru: RUlocalization.coffeeGuide.title,
  //   },
  //   toolDescription: {
  //     ua: UAlocalization.coffeeGuide.description,
  //     ru: RUlocalization.coffeeGuide.description,
  //   },
  //   toolID: '07',
  //   toolSlug: 'coffee-guide',
  //   toolVersion: '0.0.2',
  //   tool: CoffeeGuide,
  //   icon: <SiCoffeescript />,
  // },
];

export default tools;

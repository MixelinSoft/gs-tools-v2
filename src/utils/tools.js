//tools
import SalaryCalc from '../components/tools/SalaryCalc';
import Calibration from '../components/tools/Calibration';
import ReCalibrate from '../components/tools/ReCalibrate';
import PhoneBook from '../components/tools/PhoneBook';
import ExpirationDates from '../components/tools/ExpirationDates';
//icons
import { GiThermometerScale, GiChemicalTank } from 'react-icons/gi';
import { MdOutlineContactPhone } from 'react-icons/md';
import { BsCashStack } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
//Localization
import localization from '../data/localization';

const UAlocalization = localization.ua.tools;
const RUlocalization = localization.ru.tools;

const tools = [
  {
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
    toolVersion: '1.3.1',
    tool: Calibration,
    icon: <GiThermometerScale className='rotate' />,
  },

  {
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
    toolVersion: '1.2.1',
    tool: ReCalibrate,
    icon: <GiChemicalTank />,
  },

  {
    toolTitle: {
      ua: UAlocalization.phoneBook.title,
      ru: RUlocalization.phoneBook.title,
    },
    toolDescription: {
      ua: UAlocalization.phoneBook.description,
      ru: RUlocalization.phoneBook.description,
    },

    toolID: '03',
    toolSlug: 'phone-book',
    toolVersion: '1.2.4',
    tool: PhoneBook,
    icon: <MdOutlineContactPhone />,
  },
  {
    toolTitle: {
      ua: UAlocalization.salaryCalc.title,
      ru: RUlocalization.salaryCalc.title,
    },
    toolDescription: {
      ua: UAlocalization.salaryCalc.description,
      ru: RUlocalization.salaryCalc.description,
    },
    toolID: '04',
    toolSlug: 'salary-calc',
    toolVersion: '1.1.8',
    tool: SalaryCalc,
    icon: <BsCashStack />,
  },
  {
    toolTitle: {
      ua: UAlocalization.expirationDate.title,
      ru: RUlocalization.expirationDate.title,
    },
    toolDescription: {
      ua: UAlocalization.expirationDate.description,
      ru: RUlocalization.expirationDate.description,
    },
    toolID: '05',
    toolSlug: 'expiration-date',
    toolVersion: '1.2.3',
    tool: ExpirationDates,
    icon: <LuCalendarClock />,
  },
];

export default tools;

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
      ua: 'test',
      ru: RUlocalization.calibration.title,
    },
    toolDescription: {
      ua: 'test',
      ru: RUlocalization.calibration.description,
    },
    toolID: '01',
    toolSlug: 'calibrate',
    toolVersion: '1.2.10',
    tool: Calibration,
    icon: <GiThermometerScale className='rotate' />,
  },

  {
    toolTitle: {
      ua: 'test',
      ru: RUlocalization.reCalibrate.title,
    },
    toolDescription: {
      ua: 'test',
      ru: RUlocalization.reCalibrate.description,
    },
    toolID: '02',
    toolSlug: 'recalibrate',
    toolVersion: '1.1.4',
    tool: ReCalibrate,
    icon: <GiChemicalTank />,
  },

  {
    toolTitle: {
      ua: 'test',
      ru: RUlocalization.phoneBook.title,
    },
    toolDescription: {
      ua: 'test',
      ru: RUlocalization.phoneBook.description,
    },
    toolID: '03',
    toolSlug: 'phone-book',
    toolVersion: '1.2.3',
    tool: PhoneBook,
    icon: <MdOutlineContactPhone />,
  },
  {
    toolTitle: {
      ua: 'test',
      ru: RUlocalization.salaryCalc.title,
    },
    toolDescription: {
      ua: 'test',
      ru: RUlocalization.salaryCalc.description,
    },
    toolID: '04',
    toolSlug: 'salary-calc',
    toolVersion: '1.1.7',
    tool: SalaryCalc,
    icon: <BsCashStack />,
  },
  {
    toolTitle: {
      ua: 'test',
      ru: RUlocalization.expirationDate.title,
    },
    toolDescription: {
      ua: 'test',
      ru: RUlocalization.expirationDate.description,
    },
    toolID: '05',
    toolSlug: 'expiration-date',
    toolVersion: '1.2.2',
    tool: ExpirationDates,
    icon: <LuCalendarClock />,
  },
];

export default tools;

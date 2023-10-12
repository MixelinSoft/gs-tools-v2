import SalaryCalc from "../components/tools/SalaryCalc";
import Calibration from "../components/tools/Calibration";
const tools = [
  {
    toolTitle: "Калибровка топлива",
    toolDescription:
      "Инструмент для калибровки топлива, конвертирует 'см' в 'л'",
    toolID: "01",
    toolSlug: "calibrate",
    toolVersion: "1.2.2",
    tool: Calibration,
  },
  {
    toolTitle: "Калькулятор зарплаты",
    toolDescription: "Инструмент для подсчёта зароботной платы",
    toolID: "04",
    toolSlug: "salary-calc",
    toolVersion: "1.0.1",
    tool: SalaryCalc,
  },
];

export default tools;

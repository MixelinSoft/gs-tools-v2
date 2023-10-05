import SalaryCalc from "../components/tools/SalaryCalc";

const tools = [
  {
    toolTitle: "Калибровка топлива",
    toolDescription:
      "Инструмент для калибровки топлива, конвертирует 'мм' в 'л'",
    toolID: "01",
    toolSlug: "calibrate",
    tool: function (test) {
      return <h1>Test Done!</h1>;
    },
  },
  {
    toolTitle: "Калькулятор зарплаты",
    toolDescription: "Инструмент для подсчёта зароботной платы",
    toolID: "04",
    toolSlug: "salary-calc",
    toolVersion: "0.1.0",
    tool: SalaryCalc,
  },
];

export default tools;

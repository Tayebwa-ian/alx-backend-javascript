export default function createIteratorObject(report) {
  const Array = [];
  const employees = report.allEmployees;
  for (const key in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, key)) {
      Array.push(...employees[key]);
    }
  }
  return Array;
}

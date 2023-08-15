import Employee from "./Employee";

export function searchEmployee() {
  if (!localStorage["employees"]) {
    localStorage["employees"] = "[]";
  }
  let employees = localStorage["employees"];
  try {
    employees = JSON.parse(employees);
  } catch (error) {
    console.error("Error al analizar el JSON:", error);
    employees = [];
  }
  return employees;
}

export function removeEmployee(id: string) {
  let employees = searchEmployee();

  let indice = employees.findIndex((employee: any) => employee.id == id);
  employees.splice(indice, 1);
  localStorage["employees"] = JSON.stringify(employees);
}

export function saveEmployee(employee: Employee) {
  let employees = searchEmployee();
  if (employee.id) {
    //Editar
    let indice = employees.findIndex((c: Employee) => c.id == employee.id);
    employees[indice] = employee;
  } else {
    //Nuevo
    employee.id = String(Math.round(Math.random() * 10000));
    employees.push(employee);
  }
  localStorage["employees"] = JSON.stringify(employees);
}

export function searchEmployeeById(id: string) {
  let employees = searchEmployee();
  return employees.find((employee: any) => employee.id == id);
}

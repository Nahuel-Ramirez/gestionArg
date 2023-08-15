import Customer from "./Customer";

export function searchCustomer() {
  if (!localStorage["customers"]) {
    localStorage["customers"] = "[]";
  }
  let customers = localStorage["customers"];
  try {
    customers = JSON.parse(customers);
  } catch (error) {
    console.error("Error al analizar el JSON:", error);
    customers = [];
  }
  return customers;
}

export function removeCustomer(id: string) {
  let customers = searchCustomer();

  let indice = customers.findIndex((customer: any) => customer.id == id);
  customers.splice(indice, 1);
  localStorage["customers"] = JSON.stringify(customers);
}

export function saveCustomer(customer: Customer) {
  let customers = searchCustomer();
  if (customer.id) {
    //Editar
    let indice = customers.findIndex((c: Customer) => c.id == customer.id);
    customers[indice] = customer;
  } else {
    //Nuevo
    customer.id = String(Math.round(Math.random() * 10000));
    customers.push(customer);
  }
  localStorage["customers"] = JSON.stringify(customers);
}

export function searchCustomerById(id: string) {
  let customers = searchCustomer();
  return customers.find((customer: any) => customer.id == id);
}

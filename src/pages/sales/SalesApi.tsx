import Sales from "./Sales";

export function searchSale() {
  if (!localStorage["sales"]) {
    localStorage["sales"] = "[]";
  }
  let sales = localStorage["sales"];
  try {
    sales = JSON.parse(sales);
  } catch (error) {
    console.error("Error al analizar el JSON:", error);
    sales = [];
  }
  return sales;
}

// export function removeCustomer(id: string) {
//   let customers = searchCustomer();

//   let indice = customers.findIndex((customer: any) => customer.id == id);
//   customers.splice(indice, 1);
//   localStorage["customers"] = JSON.stringify(customers);
// }

export function saveSale(sale: Sales) {
  let sales = searchSale();
  if (sale.id) {
    //Editar
    let indice = sales.findIndex((s: Sales) => s.id == sales.id);
    sales[indice] = sales;
  } else {
    //Nuevo
    sales.id = String(Math.round(Math.random() * 10000));
    sales.push(sales);
  }
  localStorage["sales"] = JSON.stringify(sales);
}

export function searchSaleById(id: string) {
  let sales = searchSale();
  return sales.find((sales: any) => sales.id == id);
}

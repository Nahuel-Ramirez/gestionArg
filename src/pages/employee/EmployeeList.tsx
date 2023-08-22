import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import { add, close, pencilOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeEmployee, searchEmployee } from "./EmployeeApi";
import Swal from "sweetalert2";
import Employee from "./Employee";

const EmployeeList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();


  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployee();
    setClientes(result);
  };

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  };

  // const pruebaLocalStorage = () => {
  //   const ejemplo = {
  //     id: "1",
  //     firstname: "nahuel",
  //     lastname: "ramirez",
  //     email: "nahuel-ramirez@hotmail.com",
  //     phone: "1122554477",
  //     address: "calle 123",
  //   };
  //   saveEmployee(ejemplo);
  // };

  const addEmployee = () => {
    history.push("/page/employee/new");
    window.location.reload();
  };

  const editEmployee = (id: string) => {
    history.push("/page/employee/" + id);
    window.location.reload();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
            <IonItem>
              <IonTitle>Empleados</IonTitle>
              <IonButton
                onClick={addEmployee}
                color="primary"
                fill="outline"
                slot="end"
              >
                <IonIcon icon={add} />
                Agregar Empleado
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Direccion</IonCol>
                <IonCol>Salario</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {clientes.map((cliente: Employee) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstName} {cliente.lastName}
                  </IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>${cliente.salary}</IonCol>
                  <IonCol>
                    <IonButton
                      color="primary"
                      fill="clear"
                      size="small"
                      onClick={() => editEmployee(String(cliente.id))}
                    >
                      <IonIcon icon={pencilOutline} />
                    </IonButton>

                    <IonButton
                      color="danger"
                      fill="clear"
                      size="small"
                      onClick={() => remove(String(cliente.id))}
                    >
                      <IonIcon icon={close} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonCard>

          {/* <IonButton
            onClick={pruebaLocalStorage}
            color="danger"
            fill="clear"
            size="small"
          >
            Prueba localstorage
          </IonButton> */}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;

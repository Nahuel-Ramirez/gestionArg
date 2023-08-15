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
import ExploreContainer from "../../components/ExploreContainer";
import { add, close, pencilOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeCustomer, searchCustomer } from "./CustomerApi";
import Customer from "./Customer";

const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchCustomer();
    setClientes(result);
  };

  const remove = (id: string) => {
    removeCustomer(id);
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
  //   saveCustomer(ejemplo);
  // };

  const addCustomer = () => {
    history.push("/page/customer/new");
    window.location.reload();
  };

  const editCustomer = (id: string) => {
    history.push("/page/customer/" + id);
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
              <IonTitle>Clientes</IonTitle>
              <IonButton
                onClick={addCustomer}
                color="primary"
                fill="outline"
                slot="end"
              >
                <IonIcon icon={add} />
                Agregar Cliente
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Direccion</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {clientes.map((cliente: Customer) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstname} {cliente.lastname}
                  </IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton
                      color="primary"
                      fill="clear"
                      size="small"
                      onClick={() => editCustomer(String(cliente.id))}
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

export default CustomerList;

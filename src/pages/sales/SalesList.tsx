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
import { searchSale } from "./SalesApi";
import Sales from "../sales/Sales";

const SalesList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [sales, setSales] = useState<Sales[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchSale();
    setSales(result);
  };

  // const remove = (id: string) => {
  //   removeCustomer(id);
  //   search();
  // };

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

  const addSale = () => {
    history.push("/page/sales/new");
    window.location.reload();
  };

  const editSale = (id: string) => {
    history.push("/page/sales/" + id);
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
              <IonTitle>Ventas</IonTitle>
              <IonButton
                onClick={addSale}
                color="primary"
                fill="outline"
                slot="end"
              >
                <IonIcon icon={add} />
                Agregar Venta
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Factura</IonCol>
                <IonCol>Tipo</IonCol>
                <IonCol>Fecha</IonCol>
                <IonCol>Total</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {sales.map((sales: Sales) => (
                <IonRow>
                  <IonCol>{sales.id}</IonCol>
                  <IonCol>{sales.type}</IonCol>
                  <IonCol>{String(sales.date)}</IonCol>
                  <IonCol>{sales.total}</IonCol>
                  <IonCol>
                    <IonButton
                      color="primary"
                      fill="clear"
                      size="small"
                      // onClick={() => editCustomer(String(cliente.id))}
                    >
                      <IonIcon icon={pencilOutline} />
                    </IonButton>

                    <IonButton
                      color="danger"
                      fill="clear"
                      size="small"
                      // onClick={() => remove(String(cliente.id))}
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

export default SalesList;

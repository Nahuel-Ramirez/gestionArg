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
  IonNavLink,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import { add, close, pencilOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeSupplier, searchSupplier } from "./SupplierApi";
import Supplier from "./Supplier";

const SupplierList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [supplier, setSupplier] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchSupplier();
    setSupplier(result);
  };

  const addSupplier = () => {
    history.push("/page/suppliers/new");
    window.location.reload();
  };

  const edit = (id: string) => {
    history.push("/page/suppliers/" + id);
    window.location.reload();
  };

  const remove = async (id: string) => {
    await removeSupplier(id);
    search();
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
              <IonTitle>Proveedores</IonTitle>
              <IonButton
                onClick={addSupplier}
                color="primary"
                fill="outline"
                slot="end"
              >
                <IonIcon icon={add} />
                Agregar Proveedor
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Direccion</IonCol>
                <IonCol>Web</IonCol>
                <IonCol>Contacto</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {supplier.map((supplier: Supplier) => (
                <IonRow>
                  <IonCol>{supplier.name}</IonCol>
                  <IonCol>{supplier.email}</IonCol>
                  <IonCol>{supplier.phone}</IonCol>
                  <IonCol>{supplier.address}</IonCol>
                  <IonCol>
                    <a href="">{supplier.web}</a>
                  </IonCol>
                  <IonCol>{supplier.contact}</IonCol>

                  <IonCol>
                    <IonButton
                      color="primary"
                      fill="clear"
                      size="small"
                      onClick={() => edit(String(supplier.id))}
                    >
                      <IonIcon icon={pencilOutline} />
                    </IonButton>

                    <IonButton
                      color="danger"
                      fill="clear"
                      size="small"
                      onClick={() => remove(String(supplier.id))}
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

export default SupplierList;

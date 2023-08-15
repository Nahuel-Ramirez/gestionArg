import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import {
  add,
  checkbox,
  checkmark,
  close,
  closeCircleOutline,
  ellipsisHorizontalCircleSharp,
  pencilOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import {
  removeCustomer,
  saveCustomer,
  searchCustomer,
  searchCustomerById,
} from "./CustomerApi";
import Customer from "./Customer";

const CustomerEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    if (id !== "new") {
      let result = searchCustomerById(id);
      setCustomer(result);
    }
  };

  const save = () => {
    saveCustomer(customer);
    history.push("/page/customers");
  };

  const cancel = () => {
    history.push("/page/customers");
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
            <IonTitle>
              {id === "new" ? "Agregar cliente" : "Editar cliente"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (customer.firstname = String(e.detail.value))
                    }
                    label="Nombre"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={customer.firstname}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (customer.lastname = String(e.detail.value))
                    }
                    label="Apellido"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={customer.lastname}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (customer.email = String(e.detail.value))
                    }
                    label="Email"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={customer.email}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (customer.phone = String(e.detail.value))
                    }
                    label="Telefono"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={customer.phone}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (customer.address = String(e.detail.value))
                    }
                    label="Direccion"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={customer.address}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonButton
                    onClick={cancel}
                    color="danger"
                    fill="outline"
                    slot="end"
                  >
                    <IonIcon icon={closeCircleOutline} />
                    Cancelar
                  </IonButton>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonButton
                    onClick={save}
                    color="success"
                    fill="outline"
                    slot="start"
                  >
                    <IonIcon icon={checkmark} />
                    Guardar
                  </IonButton>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;

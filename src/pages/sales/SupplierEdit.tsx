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
  searchSupplier,
  saveSupplier,
  searchSupplierById,
} from "./SupplierApi";
import Supplier from "./Supplier";

const SupplierEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [supplier, setSupplier] = useState<Supplier>({
    id: "",
    name: "",
    email: "",
    web: "",
  });
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    if (id !== "new") {
      let result = await searchSupplierById(id);
      setSupplier(result);
    }
  };

  const save = async () => {
    await saveSupplier(supplier);
    history.push("/page/suppliers");
  };

  const cancel = () => {
    history.push("/page/suppliers");
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
              {id === "new" ? "Agregar proveedor" : "Editar proveedor"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (supplier.name = String(e.detail.value))
                    }
                    label="Nombre"
                    labelPlacement="floating"
                    placeholder="Ingrese aqui..."
                    value={supplier.name}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      supplier.email = String(e.detail.value);
                    }}
                    label="Email"
                    labelPlacement="floating"
                    placeholder="Ingrese aqui..."
                    value={supplier.email}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      supplier.phone = String(e.detail.value);
                    }}
                    label="Telefono"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={supplier.phone}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      supplier.address = String(e.detail.value);
                    }}
                    label="Direccion"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={supplier.address}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      supplier.web = String(e.detail.value);
                    }}
                    label="Web"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={supplier.web}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      supplier.contact = String(e.detail.value);
                    }}
                    label="Contacto"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={supplier.contact}
                  ></IonInput>
                </IonItem>
              </IonCol>
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

export default SupplierEdit;

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
import { searchSale, saveSale, searchSaleById } from "./SalesApi";
import Sales from "../sales/Sales";

const SalesEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [sale, setSale] = useState<Sales>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    if (id !== "new") {
      let result = searchSaleById(id);
      setSale(result);
    }
  };

  const save = () => {
    saveSale(sale);
    history.push("/page/sales");
  };

  const cancel = () => {
    history.push("/page/sales");
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
              {id === "new" ? "Agregar venta" : "Editar venta"}
            </IonTitle>

            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (sale.type = String(e.detail.value).toUpperCase())
                    }
                    label="Tipo de factura"
                    labelPlacement="stacked"
                    placeholder="A, B o C..."
                    value={sale.type}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      if (e.detail.value) {
                        sale.date = new Date(e.detail.value);
                      } else {
                        sale.date = new Date();
                      }
                    }}
                    label="Fecha"
                    labelPlacement="stacked"
                    placeholder={
                      sale.date
                        ? sale.date.toLocaleDateString()
                        : "Seleccione una fecha"
                    }
                    value={sale.date ? sale.date.toLocaleDateString() : ""}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) => {
                      sale.total = Number(e.detail.value);
                    }}
                    label="Total"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    value={sale.total}
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

export default SalesEdit;

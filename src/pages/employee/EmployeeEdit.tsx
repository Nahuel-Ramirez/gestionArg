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
  removeEmployee,
  saveEmployee,
  searchEmployee,
  searchEmployeeById,
} from "./EmployeeApi";
import Swal from "sweetalert2";
import Employee from "./Employee";

const EmployeeEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    if (id !== "new") {
      let result = await searchEmployeeById(id);
      setEmployee(result);
    }
  };

  const save = async () => {
    await saveEmployee(employee);
    history.push("/page/employees");
  };

  const cancel = () => {
    history.push("/page/employees");
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
              {id === "new" ? "Agregar empleado" : "Editar empleado"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.firstName = String(e.detail.value))
                    }
                    label="Nombre"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.firstName}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.lastName = String(e.detail.value))
                    }
                    label="Apellido"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.lastName}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.email = String(e.detail.value))
                    }
                    label="Email"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.email}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.phone = String(e.detail.value))
                    }
                    label="Telefono"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.phone}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.address = String(e.detail.value))
                    }
                    label="Direccion"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.address}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput
                    onIonChange={(e) =>
                      (employee.salary = Number(e.detail.value))
                    }
                    label="Salario"
                    labelPlacement="floating"
                    placeholder="Escriba aqui..."
                    value={employee.salary}
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

export default EmployeeEdit;

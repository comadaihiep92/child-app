//
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonToolbar,
  IonAlert,
  IonLabel,
  IonRouterLink,
  IonInput,
  IonButton,
} from "@ionic/react";
import React from "react";

import "./Login.scss";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="login">
          <IonList className="login__list">
            <IonInput
              type="text"
              className="login__input"
              placeholder="Login ID"
            />
            <IonInput
              type="password"
              className="login__input"
              placeholder="Password"
            />
            <IonButton href="/home" className="login__button" expand="full">
              Login
            </IonButton>
            <IonList className="login__text">
              <IonRouterLink className="login__forgot">
                Forgot password ?
              </IonRouterLink>
            </IonList>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

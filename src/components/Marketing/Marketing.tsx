import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonText,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonTextarea,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonButton,
  IonRouterLink,
  IonProgressBar,
} from "@ionic/react";

import "./Marketing.scss";

import iconBack from "../../images/icon-back.png";
import imgUpload from "../../images/icon-upload.png";
import iconCloud from "../../images/icon-cloudupload.png";
import iconCancel from "../../images/icon-cancel.png";

const Marketing: React.FC = () => {
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">Marketing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="mypicture">
          <IonText className="mypicture__title mypicture__title--bold">
            Send us a message!
          </IonText>
          <IonList className="mypicture__item2">
            <IonText className="mypicture__title">
              How is the app working ?
            </IonText>
            <IonTextarea
              style={{ height: 130 }}
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonList className="mypicture__item2">
            <IonText className="mypicture__title">
              What do you expect from the app ?
            </IonText>
            <IonTextarea
              style={{ height: 130 }}
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonButton className="btn btn--send" style={{ marginTop: 20 }}>
            Submit
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Marketing;

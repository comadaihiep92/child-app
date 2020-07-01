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
  IonSearchbar,
} from "@ionic/react";

import "./SchoolDocuments.scss";

import iconBack from "../../images/icon-back.png";
import iconSearch from "../../images/icon-search.png";
import iconDownload from "../../images/icon-download.png";

const SchoolDocuments: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            School Documents
          </IonTitle>

          <IonButton className="btn btn--search ion-no-padding" slot="end">
            <IonImg className="icon icon--search" src={iconSearch} alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar> */}
        <IonList className="school">
          <IonList className="school__item">
            <IonText className="school__text">School Calendar</IonText>
            <IonLabel className="school__label">New</IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Routine of the day</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">School menu</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">School supplies to buy</IonText>
            <IonLabel className="school__label">New</IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Rule book</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Our documents</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg className="img img--download" src={iconDownload} alt="" />
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SchoolDocuments;

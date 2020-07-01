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
} from "@ionic/react";
import React from "react";
import "./Home.scss";

import iconPicture from "../images/icon-mypicture.png";
import iconMarketing from "../images/icon-marketing.png";
import iconSchool from "../images/icon-document.png";
import iconInfoChild from "../images/icon-infochild.png";
import iconAppointment from "../images/icon-appointment.png";
import iconNotification from "../images/icon-notification.png";
import iconMyprofile from "../images/icon-myprofile.png";
import iconMymessage from "../images/icon-mymessage.png";
import iconMinigroup from "../images/icon-minigroup.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="home">
          <IonHeader className="ion-no-border home__header">
            <IonTitle className="ion-text-center home__title-header">
              Home
            </IonTitle>
            <IonList className="home__noti">
              <IonImg
                className="icon icon--noti"
                src={iconNotification}
                alt=""
              />
              <IonLabel className="home__label">1</IonLabel>
            </IonList>
          </IonHeader>

          <IonList className="home__list">
            <IonRouterLink href="/myprofile" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMyprofile}
                  alt=""
                ></IonImg>
                <IonText className="home__title">My Profile</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/mymessages" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMymessage}
                  alt=""
                ></IonImg>
                <IonText className="home__title">My Messages</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/mypicture" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconPicture}
                  alt=""
                ></IonImg>
                <IonText className="home__title">My Pictures</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/childdailyinfo" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconInfoChild}
                  alt=""
                ></IonImg>
                <IonText className="home__title">
                  Child Daily information
                </IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/schooldocuments" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconSchool}
                  alt=""
                ></IonImg>
                <IonText className="home__title">School Documents</IonText>
              </IonList>
            </IonRouterLink>

            <IonRouterLink href="/appointmentcenter" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconAppointment}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Appointment Center</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/marketing" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMarketing}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Marketing</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="#" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMinigroup}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Mini club</IonText>
              </IonList>
            </IonRouterLink>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

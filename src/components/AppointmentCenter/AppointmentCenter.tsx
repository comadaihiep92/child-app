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
  IonModal,
  IonButton,
  IonLabel,
  IonRouterLink,
  IonTextarea,
  IonInput,
  IonFab,
  IonFabButton,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";

import "./AppointmentCenter.scss";

import iconBack from "../../images/icon-back.png";
import iconClock from "../../images/icon-clock.png";
import img1 from "../../images/img-parent.png";
import img2 from "../../images/img-parent2.png";
import iconClose from "../../images/icon-close.png";
import imgChild from "../../images/img-child.png";

const AppointmentCenter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <IonRouterLink href="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            Appointment Center
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="appointment__list">
          <IonModal isOpen={showModal} cssClass="modal">
            <IonList className="modal__list">
              <IonList className="modal__item ion-no-padding">
                <IonList className="modal__content modal__content--big">
                  <IonText className="appointment__reminder appointment__reminder--big">
                    Appointment reminder
                  </IonText>
                </IonList>
              </IonList>
              <IonList className="modal__item ">
                <IonList className="modal__content ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonList className="appointment__times ion-no-padding">
                    <IonImg
                      className="icon icon--clock"
                      src={iconClock}
                      alt=""
                    />
                    <IonText className="appointment__date">
                      Friday: at 4 pm
                    </IonText>
                  </IonList>
                </IonList>
                <IonButton className="btn-modal btn-modal--booked">
                  Booked
                </IonButton>
              </IonList>
              <IonList className="modal__item ">
                <IonList className="modal__content ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonList className="appointment__times ion-no-padding">
                    <IonImg
                      className="icon icon--clock"
                      src={iconClock}
                      alt=""
                    />
                    <IonText className="appointment__date">
                      Friday: at 4 pm
                    </IonText>
                  </IonList>
                </IonList>
                <IonButton className="btn-modal btn-modal--unbook">
                  Booked
                </IonButton>
              </IonList>
              <IonList className="modal__item ">
                <IonList className="modal__content ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonList className="appointment__times ion-no-padding">
                    <IonImg
                      className="icon icon--clock"
                      src={iconClock}
                      alt=""
                    />
                    <IonText className="appointment__date">
                      Friday: at 4 pm
                    </IonText>
                  </IonList>
                </IonList>
                <IonButton className="btn-modal btn-modal--unbook">
                  Booked
                </IonButton>
              </IonList>
              <IonList className="modal__item ">
                <IonList className="modal__content ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonList className="appointment__times ion-no-padding">
                    <IonImg
                      className="icon icon--clock"
                      src={iconClock}
                      alt=""
                    />
                    <IonText className="appointment__date">
                      Friday: at 4 pm
                    </IonText>
                  </IonList>
                </IonList>
                <IonButton className="btn-modal btn-modal--unbook">
                  Booked
                </IonButton>
              </IonList>

              <IonButton expand="full" className="btn-modal btn-modal--cofirm">
                Cofirm
              </IonButton>
            </IonList>
            <IonFab
              className="modal__close"
              vertical="top"
              horizontal="end"
              slot="fixed"
            >
              <IonFabButton
                className="btn-modal btn-modal--close"
                onClick={() => setShowModal(false)}
              >
                <IonImg className="icon icon--close" src={iconClose} alt="" />
              </IonFabButton>
            </IonFab>
          </IonModal>

          <IonList className="appointment__item ion-no-padding">
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--pending">
                    Pending
                  </IonText>
                </IonList>

                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__date">
                    Friday: at 4 pm
                  </IonText>
                  <IonText className="appointment__date">2 day later</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__date">Wednesday</IonText>
                  <IonText className="appointment__date">2 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__date">Thursday</IonText>
                  <IonText className="appointment__date">10 days ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__date">Monday</IonText>
                  <IonText className="appointment__date">17 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child ion-no-padding">
                  <IonText className="appointment__date">Wednesday</IonText>
                  <IonText className="appointment__date">23 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AppointmentCenter;

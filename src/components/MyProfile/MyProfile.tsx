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
  IonAvatar,
  IonFab,
  IonFabButton,
  IonDatetime,
} from "@ionic/react";

import "./MyProfile.scss";

import iconBackBlack from "../../images/icon-back-black.png";
import imgUpload from "../../images/icon-upload.png";
import iconCloud from "../../images/icon-cloudupload.png";
import iconCancel from "../../images/icon-cancel.png";
import imgAvata from "../../images/img-avata.png";
import iconCamera from "../../images/icon-camera.png";
import iconEdit from "../../images/icon-edit.png";

const MyProfile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <div className="myprofile">
          <IonHeader className="myprofile__header ion-no-border">
            <IonToolbar className="myprofile__toolbar">
              <IonButtons slot="start">
                <Link to="/home">
                  <IonImg
                    className="icon icon-back"
                    src={iconBackBlack}
                    alt=""
                  />
                </Link>
              </IonButtons>

              <IonTitle className="myprofile__title-header">
                My Profile
              </IonTitle>

              <IonButton className="btn btn--search ion-no-padding" slot="end">
                {/* <IonImg className="icon icon--search" src={iconSearch} alt="" /> */}
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonList className="myprofile__avata-box ion-no-padding">
            <IonFab
              className="modal__capture"
              vertical="top"
              horizontal="end"
              slot="fixed"
            >
              <IonFabButton
                className="btn-modal btn-modal--close"
                onClick={() => setShowModal(false)}
              >
                <IonImg className="icon icon--close" src={iconCamera} alt="" />
              </IonFabButton>
            </IonFab>
            <IonAvatar className="myprofile__avata">
              <IonImg src={imgAvata} alt="" />
            </IonAvatar>
          </IonList>
          <IonFab
            className="modal__edit"
            vertical="top"
            horizontal="end"
            slot="fixed"
          >
            <IonFabButton
              className="btn-modal btn-modal--close"
              onClick={() => setShowModal(false)}
            >
              <IonImg className="icon icon--close" src={iconEdit} alt="" />
            </IonFabButton>
          </IonFab>
        </div>
        <IonList className="myprofile__content">
          <IonList className="myprofile__item ion-no-padding">
            <IonText className="myprofile__title-top">
              Basic information
            </IonText>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Fisrt name of child{" "}
                </IonLabel>
                <IonInput
                  type="text"
                  value="Ali"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Last name of child{" "}
                </IonLabel>
                <IonInput
                  type="text"
                  value="Ahmed"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">Date of birth</IonLabel>
                <IonDatetime
                  displayFormat="DD/MM/YYYY"
                  placeholder="20/11/2020"
                  className="myprofile__input"
                ></IonDatetime>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">Gender</IonLabel>
                <IonSelect value="Male" className="myprofile__input">
                  <IonSelectOption>Male</IonSelectOption>
                  <IonSelectOption>Female</IonSelectOption>
                </IonSelect>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">Nationality</IonLabel>
                <IonSelect value="Pakistani" className="myprofile__input">
                  <IonSelectOption>Pakistani</IonSelectOption>
                  <IonSelectOption>Vietnam</IonSelectOption>
                </IonSelect>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Name of the class
                </IonLabel>
                <IonSelect value="Bamboo" className="myprofile__input">
                  <IonSelectOption>Bamboo</IonSelectOption>
                  <IonSelectOption>Bamboo 2</IonSelectOption>
                </IonSelect>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-full">
                <IonLabel className="myprofile__label">Address</IonLabel>
                <IonInput
                  type="text"
                  value="3th Capital Street, karachi, Pakistan"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Mother’s first name
                </IonLabel>
                <IonInput
                  type="text"
                  value="Neha"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Mother’s last name
                </IonLabel>
                <IonInput
                  type="text"
                  value="Mahdy"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Mother’s phone number
                </IonLabel>
                <IonInput
                  type="text"
                  value="Neha"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">Mother’s email</IonLabel>
                <IonInput
                  type="text"
                  value="Mahdy"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">
                  Father’s phone number
                </IonLabel>
                <IonInput
                  type="text"
                  value="Neha"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col">
                <IonLabel className="myprofile__label">Father’s email</IonLabel>
                <IonInput
                  type="text"
                  value="Mahdy"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
          </IonList>
          <IonList className="myprofile__item ion-no-padding">
            <IonText className="myprofile__title-top">
              Emergency contact
            </IonText>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amohad"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Email</IonLabel>
                <IonInput
                  type="email"
                  value="ali@gmail.com"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="102 453 7243"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">Name</IonLabel>
                <IonInput
                  type="text"
                  value="Maha"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Email</IonLabel>
                <IonInput
                  type="email"
                  value="maha@gmail.com"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+02 255 3273"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amony"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Email</IonLabel>
                <IonInput
                  type="email"
                  value="amony@gmail.com"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-small">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+04 352 1963"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
          </IonList>
          <IonList className="myprofile__item ion-no-padding">
            <IonText className="myprofile__title-top">
              Pick up authorization person <IonLabel>*</IonLabel>
            </IonText>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">First Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amohad"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Last Name</IonLabel>
                <IonInput
                  type="text"
                  value="Mohamed"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Photo</IonLabel>
                <IonInput type="url" className="myprofile__input">
                  <IonButton className="btn btn--choose">Choose File</IonButton>
                </IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-smaller">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+02 342 654 832"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">First Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amohad"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Last Name</IonLabel>
                <IonInput
                  type="text"
                  value="Mohamed"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Photo</IonLabel>
                <IonInput type="url" className="myprofile__input">
                  <IonButton className="btn btn--choose">Choose File</IonButton>
                </IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-smaller">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+02 342 654 832"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">First Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amohad"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Last Name</IonLabel>
                <IonInput
                  type="text"
                  value="Mohamed"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Photo</IonLabel>
                <IonInput type="url" className="myprofile__input">
                  <IonButton className="btn btn--choose">Choose File</IonButton>
                </IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-smaller">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+02 342 654 832"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">First Name</IonLabel>
                <IonInput
                  type="text"
                  value="Amohad"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Last Name</IonLabel>
                <IonInput
                  type="text"
                  value="Mohamed"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
              <IonList className="myprofile__col myprofile__col-smaller">
                <IonLabel className="myprofile__label">Photo</IonLabel>
                <IonInput type="url" className="myprofile__input">
                  <IonButton className="btn btn--choose">Choose File</IonButton>
                </IonInput>
              </IonList>
              <IonList className="myprofile__col  myprofile__col-smaller">
                <IonLabel className="myprofile__label">Phone</IonLabel>
                <IonInput
                  type="tel"
                  value="+02 342 654 832"
                  className="myprofile__input"
                ></IonInput>
              </IonList>
            </IonList>
          </IonList>
          <IonList className="myprofile__item ion-no-padding">
            <IonText className="myprofile__title-top">
              Pick up authorization person <IonLabel>*</IonLabel>
            </IonText>
            <IonList className="myprofile__row">
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">Allergies</IonLabel>
                <IonTextarea
                  placeholder="Write Comment"
                  value=""
                  className="myprofile__input"
                ></IonTextarea>
              </IonList>
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">
                  Food restrictions
                </IonLabel>
                <IonTextarea
                  placeholder="Write Comment"
                  value=""
                  className="myprofile__input"
                ></IonTextarea>
              </IonList>
              <IonList className="myprofile__col myprofile__col-small">
                <IonLabel className="myprofile__label">
                  Any health issues ?
                </IonLabel>
                <IonTextarea
                  placeholder="Write Comment"
                  value=""
                  className="myprofile__input"
                ></IonTextarea>
              </IonList>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MyProfile;

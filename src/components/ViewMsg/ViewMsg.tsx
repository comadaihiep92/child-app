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
  IonPopover,
} from "@ionic/react";

import "./ViewMsg.scss";

import iconBack from "../../images/icon-back.png";
import iconDelete from "../../images/icon-delete.png";
import iconPopover from "../../images/icon-dot.png";
import iconPopoverBlack from "../../images/icon-dot-black.png";
import imgAvataa from "../../images/img-avataa.png";
import iconStar from "../../images/icon-star.png";
import iconReply from "../../images/icon-reply.png";

const ViewMsg: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            {/* <IonRouterLink routerDirection="forward" href="/mymessages">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </IonRouterLink> */}
            <Link to="/mymessages">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonButton className="btn btn--search ion-no-padding" slot="end">
            <IonImg className="icon icon--delete" src={iconDelete} alt="" />
          </IonButton>

          <IonPopover
            isOpen={showPopover}
            cssClass="abc"
            onDidDismiss={(e) => setShowPopover(false)}
          >
            <IonText>abc</IonText>
          </IonPopover>
          <IonButton
            className="btn btn--popover ion-no-padding"
            slot="end"
            // onClick={() => setShowPopover(true)}
          >
            <IonImg className="icon icon--popover" src={iconPopover} alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="viewMsg">
          <IonList className="viewMsg__header">
            <IonText className="viewMsg__title">Message 1</IonText>
            <IonImg className="icon icon--star" src={iconStar} alt="" />
          </IonList>

          <IonList className="viewMsg__mail">
            <IonAvatar className="messages__avata">
              <IonImg className="img img--avataa" src={imgAvataa} />
            </IonAvatar>
            <IonList className="viewMsg__info">
              <IonList className="viewMsg__info-mail">
                <IonText className="viewMsg__email">
                  Adminstration@gmail.com
                </IonText>
                <IonLabel className="viewMsg__to">to me</IonLabel>
                <IonLabel className="messages__time">8:50 PM</IonLabel>
              </IonList>
              <IonList className="viewMsg__action">
                <IonButton
                  className="btn btn--search ion-no-padding"
                  slot="end"
                >
                  <IonImg
                    className="icon icon--delete"
                    src={iconReply}
                    alt=""
                  />
                </IonButton>
                <IonPopover
                  isOpen={showPopover}
                  cssClass="abc"
                  onDidDismiss={(e) => setShowPopover(false)}
                >
                  <IonText>abc</IonText>
                </IonPopover>
                <IonButton
                  className="btn btn--popover ion-no-padding"
                  slot="end"
                  // onClick={() => setShowPopover(true)}
                >
                  <IonImg
                    className="icon icon--popover"
                    src={iconPopoverBlack}
                    alt=""
                  />
                </IonButton>
              </IonList>
            </IonList>
          </IonList>
          <IonList className="viewMsg__content">
            <IonText className="viewMsg__bold ">Hi Ay,</IonText>
            <IonText className="viewMsg__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </IonText>
            <IonText>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic{" "}
            </IonText>
            <IonText className="viewMsg__text">
              typesetting, remaining essentially unchanged.{" "}
            </IonText>
            <IonText className="viewMsg__text">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </IonText>
            <IonText className="viewMsg__bold ">Thanks</IonText>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ViewMsg;

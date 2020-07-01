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
} from "@ionic/react";

import "./ChildDailyInfo.scss";

import iconBack from "../../images/icon-back.png";
import iconSelected from "../../images/icon-selected.png";
import imgSandwitch from "../../images/img-sandwitch.png";
import imgBanana from "../../images/img-banana.png";
import imgApple from "../../images/img-apple.png";
import imgMangojuice from "../../images/img-mangojuice.png";

const ChildDailyInfo: React.FC = () => {
  const [eat, setEat] = useState("1 Times");
  const [week, setWeek] = useState(["Week 1"]);
  const [day, setDay] = useState(["Monday"]);
  const [menu, setMenu] = useState("");

  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            Child Daily Information
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="childDaily">
          <IonList className="childDaily__list">
            <IonText className="childDaily__title">How often to eat</IonText>
            <IonRadioGroup
              value={eat}
              onIonChange={(e) => setEat(e.detail.value)}
            >
              <IonList className="childDaily__radio ">
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="0 Times"
                  ></IonRadio>

                  {eat === "0 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        0 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">0 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="1 Times"
                  ></IonRadio>
                  {eat === "1 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        1 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">1 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="2 Times"
                  ></IonRadio>
                  {eat === "2 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        2 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">2 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="3 Times"
                  ></IonRadio>
                  {eat === "3 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        3 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">3 Times</IonLabel>
                    </>
                  )}
                </IonItem>
              </IonList>
            </IonRadioGroup>
            <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign">- Ahmed Mohsen</IonLabel>
            </IonList>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">The menu of the day</IonText>
            <IonList className="childDaily__list-day ion-no-padding">
              <IonSelect
                className="list-day__item"
                value={week}
                onIonChange={(e) => setWeek(e.detail.value)}
              >
                <IonSelectOption value="Week 1">Week 1</IonSelectOption>
                <IonSelectOption value="Week 2">Week 2</IonSelectOption>
                <IonSelectOption value="Week 3">Week 3</IonSelectOption>
                <IonSelectOption value="Week 4">Week 4</IonSelectOption>
              </IonSelect>

              <IonSelect
                className="list-day__item"
                value={day}
                onIonChange={(e) => setDay(e.detail.value)}
              >
                <IonSelectOption value="Monday">Monday</IonSelectOption>
                <IonSelectOption value="Tuesday">Tuesday</IonSelectOption>
                <IonSelectOption value="Wednesday">Wednesday</IonSelectOption>
                <IonSelectOption value="Thursday">Thursday</IonSelectOption>
                <IonSelectOption value="Friday">Friday</IonSelectOption>
                <IonSelectOption value="Saturday">Saturday</IonSelectOption>
                <IonSelectOption value="Sunday">Sunday</IonSelectOption>
              </IonSelect>
            </IonList>
            <IonRadioGroup
              value={menu}
              onIonChange={(e) => setMenu(e.detail.value)}
            >
              <IonList className="childDaily__radio childDaily__radio--big ion-no-padding">
                <IonItem lines="none" className="childDaily__radio-item">
                  <IonRadio
                    className="childDaily__rdo"
                    value="Cheese Sandwitch"
                  ></IonRadio>
                  {menu === "Cheese Sandwitch" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        <IonImg
                          className="img img--fruit"
                          src={imgSandwitch}
                          alt=""
                        />
                        Cheese Sandwitch
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">
                        Cheese Sandwitch
                      </IonLabel>
                    </>
                  )}
                </IonItem>

                {/* <IonList className="childDaily__radio-item childDaily__radio-height">
                  <IonLabel className="childDaily__label">
                    <IonImg
                      className="img img--fruit"
                      src={imgSandwitch}
                      alt=""
                    />
                    Cheese Sandwitch
                  </IonLabel>
                  <IonRadio className="childDaily__rdo"></IonRadio>
                </IonList>

                <IonList className="childDaily__radio-item childDaily__radio-height">
                  <IonImg className="img img--fruit" src={imgBanana} alt="" />
                  <IonLabel className="childDaily__label">Banana</IonLabel>
                  <IonRadio className="childDaily__rdo"></IonRadio>
                </IonList>
                <IonList className="childDaily__radio-item childDaily__radio-height">
                  <IonImg className="img img--fruit" src={imgApple} alt="" />
                  <IonLabel className="childDaily__label">Apple</IonLabel>
                  <IonRadio className="childDaily__rdo"></IonRadio>
                </IonList>
                <IonList className="childDaily__radio-item childDaily__radio-height">
                  <IonImg
                    className="img img--fruit"
                    src={imgMangojuice}
                    alt=""
                  />
                  <IonLabel className="childDaily__label">Mango Juice</IonLabel>
                  <IonRadio className="childDaily__rdo"></IonRadio>
                </IonList> */}
              </IonList>
            </IonRadioGroup>
            <IonTextarea
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Nap time:</IonText>
            <IonList className="childDaily__radio ion-no-padding">
              <IonItem lines="none" className="childDaily__input">
                <IonLabel position="floating" className="label label--blue">
                  Duration
                </IonLabel>
                <IonInput
                  type="number"
                  placeholder="Select"
                  value=""
                ></IonInput>
              </IonItem>
              <IonItem
                lines="none"
                className="childDaily__input ion-margin-start"
              >
                <IonLabel position="floating" className="label label--blue">
                  Time the child slept
                </IonLabel>
                <IonInput
                  type="number"
                  placeholder="Select time"
                  value=""
                ></IonInput>
              </IonItem>
            </IonList>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Bowel movement:</IonText>
            <IonRadioGroup>
              <IonList className="childDaily__radio ion-no-padding">
                <IonList className="childDaily__radio-item">
                  <IonLabel className="childDaily__label">Yes</IonLabel>
                  <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
                </IonList>
                <IonList className="childDaily__radio-item ion-margin-start">
                  <IonLabel className="childDaily__label">No</IonLabel>
                  <IonRadio className="childDaily__rdo" value="no"></IonRadio>
                </IonList>
                <IonItem
                  lines="none"
                  className="childDaily__input ion-margin-start"
                >
                  <IonLabel position="floating" className="label label--blue">
                    How many
                  </IonLabel>
                  <IonInput type="number" value="3"></IonInput>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Record injuries:</IonText>
            <IonRadioGroup>
              <IonList className="childDaily__radio ion-no-padding">
                <IonList className="childDaily__radio-item">
                  <IonLabel className="childDaily__label">Yes</IonLabel>
                  <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
                </IonList>
                <IonList className="childDaily__radio-item ion-margin-start">
                  <IonLabel className="childDaily__label">No</IonLabel>
                  <IonRadio className="childDaily__rdo" value="no"></IonRadio>
                </IonList>
                <IonItem
                  lines="none"
                  className="childDaily__input ion-margin-start"
                >
                  <IonLabel position="floating" className="label label--blue">
                    Where
                  </IonLabel>
                  <IonInput
                    type="number"
                    placeholder="Write here"
                    value=""
                  ></IonInput>
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__input ion-margin-start"
                >
                  <IonLabel position="floating" className="label label--blue">
                    When
                  </IonLabel>
                  <IonInput
                    type="number"
                    placeholder="Select"
                    value=""
                  ></IonInput>
                </IonItem>
              </IonList>
            </IonRadioGroup>
            <IonTextarea
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonButton className="btn btn--send">Send</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChildDailyInfo;

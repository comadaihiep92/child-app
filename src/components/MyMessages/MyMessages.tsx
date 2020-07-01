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
} from "@ionic/react";

import "./MyMessages.scss";

import iconBack from "../../images/icon-back.png";
import iconSearch from "../../images/icon-search.png";
import iconDownload from "../../images/icon-download.png";
import imgAvataa from "../../images/img-avataa.png";
import iconStar from "../../images/icon-star.png";

const MyMessages: React.FC = () => {
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">My Messages</IonTitle>

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
        <IonList className="messages">
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/viewmsg">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvataa} />
              </IonAvatar>
              <IonList className="messages__list-item">
                <IonList className="messages__list-sub">
                  <IonText className="messages__text">
                    Message 1{" "}
                    <IonLabel className="messages__sub">
                      (Adminstration Center)
                    </IonLabel>
                  </IonText>

                  <IonLabel className="messages__time">8:50 PM</IonLabel>
                </IonList>
                <IonList className="messages__list-sub">
                  <IonText className="messages__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </IonText>
                  <IonImg className="icon icon--star" src={iconStar} alt="" />
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MyMessages;

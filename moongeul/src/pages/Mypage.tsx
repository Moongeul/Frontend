import {useState} from "react";
import {IonContent, IonPage} from "@ionic/react";

import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import MyPageHeader from "../components/mypage/MyPageHeader";
import MyPageContent from "../components/mypage/MyPageContent";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";

const Mypage = () => {
    const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(true);

    const logoutModalContent = () => {
        return (
            <div className={"px-1 py-4"}>
                <div className={"text-white title1"}>
                    로그아웃 하시겠습니까?
                </div>
            </div>
        )
    }

    const logoutModalBottomButton = () => {
        return (
            <div className={"flex gap-x-3"}>
                <Button
                    onClick={() => {
                        setIsOpenLogoutModal(false);
                    }}
                    className={"border-lightGray-text-darkGray-bottom-button"}>
                    아니요
                </Button>
                <Button
                    onClick={() => {
                        setIsOpenLogoutModal(false);
                    }}
                    className={"brand-bottom-button"}>
                    예
                </Button>
            </div>
        )
    }

    return (
        <IonPage className="page-mypage">
            <IonContent fullscreen>
                {isOpenLogoutModal &&
                    <Modal
                        content={logoutModalContent}
                        bottomButton={logoutModalBottomButton}
                        setClose={setIsOpenLogoutModal}/>}
                <Header/>
                <MyPageHeader/>
                <div className={"h-[284px]"} />
                <MyPageContent setIsOpenLogoutModal={setIsOpenLogoutModal}/>
                <Navbar/>
            </IonContent>
        </IonPage>
    )
}
export default Mypage;

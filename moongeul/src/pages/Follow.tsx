import {IonContent, IonPage} from "@ionic/react";
import Header from "../components/common/Header";
import {useEffect, useState} from "react";
import FollowMenu from "../components/mypage/FollowMenu";
import FollowerList from "../components/mypage/FollowerList";
import FollowingList from "../components/mypage/FollowingList";
import useFollow from "../lib/hooks/useFollow";

const Follow = () => {
    const [selectedMenu, setSelectedMenu] = useState<"팔로워" | "팔로잉">("팔로워");
    const { followData } = useFollow();

    useEffect(() => {
        console.log("followData", followData)
    }, [followData])

    return (
        <IonPage className={"page-mypage"}>
            <IonContent fullscreen>
                <Header headerType={"dynamic"} title={"유리미"}/>
                <div className={"h-[48px]"} />
                <FollowMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
                {selectedMenu === "팔로워" ? <FollowerList /> : <FollowingList />}
            </IonContent>
        </IonPage>
    )
}
export default Follow;

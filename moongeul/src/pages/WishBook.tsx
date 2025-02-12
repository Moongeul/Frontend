import {IonPage, useIonRouter} from "@ionic/react";
import Header from "../components/common/Header";
import Button from "../components/common/Button";

const WishBook = () => {
    const router = useIonRouter();

    const rightButton = () => {
        return (
            <Button
                className={"brand-bottom-button"}
                secondClassName={"p-4 w-fit"}
                onClick={()=> {
                    router.push("/search")
            }}>
                추가
            </Button>
        )
    }

    return (
        <IonPage>
            <Header headerType={"dynamic"} title={`내가 읽고 싶은 책`} rightElement={rightButton()}/>

        </IonPage>
    )
}
export default WishBook;

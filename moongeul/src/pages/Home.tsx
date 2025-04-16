import { IonPage } from '@ionic/react';
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import HomeMenu from "../components/home/HomeMenu";
import {useState} from "react";

const Home: React.FC = () => {
    const [homeMenuType, setHomeMenuType] = useState<HomeMenuType>("전체");

    return (
      <IonPage className={"bg-backGround"}>
          <Header/>
          <Navbar />
          <HomeMenu homeMenuType={homeMenuType} setHomeMenuType={setHomeMenuType}/>
      </IonPage>
  );
};

export default Home;

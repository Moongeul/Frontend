import { IonPage } from '@ionic/react';
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";

const Home: React.FC = () => {
  return (
      <IonPage>
          <Header headerType={"dynamic"} title={"추천해주세요"}/>
          <Navbar />
      </IonPage>
  );
};

export default Home;

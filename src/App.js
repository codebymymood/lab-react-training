import React from 'react';
// import profileImg from "https://randomuser.me/api/portraits/men/44.jpg";
import './App.css';
import BoxColor from './components/BoxColor';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Random from './components/Random';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import maxence from './assets/images/maxence.png';
import glasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import woman1 from './assets/images/woman1.jpg';
import woman2 from './assets/images/woman2.jpg';
import man1 from './assets/images/man1.jpg';
import man2 from './assets/images/men2.jpg';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <IdCard
          lastName={'Doe '}
          firstName={'John '}
          gender={'male '}
          height={178 }
          birth={new Date(" 1992-07-14")}
          picture={"https://randomuser.me/api/portraits/men/44.jpg"}
        />
        <IdCard
          lastName={'Delores '} 
          firstName={'Obrien '}
          gender={'female'}
          height={172 }
          birth={new Date(" 1988-05-11")}
          picture={"https://randomuser.me/api/portraits/women/44.jpg"}
        />
        <Greetings lang={'de'}>
          {' Ludwig'}
        </Greetings>
        <Greetings lang={'en'}>
           {' Nicholas'}
        </Greetings>
        <Greetings lang={'es'}>
          {' Rocío'}
        </Greetings>
        <Greetings lang={'fr'}>
          {' François'}
        </Greetings>

        <Random
          min={15} max={35}
        />
        <Random
          min={10} max={100}
        />
        <BoxColor
          r={255} g={0} b={0}
         />
          <BoxColor
          r={128} g={255} b={0}
         />

        <CreditCard
          type={"Visa"}
          number={'0123456789018845'}
          expirationMonth={3}
          expirationYear={2021}
          bank={"BNP"}
          owner={"Maxence Bouret"}
          bgColor={"#11aa99"}
          color={"white"} />
        <CreditCard
          type={"Master Card"}
          number={"0123456789010995"}
          expirationMonth={3}
          expirationYear={2021}
          bank={"N26"}
          owner={"Maxence Bouret"}
          bgColor={"#eeeeee"}
          color={"#222222"} />
        <CreditCard
          type={"Visa"}
          number={"0123456789016984"}
          expirationMonth={12}
          expirationYear={2019}
          bank={"Name of the Bank"}
          owner={"Firstname Lastname"}
          bgColor={"#ddbb55"}
          color={"white"} />
     {/* </header>  */}
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <DriverCard
        name="Travis Kalanick"
        rating={<Rating>4.2</Rating>}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={<Rating>4.9</Rating>}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

        <LikeButton initialValue={0} />
        <ClickablePicture 
            img={maxence}
            imgClicked={glasses}
        />
        <Dice />
        <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
        />
        <NumbersTable />
        <Facebook />
    </div>
  );
}

export default App;

import React from 'react';
import Flex1 from './Components/Flex1';
import Flex2 from './Components/Flex2';
import Flex3 from './Components/Flex3';
import Card from './Components/Card';
import Button from './Components/Button';
import Flex4 from './Components/Flex4';
import Header from './Components/Header';
import Flex5 from './Components/Flex5';
import Footer from './Components/Footer';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Flex1 />
    <Flex2 />
    <Flex3 />
    <Card
      number="01"
      number1="02"
      img="./Images/Stories-SinglePost_1-Featured.jpg"
      img1="./Images/Stories-SinglePost_3-Featured.jpg"
      head1="One month of absolute"
      head12="Our 2 week journey"
      head2="tranguility in Thailand."
      head22="travelling around Taiwan."
      content1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ipsa eum facilis velit omnis illum soluta? Eaque, perferendis assumenda! Eos nisi porro, incidunt inventore vel perspiciatis, laudantium, ad deserunt omnis libero asperiores blanditiis dolor fugiat ullam"
    />


    <Card
      number="03"
      number1="04"
      img="./Images/Stories-SinglePost_5-Featured.jpg"
      img1="./Images/Stories-SinglePost_7-Featured.jpg"
      head1="Our 2 week journey"
      head12="One month of backpacking in the"
      head2="Faroe Islands."
      head22="most offbeat places in Peru."
      content1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ipsa eum facilis velit omnis illum soluta? Eaque, perferendis assumenda! Eos nisi porro, incidunt inventore vel perspiciatis, laudantium, ad deserunt omnis libero asperiores blanditiis dolor fugiat ullam" />

    <Button
      name="View all stories." />

    <Header />

    <Flex4
      id="01"
      id1="02"
      tip1="Saving Tips"
      tip2="Travel Gear"
      content1="Must have travel apps"
      content11="for a smoother trip."
      content2="Tips to manage your"
      content22="travel budget."

    />

    <Flex4
      id="03"
      id1="04"
      tip1="Travel Planning"
      tip2="Travel Gear"
      content1="The best luggage for"
      content11="long term travel."
      content2="Airbnbs or hotels?Tips"
      content22="and Tricks."

    />

    <Button
      name="View all Tips" />

    <Flex5/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

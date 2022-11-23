import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Coupon from './components/Coupon';
import Services from './components/Services';
import Lolos from './components/Lolos';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Coupon />
      <Services />
      <Lolos />
      <Schedule />
      <Coupon />
      <Footer />
    </div>
  );
}

export default App;

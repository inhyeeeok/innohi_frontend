import React from 'react';

import SwiperComponents from '../../components/swipers/Swiper';
import test from "../../components/Test";

import { heroElements, cliensElements, clientsElements, joinNewsletterElements } from './MainElements';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  componentDidMount() {
    SwiperComponents();
    test();

  }

  render() {
    return (
      <>
        {heroElements}
        <main id='main'>
          {cliensElements}
          {clientsElements}
          {clientsElements}
          {joinNewsletterElements}
        </main>

      </>
    );
  }
}

export default Main;

import React from 'react';

import { heroElements, cliensElements, clientsElements, joinNewsletterElements } from './MainElements';

import SwiperComponents from '../../components/swipers/Swiper';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  componentDidMount() {
        SwiperComponents();
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

import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { info } from '../../data/dataStore';
import styles from './Info.scss';

const {title, image, content} = info;

const Info = () => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={title} backgroundImage={image} />
      <div>{content}</div>
    </section>
  </Container>
);

export default Info;
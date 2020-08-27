import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faq } from '../../data/dataStore';
import styles from './FAQ.scss';

const {title, image, content} = faq;

const FAQ = () => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={title} backgroundImage={image} />
      <div>{content}</div>
    </section>
  </Container>
);

export default FAQ;
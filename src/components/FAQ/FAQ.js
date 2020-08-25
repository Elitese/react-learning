import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { faq } from '../../data/dataStore';

const {title, image, content} = faq;

const FAQ = () => (
  <Container>
    <Hero titleText={title} backgroundImage={image} />
    <div>{content}</div>
  </Container>
);

FAQ.protoTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  content: PropTypes.node,
};


export default FAQ;
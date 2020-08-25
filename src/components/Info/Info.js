import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { info } from '../../data/dataStore';

const {title, image, content} = info;

const Info = () => (
  <Container>
    <Hero titleText={title} backgroundImage={image} />
    <div>{content}</div>
  </Container>
);

Info.protoTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  content: PropTypes.node,
};

export default Info;
import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Faq = ({title, picture, text})  => (
  <Container>
    <Hero titleText= {title} pictureSrc={picture}/>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.node.isRequired,
  picture: PropTypes.string,
  text: PropTypes.string,
};

Faq.defaultProps = {
  title: settings.Faq.title,
  picture: settings.Faq.picture,
  text: settings.Faq.text,
};

export default Faq;
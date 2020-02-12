import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = ({title, picture, text})  => (
  <Container>
    <Hero titleText= {title} pictureSrc={picture}/>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  picture: PropTypes.string,
  text: PropTypes.string,
};

Info.defaultProps = {
  title: settings.info.title,
  picture: settings.info.picture,
  text: settings.info.text,
};

export default Info; 
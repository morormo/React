import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    toHome: PropTypes.string,
    toInfo: PropTypes.string,
    toFAQ: PropTypes.string,
    classNameActive: PropTypes.string,
  }
  static defaultProps = {
    icon: settings.menu.icon,
    toHome: settings.menu.toHome,
    toInfo: settings.menu.toInfo,
    toFAQ: settings.menu.toFAQ,
    classNameActive: settings.menu.classNameActive,
  }
  render(){
    const {icon, toHome, toInfo, toFAQ, classNameActive} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wraper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon}/>
            </Link>
            <nav>
              <NavLink exact to={toHome} activeClassName={classNameActive}>Home</NavLink>
              <NavLink exact to={toInfo} activeClassName={classNameActive}>Info</NavLink>
              <NavLink exact to={toFAQ} activeClassName={classNameActive}>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
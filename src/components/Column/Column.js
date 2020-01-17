import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state  = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    name: PropTypes.node,
}

  static defaultProps = {
    description: settings.defaultColumnIcon
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}

          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          <div className={styles.cards}>
            {this.state.cards.map(({key, ...cardsProps}) => (
              <Card key={key} {...cardsProps} />
            ))}
          </div>
        </h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}




export default Column;

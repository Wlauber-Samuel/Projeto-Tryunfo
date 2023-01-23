import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class RenderCard extends Component {
  render() {
    const {
      savedCard,
      deleteCards,
      nameFilter,
    } = this.props;

    const nameLowerCase = nameFilter.toLowerCase();
    console.log(nameFilter);
    return (
      <div>
        { savedCard.filter(({ cardName }) => cardName.toLowerCase()
          .includes(nameLowerCase))
          .map((card, index) => (
            <div key={ index }>
              <Card { ...card } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => deleteCards(index) }
              >
                Excluir
              </button>
            </div>
          )) }
      </div>
    );
  }
}

RenderCard.propTypes = {
  deleteCards: PropTypes.func,
  savedCard: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

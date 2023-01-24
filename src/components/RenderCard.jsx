import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class RenderCard extends Component {
  render() {
    const {
      savedCard,
      deleteCards,
      nameFilter,
      filterRare,
      filterTrunfo,
    } = this.props;

    const nameLowerCase = nameFilter.toLowerCase();
    console.log(nameFilter);
    return (
      <div>
        { savedCard.filter(({ cardName }) => cardName.toLowerCase()
          .includes(nameLowerCase))
          .filter((card) => (filterRare === 'todas'
            ? card : card.cardRare === filterRare))
          .filter((card) => (filterTrunfo === true ? card.cardTrunfo : card))
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

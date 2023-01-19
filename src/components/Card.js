import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div>
        <p
          data-testid="name-card"
          className="previewName-card"
        >
          { cardName }
        </p>

        <p
          data-testid="description-card"
          className="previewDescription-card"
        >
          { cardDescription }
        </p>

        <p
          data-testid="attr1-card"
          className="previewAttr1-card"
        >
          { cardAttr1 }
        </p>

        <p
          data-testid="attr2-card"
          className="previewAttr2-card"
        >
          { cardAttr2 }
        </p>

        <p
          data-testid="attr3-card"
          className="previewAttr3-card"
        >
          { cardAttr3 }
        </p>

        <img
          src={ cardImage }
          data-testid="image-card"
          alt={ cardImage.name }
          className="previewImage-card"
        />

        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;

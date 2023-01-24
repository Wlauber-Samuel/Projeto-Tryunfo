import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RenderCard from './components/RenderCard';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    savedCard: [],
    nameFilter: '',
    filterRare: 'todas',
    filterTrunfo: false,
    hasTrunfo: false,
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [name]: value });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
    this.setState((prev) => ({
      savedCard: [
        ...prev.savedCard,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  };

  deleteCards = (index) => {
    const {
      savedCard,
    } = this.state;
    const card = { ...savedCard[index] };
    savedCard.splice(index, 1);
    this.setState((prevState) => {
      this.setState({
        savedCard,
        hasTrunfo: card.cardTrunfo ? false : prevState.hasTrunfo,
      });
    });
  };

  forms = () => {
    const max = 90;
    const min = 0;
    const maxsum = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const name = cardName !== '';
    const img = cardImage !== '';
    const description = cardDescription !== '';
    const attr1 = Number(cardAttr1) >= min && Number(cardAttr1) <= max;
    const attr2 = Number(cardAttr2) >= min && Number(cardAttr2) <= max;
    const attr3 = Number(cardAttr3) >= min && Number(cardAttr3) <= max;

    const totalSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxsum;
    return !(name && img && description && attr1 && attr2 && attr3 && totalSum);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      filterTrunfo,
      hasTrunfo,
    } = this.state;

    console.log(cardTrunfo);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ this.forms() }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <input
          type="text"
          data-testid="name-filter"
          name="nameFilter"
          onChange={ this.onInputChange }
          disabled={ filterTrunfo }

        />

        <select
          data-testid="rare-filter"
          id="card-rare"
          name="filterRare"
          onChange={ this.onInputChange }
          disabled={ filterTrunfo }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <label htmlFor="super-trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="super-trunfo"
            checked={ filterTrunfo }
            name="filterTrunfo"
            onChange={ this.onInputChange }
          />
        </label>

        <RenderCard
          { ...this.state }
          deleteCards={ this.deleteCards }
        />
      </div>
    );
  }
}

export default App;

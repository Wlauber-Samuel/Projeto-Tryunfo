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

    // if (cardTrunfo) {
    //   this.setState({
    //     hasTrunfo: true,
    //     cardTrunfo: false,
    //   });
    // }
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
    savedCard.splice(index, 1);
    this.setState({ savedCard });
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

    const name = cardName === '';
    const img = cardImage === '';
    const description = cardDescription === '';
    const attr1 = Number(cardAttr1) < max || Number(cardAttr1) > min;
    const attr2 = Number(cardAttr2) < max || Number(cardAttr2) > min;
    const attr3 = Number(cardAttr3) < max || Number(cardAttr3) > min;
    const totalSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxsum;
    return !(name || img || description || attr1 || attr2 || attr3 || totalSum);
  };

  hasTrunfo = () => {
    const { savedCard } = this.state;
    return savedCard.filter(({ cardTrunfo }) => cardTrunfo === true).length > 0;
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
      savedCard,
    } = this.state;

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
          hasTrunfo={ this.hasTrunfo() }

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
        <RenderCard
          savedCard={ savedCard }
          deleteCards={ this.deleteCards }
        />
      </div>
    );
  }
}

export default App;

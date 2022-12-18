import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h1>ADICIONE UMA CARTA</h1>
        <input
          type="text"
          data-testid="name-input"
          id="name-input"
          value={ cardName }
          onChange={ onInputChange }
          placeholder="Nome do Celular:"
        />

        <br />
        <input
          type="textarea"
          data-testid="description-input"
          id="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          placeholder="Descrição do Aparelho:"
        />

        <br />
        <input
          type="Number"
          data-testid="attr1-input"
          id="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          placeholder="Armazenamento:"
        />

        <br />
        <input
          type="Number"
          data-testid="attr2-input"
          id="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          placeholder="Câmera:"
        />

        <br />
        <input
          type="Number"
          data-testid="attr3-input"
          id="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          placeholder="Tamanho da Tela:"
        />

        <br />
        <input
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          placeholder="Adicione uma imagem"
        />

        <br />
        <select
          data-testid="rare-input"
          id="card-rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="checkbox-super-trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          placeholder="rare"
        />

        <button
          type="button"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
};

export default Form;
//modificação
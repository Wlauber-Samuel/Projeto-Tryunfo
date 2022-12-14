import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>ADICIONE UMA CARTA</h1>
        <input
          type="text"
          data-testid="name-input"
          placeholder="name:"
        />

        <br />
        <input
          type="textarea"
          data-testid="description-input"
          placeholder="descrption:"
        />

        <br />
        <input
          type="Number"
          data-testid="attr1-input"
          placeholder="attr-1"
        />

        <br />
        <input
          type="Number"
          data-testid="attr2-input"
          placeholder="attr-2"
        />

        <br />
        <input
          type="Number"
          data-testid="attr3-input"
          placeholder="attr-3"
        />

        <br />
        <input
          type="text"
          data-testid="image-input"
          placeholder="image"
        />

        <br />
        <select
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          placeholder="rare"
        />

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </div>
    );
  }
}

export default Form;

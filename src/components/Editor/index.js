import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Editor = props => {
  return (
    <Fragment>
      <form className="form__editor" action="/" method="post" id="editor">
        <label htmlFor="form__date">Fecha 
          <input type="date" id="form__date" name="form__date" />
        </label>
        <p className="form__face">Estado</p>
        <label htmlFor="form__happy-face">
          <input type="radio" id="form__happy-face" name="form__happy-face" />
        </label>
        <label htmlFor="form__unhappy-face">
          <input type="radio" id="form__unhappy-face" name="form__unhappy-face" />
        </label>
        <label htmlFor="form__text">Mensaje
          <input type="text" id="form__text" name="form__text" placeholder="¿Por qué es un buen día?"/>
        </label>
        <label htmlFor="form__save">
          <Link to="/">
          <input type="submit" id="form__save" name="form__save" value="Enviar" />
          </Link>
        </label>
        <label htmlFor="form__reset">
          <input type="reset" id="form__reset" name="form__reset" value="Cancelar" />
        </label>
      </form>
    </Fragment>
  );
};

export default Editor;
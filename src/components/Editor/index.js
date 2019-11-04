import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Editor = props => {
  const {getInfoDate,getInfoMood,getinfoMessage,getLocalStorage,dates,repeat} = props;
  return (
    <Fragment>
      <form className="form__editor" action="/" method="post" id="editor">
        <label htmlFor="form__date">Fecha 
          <input type="date" id="form__date" name="form__date" onChange={getInfoDate}/>
        </label>
        <p className="form__face">Estado</p>
        <label htmlFor="form__happy-face">
          <input type="radio" id="form__happy-face" name="form__happy-face" value=":)" onClick={getInfoMood}/>:)
        </label>
        <label htmlFor="form__unhappy-face">
          <input type="radio" id="form__unhappy-face" name="form__unhappy-face" value=":("  
          onClick={getInfoMood}/>:(
        </label>
        <label htmlFor="form__text">Mensaje
          <input type="text" id="form__text" name="form__text" placeholder="¿Por qué es un buen día?" onChange={getinfoMessage}/>
        </label>
        <label htmlFor="form__save">
          <Link to="/">
          <input type="submit" id="form__save" name="form__save" value="Enviar" onClick = {getLocalStorage} 
          // disabled={dates !== '' ? '' : 'disabled'}
          />
          </Link>
        </label>
        <label htmlFor="form__reset">
        <Link to="/">
          <input type="reset" id="form__reset" name="form__reset" value="Cancelar" />
        </Link>
        </label>
      </form>
    </Fragment>
  );
};

export default Editor;
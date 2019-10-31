import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Calendar = props => {
  return (
    <Fragment>
      <header className="header__button">
      <Link to={`/editor/:id`} className="editor-link">
        <button className="button__add-face">
          +
        </button>
      </Link>
      </header>
          
      <div className="day__list-container">
        <ul className="day__list">
          <li className="day__list-elements"></li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Calendar;
import React from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '../../assets/images/icon-check.svg';

import './styles.scss';

function Check({ isCompleted }) {
  return (
    <div className={['check', isCompleted && 'check--active'].join(' ')}>
      { isCompleted && <img className="check__img" src={CheckIcon} alt="Check Icon Todo App" /> }
    </div>
  );
}

Check.defaultProps = {
  isCompleted: false,
};

Check.propTypes = {
  isCompleted: PropTypes.bool,
};

export default Check;

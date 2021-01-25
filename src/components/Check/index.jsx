import React from 'react';
import PropTypes from 'prop-types';

import { CheckIcon } from '../Icons';

import './styles.scss';

function Check({ isCompleted }) {
  return (
    <div className={['check', isCompleted && 'check--active'].join(' ')}>
      { isCompleted && <CheckIcon className="check__img" /> }
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

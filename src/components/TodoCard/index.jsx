import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// React Redux
import { connect } from 'react-redux';
import getTodos from '../../redux/selector';
import {
  addTodo,
  setFilter,
  clearCompletedTodo,
} from '../../redux/actions';

// components
import Check from '../Check';

// filter types
import {
  ACTIVE_TODO,
  ALL_TODO,
  COMPLETED_TODO,
} from '../../redux/filterTypes';

import './styles.scss';
import SortableLists from './SortableLists';

function TodoCard({
  dispatchAddTodo,
  dispatchClearCompletedTodo,
  dispatchSetFilter,
  filter,
  todos,
}) {
  const newTodo = useRef(null);
  const addNewTodo = (e) => {
    e.preventDefault();
    dispatchAddTodo(newTodo.current.value);
    newTodo.current.value = '';
  };

  const ListFilter = () => (
    <>
      <button
        className={[
          'list__action',
          filter === ALL_TODO ? 'list__action--active' : '',
        ].join(' ')}
        onClick={() => dispatchSetFilter(ALL_TODO)}
        type="button"
      >
        All
      </button>
      <button
        className={[
          'list__action',
          filter === ACTIVE_TODO ? 'list__action--active' : '',
        ].join(' ')}
        onClick={() => dispatchSetFilter(ACTIVE_TODO)}
        type="button"
      >
        Active
      </button>
      <button
        className={[
          'list__action',
          filter === COMPLETED_TODO ? 'list__action--active' : '',
        ].join(' ')}
        onClick={() => dispatchSetFilter(COMPLETED_TODO)}
        type="button"
      >
        Completed
      </button>
    </>
  );

  return (
    <>
      <label htmlFor="input" className="form">
        <Check />
        <form className="form__group" onSubmit={addNewTodo}>
          <input
            id="input"
            className="form__input"
            type="text"
            placeholder="Create a new todo..."
            ref={newTodo}
          />
        </form>
      </label>
      <div className="list noselect">
        <SortableLists />
        <div className="list__footer">
          <span>{ todos.length } item left</span>
          <div className="list__filter">
            <ListFilter />
          </div>
          <button
            className="list__action"
            onClick={dispatchClearCompletedTodo}
            type="button"
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className="list">
        <div className="list__mobile-filter">
          <ListFilter />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ todos }) => ({
  filter: todos.filter,
  todos: getTodos(todos),
});

TodoCard.propTypes = {
  dispatchAddTodo: PropTypes.func.isRequired,
  dispatchClearCompletedTodo: PropTypes.func.isRequired,
  dispatchSetFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchClearCompletedTodo: clearCompletedTodo,
    dispatchSetFilter: setFilter,
  },
)(TodoCard);

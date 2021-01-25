import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// React Redux
import { connect } from 'react-redux';
import getTodos from '../../redux/selector';
import {
  addTodo, toggleTodo, deleteTodo, setFilter, clearCompletedTodo,
} from '../../redux/actions';
import { ACTIVE_TODO, ALL_TODO, COMPLETED_TODO } from '../../redux/filterTypes';

// Components
import Check from '../Check';

import { CloseIcon } from '../Icons';

import './styles.scss';

function TodoCard({
  dispatchAddTodo,
  dispatchToggleTodo,
  dispatchDeleteTodo,
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
      <div className="list">
        {
          todos.map(({ content, isCompleted, id }) => (
            <div className="list__item" key={id}>
              <div>
                <button
                  className="list__item__check"
                  onClick={() => dispatchToggleTodo(id)}
                  type="button"
                >
                  <Check isCompleted={isCompleted} />
                </button>
                <button
                  className={[
                    'list__item__name',
                    isCompleted ? 'list__item__name--completed' : '',
                  ].join(' ')}
                  onClick={() => dispatchToggleTodo(id)}
                  type="button"
                >
                  { content }
                </button>
              </div>

              <div className="remove">
                <button
                  className="remove__btn"
                  onClick={() => dispatchDeleteTodo(id)}
                  type="button"
                >
                  <CloseIcon className="remove__icon" />
                </button>
              </div>
            </div>
          ))
        }
        <div className="list__footer">
          <span>5 item left</span>
          <div>
            <button
              className={[
                'list__action list__filter',
                filter === ALL_TODO ? 'list__filter--active' : '',
              ].join(' ')}
              onClick={() => dispatchSetFilter(ALL_TODO)}
              type="button"
            >
              All
            </button>
            <button
              className={[
                'list__action list__filter',
                filter === ACTIVE_TODO ? 'list__filter--active' : '',
              ].join(' ')}
              onClick={() => dispatchSetFilter(ACTIVE_TODO)}
              type="button"
            >
              Active
            </button>
            <button
              className={[
                'list__action list__filter',
                filter === COMPLETED_TODO ? 'list__filter--active' : '',
              ].join(' ')}
              onClick={() => dispatchSetFilter(COMPLETED_TODO)}
              type="button"
            >
              Completed
            </button>
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
    </>
  );
}

const mapStateToProps = ({ todos }) => ({
  todos: getTodos(todos),
  filter: todos.filter,
});

TodoCard.propTypes = {
  dispatchAddTodo: PropTypes.func.isRequired,
  dispatchToggleTodo: PropTypes.func.isRequired,
  dispatchDeleteTodo: PropTypes.func.isRequired,
  dispatchClearCompletedTodo: PropTypes.func.isRequired,
  dispatchSetFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchToggleTodo: toggleTodo,
    dispatchDeleteTodo: deleteTodo,
    dispatchClearCompletedTodo: clearCompletedTodo,
    dispatchSetFilter: setFilter,
  },
)(TodoCard);

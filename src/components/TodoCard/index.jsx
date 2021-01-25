import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTodos from '../../redux/selector';
import { addTodo, toggleTodo, setFilter } from '../../redux/actions';
import { ACTIVE_TODO, ALL_TODO, COMPLETED_TODO } from '../../redux/filterTypes';

import { CloseIcon } from '../Icons';

import './styles.scss';

function TodoCard({
  filter, todos, dispatchAddTodo, dispatchToggleTodo, dispatchSetFilter,
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
        <span className="dot" />
        <form onSubmit={addNewTodo}>
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
            <div className="list__item" key={content}>
              <div>
                <button
                  className={[
                    'list__item__check',
                    isCompleted && 'list__item__check--completed',
                  ].join(' ')}
                  onClick={() => dispatchToggleTodo(id)}
                  type="button"
                >
                  <div className="dot" />
                </button>
                <button
                  className={[
                    'list__item__name',
                    isCompleted && 'list__item__name--completed',
                  ].join(' ')}
                  onClick={() => dispatchToggleTodo(id)}
                  type="button"
                >
                  { content }
                </button>
              </div>

              <div className="remove">
                <button className="remove__btn" type="button">
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
  dispatchSetFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchToggleTodo: toggleTodo,
    dispatchSetFilter: setFilter,
  },
)(TodoCard);

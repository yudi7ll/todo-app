import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTodos from '../../redux/selector';
import { toggleTodo, setFilter } from '../../redux/actions';
import { ACTIVE_TODO, ALL_TODO, COMPLETED_TODO } from '../../redux/filterTypes';

import { CloseIcon } from '../Icons';

import './styles.scss';

function TodoCard({ todos, dispatchToggleTodo, dispatchSetFilter }) {
  return (
    <>
      <label htmlFor="input" className="form">
        <span className="dot" />
        <input id="input" className="form__input" type="text" placeholder="Create a new todo..." />
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
              className="list__action list__filter"
              onClick={() => dispatchSetFilter(ALL_TODO)}
              type="button"
            >
              All
            </button>
            <button
              className="list__action list__filter"
              onClick={() => dispatchSetFilter(ACTIVE_TODO)}
              type="button"
            >
              Active
            </button>
            <button
              className="list__action list__filter"
              onClick={() => dispatchSetFilter(COMPLETED_TODO)}
              type="button"
            >
              Completed
            </button>
          </div>
          <button className="list__action" type="button">Clear Completed</button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ todos: getTodos(state) });

TodoCard.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  dispatchToggleTodo: PropTypes.func.isRequired,
  dispatchSetFilter: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    dispatchToggleTodo: toggleTodo,
    dispatchSetFilter: setFilter,
  },
)(TodoCard);

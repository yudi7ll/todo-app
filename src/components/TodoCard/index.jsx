import React from 'react';
import './styles.scss';

function TodoCard() {
  return (
    <>
      <label htmlFor="input" className="form">
        <span className="dot" />
        <input id="input" className="form__input" type="text" placeholder="Create a new todo..." />
      </label>
      <div className="list">
        {
          [
            'Todo 1',
            'Todo 2',
            'Todo 3',
            'Todo 4',
          ].map((item) => (
            <div className="list__item">
              <div className="display--flex">
                <span className="dot dot--active" />
                <span>{ item }</span>
              </div>

              <button type="button">
                <span className="deleteIcon" />
              </button>
            </div>
          ))
        }
        <div className="list__footer">
          <span>5 item left</span>
          <div>
            <button className="list__action list__filter" type="button">All</button>
            <button className="list__action list__filter" type="button">Active</button>
            <button className="list__action list__filter" type="button">Completed</button>
          </div>
          <button className="list__action" type="button">Clear Completed</button>
        </div>
      </div>
    </>
  );
}

export default TodoCard;

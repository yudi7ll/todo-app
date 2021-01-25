import React, { useState } from 'react';
import './styles.scss';
import {
  CloseIcon,
} from '../Icons';

function TodoCard() {
  return (
    <>
      <label htmlFor="input" className="form">
        <span className="dot" />
        <input id="input" className="form__input" type="text" placeholder="Create a new todo..." />
      </label>
      <div className="list">
        {
          /*
          todos.map(({ todo, id }) => (
            <div className="list__item" key={id}>
              <div>
                <button
                  className="list__item__check"
                  type="button"
                >
                  <div className="dot" />
                </button>
              </div>
              <button
                className="list__item__name"
                type="button"
              >
                { todo }
              </button>

              <div className="remove">
                <button className="remove__btn" type="button">
                  <CloseIcon className="remove__icon" />
                </button>
              </div>
            </div>
          ))
          */
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

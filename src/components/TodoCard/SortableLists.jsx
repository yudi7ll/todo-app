import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

// react redux
import { connect } from 'react-redux';
import getTodos from '../../redux/selector';

import {
  deleteTodo,
  toggleTodo,
  sortTodo,
} from '../../redux/actions';

// Components
import Check from '../Check';

import { CloseIcon } from '../Icons';

const List = SortableElement(({
  id, isCompleted, content, dispatchDeleteTodo, dispatchToggleTodo, key,
}) => (
  <li className="list__item" key={key}>
    <div>
      <button
        className="list__item__check"
        onClick={() => dispatchToggleTodo(id)}
        type="button"
      >
        <Check isCompleted={isCompleted} />
      </button>
      <div
        className={[
          'list__item__name',
          isCompleted ? 'list__item__name--completed' : '',
        ].join(' ')}
      >
        { content }
      </div>
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
  </li>
));

const Container = SortableContainer(({
  allIds, todos, dispatchDeleteTodo, dispatchToggleTodo,
}) => (
  <ul className="list__container">
    {todos.map((item, index) => (
      <List
        {...item}
        allIds={allIds}
        dispatchDeleteTodo={dispatchDeleteTodo}
        dispatchToggleTodo={dispatchToggleTodo}
        index={index}
        key={item.id}
      />
    ))}
  </ul>
));

function SortableLists(props) {
  const { allIds, dispatchSortTodo } = props;
  const handleSortEnd = ({ oldIndex, newIndex }) => {
    dispatchSortTodo({ allIds, oldIndex, newIndex });
  };

  return <Container onSortEnd={handleSortEnd} {...props} />;
}

const mapStateToProps = ({ todos }) => ({
  allIds: todos.allIds,
  todos: getTodos(todos),
});

SortableLists.propTypes = {
  allIds: PropTypes.instanceOf(Array).isRequired,
  dispatchSortTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    dispatchDeleteTodo: deleteTodo,
    dispatchToggleTodo: toggleTodo,
    dispatchSortTodo: sortTodo,
  },
)(SortableLists);

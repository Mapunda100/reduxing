import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';
import TodoList from './Todos';

const todoosListState = atom({
    key: 'todoosListState',
    default: []
});

function TodoosList() {
   // changed from todoListState to filteredTodoListState
    const todoosList = useRecoilValue(filteredTodoosListState);

    return (
        <>
          <TodoosListStats />
          <TodoosListFilters />
          <TodoosItemCreator />
         {todoosList.map((todoItem) => (
        <TodoosItem key={todoItem.id} item={todoItem} />
      ))}
        </>
    )
}

export default TodoosList;

//Creating the an item creator component

function TodoosItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoosList = useSetRecoilState(todoosListState);
    
    const addItem = () => {
        setTodoosList((oldTodoosList) => [
            ...oldTodoosList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            },
        ]);
        setInputValue('');

    }

    const Handle = ({ target: { value } }) => {
            setInputValue(value)
        }
    
    return (
        <div className="offset-md-4">
            <input  type="text" onChange={ Handle } value={inputValue}></input>
            <button onClick={ addItem }>ADD</button>

        </div>
    )
}

let id = 0;
function getId() {
    
    return id++;
}

function TodoosItem({item}) {
  const [todoList, setTodoList] = useRecoilState(todoosListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="offset-md-4">
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

//Create Selector for data derivation
const todoosListFilterState = atom({
  key: 'todoosListFilterState',
  default: 'Show All',
});

const filteredTodoosListState = selector({
  key: 'filteredTodoosListState',
  get: ({ get }) => {
    const filter = get(todoosListFilterState);
    const list = get(todoosListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      
      default:
        return list;
    }
  },
});

function TodoosListFilters() {
  const [ filter, setFilter ] = useRecoilState(todoosListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  return (
    <div className="offset-md-4">
        <select value={filter} onChange={updateFilter}>
          <option value="Show All">Show All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </select>
    </div>
  )

}

const todoosListStatsState = selector({
  key: 'todoosListStatsState',
  get: ({ get }) => {
    const todoosList = get(todoosListState);
    const totalNum = todoosList.length;
    const totalCompleted = todoosList.filter((item) => item.isComplete).length;
    const totalUncompleted = totalNum - totalCompleted;
    const percentageCompleted = totalNum === 0 ? 0 : totalCompleted / totalNum * 100;


    return {
      totalNum,
      totalCompleted,
      totalUncompleted,
      percentageCompleted
    };
  }

})

function TodoosListStats() {
  
  const {
    totalNum,
    totalCompleted,
    totalUncompleted,
    percentageCompleted,
  } = useRecoilValue(todoosListStatsState);

  const formattedPercentCompleted = Math.round(percentageCompleted);

  return (
    <>
      <ul className="offset-md-4">
        <li>Total Todoos: { totalNum }</li>
        <li>Total Completed Todoos: { totalCompleted }</li>
        <li>totalUncompleted Todoos: { totalUncompleted}</li>
        <li>Pertage of Completed Todoos: { formattedPercentCompleted}</li>
      </ul>
    </>
  )
}

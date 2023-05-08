import { useState } from "react";
import { CustomCheckbox } from "../../components/custom-checkbox/CustomCheckbox";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { sortTodos } from "../../helpers/filterTodos.helper";
import {
  add,
  update,
  remove,
  removeCompleted,
  reorderArray,
} from "../../store/reducers/todo.reducer.js";
import "./TodoPage.css";

const initialTodo = {
  id: "",
  name: "",
  completed: false,
};

export const TodoPage = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(initialTodo);
  const [selected, setSelected] = useState("");

  // Function to update list on drop
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...todos];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    dispatch(reorderArray(updatedList));
  };

  const sortedItems = sortTodos(todos, selected);

  const handleUpdate = (value) => {
    dispatch(update(value));
  };

  const handleRemove = (value) => {
    dispatch(remove(value));
  };

  const handleRemoveCompleted = () => {
    dispatch(removeCompleted());
  };

  const handleChange = (event) => {
    setTodo({
      ...todo,
      name: event.target.value,
    });
  };

  const handleCheckbox = (event) => {
    setTodo({
      ...todo,
      completed: event.target.checked,
    });
  };

  const handleKey = (event) => {
    if (event.keyCode === 13 && todo.name.length > 0) {
      dispatch(
        add({
          id: crypto.randomUUID(),
          name: todo.name,
          completed: todo.completed,
        })
      );
      setTodo(initialTodo);
    }
  };

  return (
    <div className="todo-layout">
      <div className="todo-container">
        <h1 className="todo-container-title">TODO</h1>
        <div className="todo-container-input">
          <CustomCheckbox
            handleCheckbox={handleCheckbox}
            checked={todo.completed}
          ></CustomCheckbox>
          <CustomInput
            handleChange={handleChange}
            handleKey={handleKey}
            value={todo.name}
          ></CustomInput>
        </div>
        <div className="todo-container-body">
          <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="todo-list-container">
              {(provided) => (
                <div
                  className="todo-list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sortedItems.map((item, index) => (
                    <Draggable
                      isDragDisabled={selected === 'Active' || selected === "Completed"}
                      key={item.name + item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="todo-item-container"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <CustomCheckbox
                            label={item.name}
                            checked={item.completed}
                            handleCheckbox={() => handleUpdate(item.id)}
                          ></CustomCheckbox>
                          <CustomButton
                            handleClick={() => handleRemove(item.id)}
                          >
                            X
                          </CustomButton>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="todo-list-container-footer">
            <span
              style={{
                color: "rgb(199, 199, 199)",
                fontFamily: "cursive",
                fontSize: "0.6em",
              }}
            >
              {sortedItems.length} items left
            </span>
            <CustomButton
              selected={selected}
              handleClick={() => setSelected("All")}
            >
              All
            </CustomButton>
            <CustomButton
              selected={selected}
              handleClick={() => setSelected("Active")}
            >
              Active
            </CustomButton>
            <CustomButton
              selected={selected}
              handleClick={() => setSelected("Completed")}
            >
              Completed
            </CustomButton>
            <CustomButton handleClick={() => handleRemoveCompleted()}>
              Clear Completed
            </CustomButton>
          </div>
        </div>
        <div className="todo-container-footer">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
};

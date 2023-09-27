import { useState } from "react";
import "./App.css";
import Calculate from "./components/Calculate/Calculate";
import Create from "./components/Create/Create";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const initialStateTodos: any[] = [
  {
    id: 1,
    title: "Complete online Javascript bluuweb Curse",
    completed: true,
  },
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "10 minutos meditation", completed: false },
  { id: 4, title: "Pick up groceries", completed: true },
  { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title: any) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter: string) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
        <Header />
        <main className="container mx-auto mt-8 px-4 md:max-w-xl">
          <Create createTodo={createTodo} />
          <List
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <Calculate
            computedItemsLeft={computedItemsLeft}
            clearCompleted={clearCompleted}
          />
          <Filter changeFilter={changeFilter} filter={filter} />
        </main>

        <footer className="mt-8 text-center">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
}

export default App;

import ItemList from "../ItemList/ItemList";

const List = (props: any) => {
  const { todos, removeTodo, updateTodo } = props;
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo: any) => (
        <ItemList
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default List;

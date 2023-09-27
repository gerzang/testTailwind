import CheckIcon from "../icons/CheckIcon";
import CrossIcon from "../icons/CrossIcon";

const ItemList = (props: any) => {
  const { id, title, completed } = props.todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-400">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => {
          props.updateTodo(id);
        }}
      >
        {completed && <CheckIcon />}
      </button>
      <p className={`grow text-gray-600 ${completed && "line-through"}`}>
        {title}
      </p>
      <button
        className="flex-none"
        onClick={() => {
          props.removeTodo(id);
        }}
      >
        <CrossIcon />
      </button>
    </article>
  );
};
export default ItemList;

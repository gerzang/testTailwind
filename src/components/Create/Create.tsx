import { useState } from "react";

const Create = (props: any) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e: any) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    props.createTodo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new..."
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default Create;

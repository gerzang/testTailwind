const Filter = (props: any) => {
  const { changeFilter, filter } = props;
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white">
        <button
          className={`${
            filter === "all"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
           className={`${
            filter === "active"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
           className={`${
            filter === "completed"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Complete
        </button>
      </div>
    </section>
  );
};

export default Filter;

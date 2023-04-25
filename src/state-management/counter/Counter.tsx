import useCounterStore from "./store";

const Counter = () => {
  const { counter, decrement, increment } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => decrement()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;

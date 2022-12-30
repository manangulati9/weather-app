import { Dispatch, SetStateAction, useRef } from "react";

export default function (props: {
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  const inputRef = useRef(null);
  return (
    <div className="w-72 flex justify-between">
      <div className="mx-5 mt-5 mb-1 ">
        <input
          className="bg-transparent px-2 pt-3"
          type="search"
          placeholder="Another Location"
          ref={inputRef}
        />
        <hr className="w-auto mt-1" />
      </div>
      <button
        onClick={() => {
          const newLoc = inputRef.current!.value.toLowerCase();
          props.setlocation(newLoc);
        }}
        className="bg-orange-500 px-3"
      >
        Search
      </button>
    </div>
  );
}

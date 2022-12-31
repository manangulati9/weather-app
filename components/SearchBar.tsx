import { Dispatch, SetStateAction, useRef } from "react";
import Image from "next/image";
export default function (props: {
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  const inputRef = useRef<any>();
  return (
    <div className="flex justify-between w-auto gap-3">
      <div className="mt-5 mb-1 px-6">
        <input
          className="bg-transparent pt-3 w-48 focus:outline-none placeholder:text-white/90"
          type="search"
          placeholder="Another Location"
          ref={inputRef}
        />
        <hr className="w-auto mt-1" />
      </div>
      <button
        onClick={() => {
          if (inputRef.current !== null) {
            const newLoc = inputRef.current.value.toLowerCase();
            props.setlocation(newLoc);
          }
        }}
        className="bg-gray-500 px-6"
      >
        <Image src="/search.png" alt="search" width={20} height={20} />
      </button>
    </div>
  );
}

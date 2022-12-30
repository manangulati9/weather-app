import { Dispatch, SetStateAction } from "react";
export default function (props: {
  setlocation: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="m-5 w-72">
      <div>
        <button
          className="my-2"
          onClick={() => {
            props.setlocation("birmingham");
          }}
        >
          Birmingham
        </button>
      </div>
      <div>
        <button
          className="my-2"
          onClick={() => {
            props.setlocation("manchester");
          }}
        >
          Manchester
        </button>
      </div>
      <div>
        <button
          className="my-2"
          onClick={() => {
            props.setlocation("new york");
          }}
        >
          New York
        </button>
      </div>
      <div>
        <button
          className="my-2"
          onClick={() => {
            props.setlocation("california");
          }}
        >
          California
        </button>
      </div>
    </div>
  );
}

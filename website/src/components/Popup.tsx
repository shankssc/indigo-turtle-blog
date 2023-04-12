import React, { useState } from "react";

function Popup(content: JSX.Element, btnText: string): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={(): void => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Close" : btnText}
      </button>

      {isOpen && (
        <div>
          <div> {content} </div>
        </div>
      )}
    </>
  );
}
export default  Popup ;

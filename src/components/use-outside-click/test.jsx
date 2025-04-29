import React, { useRef, useState } from "react";
import useOutSideClick from ".";

export default function UseOnClickOutsideTest() {
  const [ShowContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {ShowContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to colse this.It won't close if you
            click inside
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>ShowContent</button>
      )}
    </div>
  );
}

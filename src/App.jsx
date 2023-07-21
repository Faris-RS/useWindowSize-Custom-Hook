import React from "react";
import useWindowSize from "../useWindowSize";

export default function App() {
  const { width } = useWindowSize();
  return (
    <div>
      {width > 1000 && (
        <>
          <div role="button">
            <span>Testimonials</span>
          </div>
          <div role="button">
            <span>Price</span>
          </div>
          <div>
            <span role="button">Question?</span>
          </div>
        </>
      )}
      {/* visible at any window size */}
      <div>
        <span className="primary-button" role="button">
          Join Now
        </span>
      </div>
    </div>
  );
}

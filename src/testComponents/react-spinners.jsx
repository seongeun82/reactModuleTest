import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";
import PulseLoader from "react-spinners/PulseLoader";

const ReactSpinners = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const override = css`
    disaply: block;
    height: 15;
    radius: 2;
    margin: 2 auto;
    border-color: red;
  `;

  return (
    <>
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        />
        <PulseLoader loading={loading} size={20} />
        <FadeLoader
          loading={loading}
          height={25}
          width={10}
          radius={10}
          margin={4}
        />
      </div>
    </>
  );
};

export default ReactSpinners;

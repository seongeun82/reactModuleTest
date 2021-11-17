import React from "react";

const Radio_btn = (props) => {
  const aa = (e) => {
    console.log(e.target.value);
    console.log("aa");
  };

  return (
    <div onChange={aa}>
      <input type="radio" value="male" name="gender" onClick={aa} checked />
      male
      <input type="radio" value="female" name="gender" onClick={aa} /> Female
    </div>
  );
};

export default Radio_btn;

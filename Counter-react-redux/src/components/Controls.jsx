import { useDispatch } from "react-redux";
import "./Controls.css";
import { useRef } from "react";

function Controls() {
  const dispatch = useDispatch();
 let inputElement = useRef()

  const handleIncrement = function () {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = function () {
    dispatch({
      type: "DECREMENT",
    });
  };


    const handleAdd = function () {
    dispatch({
      type: "ADD",
      payload :{
        num : parseInt(inputElement.current.value)
      }
    });
    inputElement.current.value = ''
  };

      const handleSub = function () {
    dispatch({
      type: "SUB",
      payload :{
        num : parseInt(inputElement.current.value)
      }
    });
    inputElement.current.value = ''
  };



  const handlePrivacyTogle = function (){
    dispatch({
      type : "PRIVACY_TOGGLE",
      
    })
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-gap"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-gap"
          onClick={handleDecrement}
        >
          -1
        </button>

         <button
          type="button"
          className="btn btn-warning btn-gap"
          onClick={handlePrivacyTogle}
        >
          Privacy Toggle
        </button>
      </div>

       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
         <input type="text"  placeholder="Enter number" className="number-input" ref={inputElement}/>
      <button type="button" className="btn btn-info btn-gap" onClick={handleAdd}>
         Add
      </button>
       <button type="button" className="btn btn-info btn-gap" onClick={handleSub}>
         Sub
      </button>
  
    </div>
    </>
  );
}

export default Controls;

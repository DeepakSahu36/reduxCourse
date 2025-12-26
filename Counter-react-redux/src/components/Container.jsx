import "./Container.css";

function Container({ children }) {
  return (
    <div className="card card-center" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Container;

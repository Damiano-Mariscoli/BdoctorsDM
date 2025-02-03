import Spinner from "react-bootstrap/Spinner";
import style from "./Loader.module.css";
function BorderExample() {
  return (
    <div className={style.loader}>
      <Spinner animation="border" />;
    </div>
  );
}

export default BorderExample;

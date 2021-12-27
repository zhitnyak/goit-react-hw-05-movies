import { useHistory, useLocation } from "react-router-dom";
import s from "../pages/page.module.css";

export default function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();

  function onGoBack() {
    history.push(location?.state?.from ?? "/");
  }

  return (
    <>
      <button className={s.btn} type="button" onClick={onGoBack}>
        Back
      </button>
    </>
  );
}

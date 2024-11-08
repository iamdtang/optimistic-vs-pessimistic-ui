import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

import PessismisticUiExample from "./PessimisticUiExample";
import OptimisticUiExample from "./OptimisticUiExample";

export default function App() {
  return (
    <div>
      <PessismisticUiExample />
      <OptimisticUiExample />
    </div>
  );
}

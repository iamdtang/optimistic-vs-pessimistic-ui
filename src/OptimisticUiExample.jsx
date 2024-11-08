import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function OptimisticUiExample() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <h1>Optimistic UI</h1>

      <button
        type="button"
        className="btn btn-link"
        onClick={() => {
          const updatedIsLiked = !isLiked;

          setIsLiked(updatedIsLiked);

          saveLike(updatedIsLiked).then(
            () => {
              // don't need to do anything because it was successful
            },
            () => {
              setIsLiked(!updatedIsLiked);
              toast.error("Oops, something went wrong. Please try again.");
            }
          );
        }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          color={isLiked ? "red" : "#eee"}
          size="2x"
        />
      </button>

      <ToastContainer position="bottom-left" autoClose={5000} />
    </div>
  );
}

function saveLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject();
    }, 2000);
  });
}

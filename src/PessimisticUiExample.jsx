import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function PessismisticUiExample() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div>
      <h1>Pessimistic UI</h1>

      <button
        type="button"
        className="btn btn-link"
        disabled={isSaving}
        onClick={() => {
          const updatedIsLiked = !isLiked;

          setIsSaving(true);

          saveLike(updatedIsLiked).then(() => {
            setIsLiked(updatedIsLiked);
            setIsSaving(false);
          });
        }}
      >
        <FontAwesomeIcon
          icon={isSaving ? faSpinner : faHeart}
          color={isLiked ? "red" : "#eee"}
          size="2x"
        />
      </button>
    </div>
  );
}

function saveLike() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

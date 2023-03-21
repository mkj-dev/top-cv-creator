import { useState } from "react";

export default function ToggleButton() {
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const toggleButtonVisibility = () => {
    const buttons = document.querySelectorAll("button[class$='-button']");

    setButtonVisibility(!buttonVisibility);
    
    for (const button of buttons) {
        if (!buttonVisibility) {
          button.style.display = 'none';
        } else {
          button.style.display = 'block';
        }
      }
  }

  return (
    <div>
      <button type="button" onClick={toggleButtonVisibility}>{buttonVisibility ? 'Show buttons' : 'Hide buttons'}</button>
    </div>
  );
}
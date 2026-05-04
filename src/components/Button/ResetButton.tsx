import type { FC } from "react";
import "./Button.css";

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({onReset}) => (
  <button className='reset-btn' onClick={onReset}>
    Reset
  </button>
);

export default ResetButton;
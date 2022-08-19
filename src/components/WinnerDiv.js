import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WinnerDiv = ({ finalTotal }) => {
  const checkWinner = () => {
    if (finalTotal.valuesP1 > finalTotal.valuesP2) {
      return "Player 1 wins the game!";
    } else if (finalTotal.valuesP1 < finalTotal.valuesP2) {
      return "Player 2 wins the game!";
    } else if (finalTotal.valuesP1 === finalTotal.valuesP2) {
      return "Tie!";
    }
  };

  return (
    <div className="div-winner">
      <h1>{checkWinner()}</h1>
      <FontAwesomeIcon icon={faTrophy} />
      <button> Leave game</button>
    </div>
  );
};

export default WinnerDiv;

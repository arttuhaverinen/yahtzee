import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MpWinnerDiv = ({ finalTotal, username, opponentUsername, multiplayerPlayer1, multiplayerPlayer2 }) => {
  const checkWinner = () => {
    if (multiplayerPlayer1 && finalTotal.valuesP1 > finalTotal.valuesP2) {
      return username + " wins the game!";
    }
    if (multiplayerPlayer1 && finalTotal.valuesP1 < finalTotal.valuesP2) {
      return opponentUsername + " wins the game!";
    }
    if (multiplayerPlayer2 && finalTotal.valuesP1 > finalTotal.valuesP2) {
      return opponentUsername + " wins the game!";
    }
    if (multiplayerPlayer2 && finalTotal.valuesP1 < finalTotal.valuesP2) {
      return username + " wins the game!";
    }

    if (finalTotal.valuesP1 < finalTotal.valuesP2) {
      return "Tie!";
    }
  };

  return (
    <div className="div-winner">
      <h1>{checkWinner() + " wins the game!"}</h1>
      <FontAwesomeIcon icon={faTrophy} />
      <button> Leave game</button>
    </div>
  );
};

export default MpWinnerDiv;

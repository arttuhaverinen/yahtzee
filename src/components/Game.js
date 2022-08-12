import React, { useState } from "react";
import ScoreDiv from "../components/ScoreDiv";
import { Link } from "react-router-dom";

const Game = ({ aces, twos, threes, fours, fives, sixes, setAces, setTwos, setThrees, setFours, setFives, setSixes, altPair, twoPairs, triple, fourOfaKind, fullHouse, chance, yatzy, setScoreDivUnactive, setBonus, bonus, firstTotal, handleScoreVisibility, handleTurnChange, turn, config, setRoll, calculateSum, setDices, setaltPair, finalTotal, handleDiceVisibility, roll, diceRoll, showRollIcons, keepDiceAction, diceImages, dices, smallStraight, bigStraight, setTwoPairs, setTriple, setFourOfaKind, setBigStraight, setFullHouse, setChance, setYatzy, setSmallStraight }) => {
  const [test, setTest] = useState(0);

  return (
    <div className="pageGrid container">
      <div className="Score">
        <ScoreDiv combinationName={"Aces"} combination={aces} setCombination={setAces} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Twos"} combination={twos} setCombination={setTwos} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Threes"} combination={threes} setCombination={setThrees} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Fours"} combination={fours} setCombination={setFours} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Fives"} combination={fives} setCombination={setFives} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Sixes"} combination={sixes} setCombination={setSixes} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <div className="scoreDiv">
          <h3>Bonus</h3>
          <h3>{bonus.valuesP1}</h3>
          <h3>{bonus.valuesP2}</h3>
        </div>
        <div className="scoreDiv">
          <h3>Sum</h3>
          <h3>{firstTotal.valuesP1}</h3>
          <h3>{firstTotal.valuesP2}</h3>
        </div>
        <br />
        <ScoreDiv combinationName={"Pair"} combination={altPair} setCombination={setaltPair} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Two pair"} combination={twoPairs} setCombination={setTwoPairs} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"3 of a kind"} combination={triple} setCombination={setTriple} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"4 of a kind"} combination={fourOfaKind} setCombination={setFourOfaKind} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Small straight"} combination={smallStraight} setCombination={setSmallStraight} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Big straight"} combination={bigStraight} setCombination={setBigStraight} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Full house"} combination={fullHouse} setCombination={setFullHouse} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Chance"} combination={chance} setCombination={setChance} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />
        <ScoreDiv combinationName={"Yatzy"} combination={yatzy} setCombination={setYatzy} setScoreDivUnactive={setScoreDivUnactive} calculateSum={calculateSum} config={config} setRoll={setRoll} setDice={setDices} handleTurnChange={handleTurnChange} turn={turn} />

        <div className="scoreDiv">
          <h3>Total</h3>
          <h3>{finalTotal.valuesP1}</h3>
          <h3>{finalTotal.valuesP2}</h3>
        </div>
      </div>
      <div className="Dices">
        <button
          style={roll % 3 !== 0 || roll === 0 ? { color: "green" } : { pointerEvents: "none" }}
          onClick={() => {
            diceRoll();
          }}
        >
          {roll % 3 !== 0 || roll === 0 ? <>roll {showRollIcons()}</> : <p>not available</p>}
        </button>
        <div>
          <img id="dice1pic" onMouseOver={(e) => keepDiceAction(e)} src={diceImages[dices[0]]}></img>
          <img id="dice2pic" onMouseOver={(e) => keepDiceAction(e)} src={diceImages[dices[1]]}></img>
          <img id="dice3pic" onMouseOver={(e) => keepDiceAction(e)} src={diceImages[dices[2]]}></img>
          <img id="dice4pic" onMouseOver={(e) => keepDiceAction(e)} src={diceImages[dices[3]]}></img>
          <img id="dice5pic" onMouseOver={(e) => keepDiceAction(e)} src={diceImages[dices[4]]}></img>
        </div>
        <button className="btnBackToMainMenu">
          <Link to="/">Back to main menu</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Game;

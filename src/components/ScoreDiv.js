const ScoreDiv = ({ combinationName, combination, setCombination, setScoreDivUnactive, calculateSum, config, setRoll, setDice, handleTurnChange, turn }) => {
  //console.log("setDice", setDice);
  //console.log("setroll", setRoll);

  const handleTurnChangeLogicP1 = (e) => {
    setScoreDivUnactive(e);
    setCombination({ ...combination, lockedP1: true });
    setDice([0, 0, 0, 0, 0]);
    setRoll(0);
    handleTurnChange(true);
  };

  const handleTurnChangeLogicSkipP1 = (e) => {
    setScoreDivUnactive(e);
    setCombination({ ...combination, lockedP1: true, valuesP1: 0 });
    setDice([0, 0, 0, 0, 0]);
    setRoll(0);
    handleTurnChange(true);
  };

  const handleTurnChangeLogicP2 = (e) => {
    setScoreDivUnactive(e);
    setCombination({ ...combination, lockedP2: true });
    setDice([0, 0, 0, 0, 0]);
    setRoll(0);
    handleTurnChange(true);
  };

  const handleTurnChangeLogicSkipP2 = (e) => {
    setScoreDivUnactive(e);
    setCombination({ ...combination, lockedP2: true, valuesP2: 0 });
    setDice([0, 0, 0, 0, 0]);
    setRoll(0);
    handleTurnChange(true);
  };

  return (
    <div className="scoreDiv">
      <h3>{combinationName}</h3>
      <div className={turn === 1 ? "scoreDivP1" : "scoreDivP1 scoreDivUnactive"}>
        {combination.lockedP1 ? (
          <h3>{combination.valuesP1 /*calculateSum(combination.valuesP1)*/}</h3>
        ) : (
          <>
            <button
              onClick={(e) => {
                handleTurnChangeLogicP1(e);
              }}
            >
              {combination.valuesP1 /*calculateSum(combination.valuesP1)*/}
            </button>
            <button
              onClick={(e) => {
                handleTurnChangeLogicSkipP1(e);
              }}
            >
              -
            </button>
          </>
        )}
      </div>
      {config.singlePlayerMode === false ? (
        <div className={turn === 2 ? "scoreDivP2" : "scoreDivP2 scoreDivUnactive"}>
          {combination.lockedP2 ? (
            <h3>{combination.valuesP2 /*calculateSum(combination.valuesP2)*/}</h3>
          ) : (
            <>
              <button
                onClick={(e) => {
                  handleTurnChangeLogicP2(e);
                }}
              >
                {combination.valuesP2}
              </button>
              <button
                onClick={(e) => {
                  handleTurnChangeLogicSkipP2(e);
                }}
              >
                -
              </button>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ScoreDiv;

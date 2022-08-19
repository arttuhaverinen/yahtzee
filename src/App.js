//import "./App.css";
import React, { useState, useEffect, useRef, Fragment } from "react";
import ScoreDiv from "./components/ScoreDiv";
import dice0 from "./images/dice0.png";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";
import io, { Socket } from "socket.io-client";
import MainMenu from "./components/MainMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchingMenu from "./components/SearchingMenu";
import { Link } from "react-router-dom";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import OnlineMenu from "./components/OnlineMenu";
import MultiplayerGame from "./components/MultiplayerGame";
import Game from "./components/Game";

function App() {
  const [dices, setDices] = useState(() => [0, 0, 0, 0, 0]);
  const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const diceIds = ["dice1pic", "dice2pic", "dice3pic", "dice4pic", "dice5pic"];

  const [config, setConfig] = useState({
    singlePlayerMode: false,
    onlineMode: false,
  });
  const [test, setTest] = useState(0);
  const [onlineMode, setOnlineMode] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [username, setUserName] = useState(null);
  const [multiplayerPlayer1, setMultiplayerPlayer1] = useState(false);
  const [multiplayerPlayer2, setMultiplayerPlayer2] = useState(false);
  const [socket, setSocket] = useState(null);

  // CSS affecting states

  const [disableScoreDivP1, setDisableScoreDivP1] = useState(true);
  const [disableScoreDivP2, setDisableScoreDivP2] = useState(true);

  useEffect(() => {
    if (socket !== null) {
      socket.on("success", (data, player) => {
        alert(data);
        if (player === 1) {
          setMultiplayerPlayer1(true);
          setMultiplayerPlayer2(false);
        } else if (player === 2) {
          setMultiplayerPlayer2(true);
          setMultiplayerPlayer1(false);
        }
      });
    }
  }, [socket]);

  /*
  const [turn, setTurn] = useState(1);
  const [roll, setRoll] = useState(0);

  const [aces, setAces] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [twos, setTwos] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [threes, setThrees] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [fours, setFours] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [fives, setFives] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [sixes, setSixes] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });

  const [bonus, setBonus] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [firstTotal, setFirstTotal] = useState({
    valuesP1: 1,
    valuesP2: 1,
    lockedP1: false,
    lockedP2: false,
  });
  const [finalTotal, setFinalTotal] = useState({
    valuesP1: 1,
    valuesP2: 1,
    lockedP1: false,
    lockedP2: false,
  });

  const [twoPairs, setTwoPairs] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [altPair, setaltPair] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [triple, setTriple] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [fourOfaKind, setFourOfaKind] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [yatzy, setYatzy] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [fullHouse, setFullHouse] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [chance, setChance] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [smallStraight, setSmallStraight] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });
  const [bigStraight, setBigStraight] = useState({
    valuesP1: 0,
    valuesP2: 0,
    lockedP1: false,
    lockedP2: false,
  });

  useEffect(() => {
    console.log("data rerender");
    if (socket !== null) {
      socket.on("message", (data) => {
        alert(data);
      });
      socket.on("send_message", (data) => {
        alert(data);
      });
      socket.on("error", (data) => {
        alert(data);
      });
      socket.on("success", (data, player) => {
        alert(data);
        if (player === 1) {
          setMultiplayerPlayer1(true);
          setMultiplayerPlayer2(false);
        } else if (player === 2) {
          setMultiplayerPlayer2(true);
          setMultiplayerPlayer1(false);
        }
      });
      socket.on("gameUpdate", (data) => {
        console.log("data");
        setAces(data.aces);
        setTwos(data.twos);
        setThrees(data.threes);
        setFours(data.fours);
        setFives(data.fives);
        setSixes(data.sixes);
        setaltPair(data.altPair);
        setTwoPairs(data.twoPairs);
        setTriple(data.triple);
        setFourOfaKind(data.fourOfaKind);
        setSmallStraight(data.smallStraight);
        setBigStraight(data.bigStraight);
        setFullHouse(data.fullHouse);
        setChance(data.chance);
        setYatzy(data.yatzy);
        setDices(data.dices);
        setRoll(data.roll);
        setTurn(data.turn);
        if (data.turnChange) {
          console.log("data resetting dices");
          setDices([0, 0, 0, 0, 0]);
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    action();
    calculateFirstTotal();
    disablePlayer1Divs();
    console.log("rerender fired, roll dices");
    //action();
  }, [roll, dices]);

  useEffect(() => {
    console.log("rerender");
    isBonus();
  }, [aces, twos, threes, fours, fives, sixes]);

  useEffect(() => {
    console.log("rerender");
    calculateFirstTotal();
  }, [bonus]);

  useEffect(() => {
    if (multiplayerPlayer1 === true && turn === 1) {
      sendGameStates(false);
    }
    if (multiplayerPlayer2 === true && turn === 2) {
      sendGameStates(false);
    }
  });

  useEffect(() => {
    sendGameStates(true);
  }, [turn]);

  const sendGameStates = (resetDices) => {
    if (socket !== null && roomName !== null) {
      let turnChange = resetDices;
      socket.emit("gameMessage", {
        aces,
        twos,
        threes,
        fours,
        fives,
        sixes,
        altPair,
        twoPairs,
        triple,
        fourOfaKind,
        smallStraight,
        bigStraight,
        fullHouse,
        chance,
        yatzy,

        roomName,
        dices,
        roll,
        turn,
        turnChange,
      });
    }
  };

  //let location = useLocation();
  //console.log("loc", location);

  //const dicesTobeDeleted = [dice1pic = useRef()]
  //const dice1pic = useRef()

  const diceRoll = () => {
    let newarr = [...dices];

    diceIds.forEach((element, index) => {
      if (dices[index] === 0 || document.getElementById(element).style.opacity == "0.2") {
        //setDices(dices.splice(0,1, Math.floor(Math.random()*6+1) ))
        newarr[index] = Math.floor(Math.random() * 6 + 1);
        document.getElementById(element).style.opacity = "1";
      }
    });
    //console.log("setdices", newarr);
    setDices(newarr);

    //console.log("generating random 5");
    if (dices.length < 5) {
      let newArr = [];
      for (let i = 0; i < 5; i++) {
        newArr.push(Math.floor(Math.random() * 6 + 1));
      }
      setDices(newArr);
      console.log(document.getElementById("dice1pic").style.opacity);
    }

    handleTurnChange(false);
  };

  const keepDiceAction = (e) => {
    //console.log("keepdiceaction", e.target.id);
    let diceToColor = document.getElementById(e.target.id);
    //console.log("dicetocolor ", diceToColor);
    diceToColor.style.opacity === "0.2" ? (diceToColor.style.opacity = "1") : (diceToColor.style.opacity = "0.2");
  };

  const isAces = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 1) {
        counter++;
        arr.push(1);
      }
    });
    //console.log("arr", arr);
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!aces.lockedP1) setAces({ ...aces, valuesP1: value });
    } else if (turn === 2) {
      if (!aces.lockedP2) setAces({ ...aces, valuesP2: value });
    }
  };

  const isTwos = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 2) {
        counter++;
        arr.push(2);
      }
    });
    //console.log("arr", arr);
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!twos.lockedP1) setTwos({ ...twos, valuesP1: value });
    } else if (turn === 2) {
      if (!twos.lockedP2) setTwos({ ...twos, valuesP2: value });
    }
  };

  const isThrees = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 3) {
        counter++;
        arr.push(3);
      }
    });
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!threes.lockedP1) setThrees({ ...threes, valuesP1: value });
    } else if (turn === 2) {
      if (!threes.lockedP2) setThrees({ ...threes, valuesP2: value });
    }
  };

  const isFours = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 4) {
        counter++;
        arr.push(4);
      }
    });
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!fours.lockedP1) setFours({ ...fours, valuesP1: value });
    } else if (turn === 2) {
      if (!fours.lockedP2) setFours({ ...fours, valuesP2: value });
    }
  };

  const isFives = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 5) {
        counter++;
        arr.push(5);
      }
    });
    //console.log("arr", arr);
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!fives.lockedP1) setFives({ ...fives, valuesP1: value });
    } else if (turn === 2) {
      if (!fives.lockedP2) setFives({ ...fives, valuesP2: value });
    }
  };

  const isSixes = () => {
    let counter = 0;
    let arr = [0];
    dices.forEach((elem) => {
      if (elem === 6) {
        counter++;
        arr.push(6);
      }
    });
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!sixes.lockedP1) setSixes({ ...sixes, valuesP1: value });
    } else if (turn === 2) {
      if (!sixes.lockedP2) setSixes({ ...sixes, valuesP2: value });
    }
    //turn === 1 ? setSixes({ ...sixes, valuesP1: arr, valuesP2: sixes.lockedP2 ? sixes.valuesP2 : [0] }) : setSixes({ ...sixes, valuesP1: sixes.lockedP1 ? sixes.valuesP1 : [0], valuesP2: arr });
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const isTwoPairs = () => {
    console.log("pair", dices);
    let counter = 0;
    let pairs1 = [0, 0];
    let pairs2 = [0, 0];
    for (let i = 0; i < dices.length; i++) {
      counter = 0;
      for (let j = 0; j < dices.length; j++) {
        if (dices[j] === dices[i]) {
          counter++;
          //console.log("alt counter", counter);
          if (counter >= 2 && dices[i] + dices[j] > pairs1[0] + pairs1[1] && pairs1[0] + pairs1[1] === 0) {
            //console.log("pair1", dices[i], dices[j]);
            //console.log("pairsbeforedeletion");
            pairs1 = [];
            //console.log("pairsafterdeletion", pairs1);
            //console.log(dices[i], dices[j]);
            pairs1.push(dices[i], dices[j]);
            counter = 0;
          }
          if (counter >= 2 && dices[i] + dices[j] > pairs2[0] + pairs2[1] && dices[i] + dices[j] !== pairs1[0] + pairs1[1]) {
            //console.log("pair2", dices[i], dices[j]);
            //console.log("pairsbeforedeletion");
            pairs2 = [];
            //console.log("pairsafterdeletion", pairs2);
            //console.log(dices[i], dices[j]);
            pairs2.push(dices[i], dices[j]);
            counter = 0;
          }
        }
      }
    }
    if (pairs1[0] + pairs1[1] > 0 && pairs2[0] + pairs2[1] > 0) {
      let value = pairs1[0] + pairs1[1] + pairs2[0] + pairs2[1];
      console.log("two pairs ", pairs1, pairs2);
      if (turn === 1) {
        if (!twoPairs.lockedP1) setTwoPairs({ ...twoPairs, valuesP1: value });
      } else if (turn === 2) {
        if (!twoPairs.lockedP2) setTwoPairs({ ...twoPairs, valuesP2: value });
      }
    }
  };

  const isFullHouse = () => {
    let counter = 0;
    let tripleFound = [0, 0, 0];
    let pairs = [0, 0];
    let value = 0;
    for (let i = 0; i < dices.length; i++) {
      counter = 0;
      for (let j = 0; j < dices.length; j++) {
        if (dices[j] === dices[i]) {
          counter++;
          //console.log("triples counter", counter);
          if (counter === 3) {
            tripleFound = [];
            //console.log("found triples", counter);
            tripleFound.push(dices[i], dices[i], dices[i]);
            counter = 0;
          }
        }
      }
      counter = 0;
    }

    for (let i = 0; i < dices.length; i++) {
      counter = 0;
      for (let j = 0; j < dices.length; j++) {
        if (dices[j] === dices[i]) {
          counter++;
          //console.log("alt counter", counter);
          if (counter >= 2 && dices[j] !== tripleFound[0]) {
            pairs = [];
            pairs.push(dices[i], dices[j]);
            counter = 0;
            break;
          }
        }
      }
    }
    //console.log("is it full house?", "triples:", tripleFound, "pairs:", pairs);
    if (tripleFound[0] !== 0 && pairs[0] !== 0) {
      value = tripleFound[0] + tripleFound[1] + tripleFound[2] + pairs[0] + pairs[1];
    }
    //if (tripleFound[0] !== 0 && pairs[0] !== 0) {
    if (turn === 1) {
      if (!fullHouse.lockedP1) setFullHouse({ ...fullHouse, valuesP1: value });
    } else if (turn === 2) {
      if (!fullHouse.lockedP2) setFullHouse({ ...fullHouse, valuesP2: value });
    }
    //}
  };

  const alternativeisPair = () => {
    //console.log("ispair", dices);
    let counter = 0;
    let pairs = [0, 0];
    for (let i = 0; i < dices.length; i++) {
      counter = 0;
      for (let j = 0; j < dices.length; j++) {
        if (dices[j] === dices[i]) {
          counter++;
          //console.log("alt counter", counter);
          if (counter >= 2 && dices[i] + dices[j] > pairs[0] + pairs[1]) {
            //console.log("pairsbeforedeletion");
            pairs = [];
            //console.log("pairsafterdeletion", pairs);
            //console.log(dices[i], dices[j]);
            pairs.push(dices[i], dices[j]);
            counter = 0;
            break;
          }
        }
      }
    }
    //console.log("final pair", pairs);
    //console.log(pairs);
    //setaltPair({ ...altPair, valuesP1: [pairs[0], pairs[1]] });
    let value = pairs[0] + pairs[1];
    if (turn === 1) {
      if (!altPair.lockedP1) setaltPair({ ...altPair, valuesP1: value });
    } else if (turn === 2) {
      if (!altPair.lockedP2) setaltPair({ ...altPair, valuesP2: value });
    }
  };

  const isTriples = () => {
    let counter = 0;
    let triples = 0;
    for (let i = 0; i < dices.length; i++) {
      counter = 0;
      for (let j = i + 1; j < dices.length; j++) {
        if (dices[j] === dices[i] && j !== i) {
          counter++;
          //console.log("triples counter", counter);
          if (counter >= 2) {
            //console.log("found triples", dices[i]);
            triples = dices[i];
            //console.log("triples", triples);
            break;
          }
        }
      }
      counter = 0;
    }
    let value = triples * 3;

    if (turn === 1) {
      if (!triple.lockedP1) setTriple({ ...triple, valuesP1: value });
    } else if (turn === 2) {
      if (!triple.lockedP2) setTriple({ ...triple, valuesP2: value });
    }
  };

  const isFourOfaKind = () => {
    //setFourOfaKind({ lockedP1: false, valuesP1: [0, 0, 0, 0] });
    let counter = 0;
    let four = 0;
    for (let i = 0; i < dices.length; i++) {
      for (let j = i + 1; j < dices.length; j++) {
        if (dices[j] === dices[i] && j !== i) {
          counter++;
          //console.log("fours counter", counter);
          if (counter >= 3) {
            //console.log("found fours", counter);
            four = dices[i];
            break;
          }
        }
      }
      counter = 0;
    }
    let value = four * 4;
    if (turn === 1) {
      if (!fourOfaKind.lockedP1) setFourOfaKind({ ...fourOfaKind, valuesP1: value });
    } else if (turn === 2) {
      if (!fourOfaKind.lockedP2) setFourOfaKind({ ...fourOfaKind, valuesP2: value });
    }
  };

  const isYatzy = () => {
    let counter = 0;
    let yatzyFound = false;
    for (let i = 0; i < dices.length; i++) {
      for (let j = i + 1; j < dices.length; j++) {
        //console.log("yatzy counter", counter, dices[i], dices[j]);
        if (dices[j] === dices[i] && dices[i] !== 0) {
          counter++;
          if (counter === 4) {
            //console.log("found yatzy", counter);
            yatzyFound = true;
            break;
          }
        }
      }
      counter = 0;
    }
    if (yatzyFound) {
      if (turn === 1) {
        if (!setYatzy.lockedP1) setYatzy({ ...yatzy, valuesP1: 50 });
      } else if (turn === 2) {
        if (!setYatzy.lockedP2) setYatzy({ ...yatzy, valuesP2: 50 });
      }
    }
  };

  const isSmallStraight = () => {
    let straight = [1, 2, 3, 4, 5];
    let counter = 0;
    let foundStraight = straight.every((value) => {
      return dices.includes(value);
    });

    if (foundStraight) {
      if (turn === 1) {
        if (!setSmallStraight.lockedP1) setSmallStraight({ ...smallStraight, valuesP1: 15 });
      } else if (turn === 2) {
        if (!setSmallStraight.lockedP2) setSmallStraight({ ...smallStraight, valuesP2: 15 });
      }
      console.log("final counter suora", counter);
    } else {
      if (turn === 1) {
        if (!setSmallStraight.lockedP1) setSmallStraight({ ...smallStraight, valuesP1: 0 });
      } else if (turn === 2) {
        if (!setSmallStraight.lockedP2) setSmallStraight({ ...smallStraight, valuesP2: 0 });
      }
    }
  };

  const isBigStraight = () => {
    //let bigStraight = [2, 3, 4, 5, 6];
    let straight = [2, 3, 4, 5, 6];
    let counter = 0;
    let foundStraight = straight.every((value) => {
      return dices.includes(value);
    });
    if (foundStraight) {
      if (turn === 1) {
        if (!setBigStraight.lockedP1) setBigStraight({ ...bigStraight, valuesP1: 20 });
      } else if (turn === 2) {
        if (!setBigStraight.lockedP2) setBigStraight({ ...bigStraight, valuesP2: 20 });
      }
    } else {
      if (turn === 1) {
        if (!setBigStraight.lockedP1) setBigStraight({ ...bigStraight, valuesP1: 0 });
      } else if (turn === 2) {
        if (!setBigStraight.lockedP2) setBigStraight({ ...bigStraight, valuesP2: 0 });
      }
    }
  };

  const isChance = () => {
    let arr = [];
    dices.forEach((elem) => {
      arr.push(elem);
    });
    let value = arr.reduce((a, b) => a + b);
    if (turn === 1) {
      if (!chance.lockedP1) setChance({ ...chance, valuesP1: value });
    } else if (turn === 2) {
      if (!chance.lockedP2) setChance({ ...chance, valuesP2: value });
    }
  };

  const calculateSum = (arr) => {
    //console.log("summing", arr);
    //return arr.reduce((a, b) => a + b, 0);
  };

  const calculateFirstTotal = () => {
    let p1Sum = 0;
    let p2Sum = 0;

    if (aces.lockedP1) p1Sum += aces.valuesP1;
    if (twos.lockedP1) p1Sum += twos.valuesP1;
    if (threes.lockedP1) p1Sum += threes.valuesP1;
    if (fours.lockedP1) p1Sum += fours.valuesP1;
    if (fives.lockedP1) p1Sum += fives.valuesP1;
    if (sixes.lockedP1) p1Sum += sixes.valuesP1;

    if (aces.lockedP2) p2Sum += aces.valuesP2;
    if (twos.lockedP2) p2Sum += twos.valuesP2;
    if (threes.lockedP2) p2Sum += threes.valuesP2;
    if (fours.lockedP2) p2Sum += fours.valuesP2;
    if (fives.lockedP2) p2Sum += fives.valuesP2;
    if (sixes.lockedP2) p2Sum += sixes.valuesP2;

    setFirstTotal({ ...firstTotal, valuesP1: p1Sum + bonus.valuesP1, valuesP2: p2Sum + bonus.valuesP2 });

    if (altPair.lockedP1) p1Sum += altPair.valuesP1;
    if (twoPairs.lockedP1) p1Sum += twoPairs.valuesP1;
    if (triple.lockedP1) p1Sum += triple.valuesP1;
    if (fourOfaKind.lockedP1) p1Sum += fourOfaKind.valuesP1;
    if (smallStraight.lockedP1) p1Sum += smallStraight.valuesP1;
    if (bigStraight.lockedP1) p1Sum += bigStraight.valuesP1;
    if (fullHouse.lockedP1) p1Sum += fullHouse.valuesP1;
    if (chance.lockedP1) p1Sum += chance.valuesP1;
    if (yatzy.lockedP1) p1Sum += yatzy.valuesP1;

    if (altPair.lockedP2) p2Sum += altPair.valuesP2;
    if (twoPairs.lockedP2) p2Sum += twoPairs.valuesP2;
    if (triple.lockedP2) p2Sum += triple.valuesP2;
    if (fourOfaKind.lockedP2) p2Sum += fourOfaKind.valuesP2;
    if (smallStraight.lockedP2) p2Sum += smallStraight.valuesP2;
    if (bigStraight.lockedP2) p2Sum += bigStraight.valuesP2;
    if (fullHouse.lockedP2) p2Sum += fullHouse.valuesP2;
    if (chance.lockedP2) p2Sum += chance.valuesP2;
    if (yatzy.lockedP2) p2Sum += yatzy.valuesP2;

    setFinalTotal((prevstate) => ({ ...finalTotal, valuesP1: p1Sum + bonus.valuesP1, valuesP2: p2Sum + bonus.valuesP2 }));
  };

  const isBonus = () => {
    let p1Sum = 0;
    let p2Sum = 0;
    if (aces.lockedP1) p1Sum += aces.valuesP1;
    if (twos.lockedP1) p1Sum += twos.valuesP1;
    if (threes.lockedP1) p1Sum += threes.valuesP1;
    if (fours.lockedP1) p1Sum += fours.valuesP1;
    if (fives.lockedP1) p1Sum += fives.valuesP1;
    if (sixes.lockedP1) p1Sum += sixes.valuesP1;

    if (aces.lockedP2) p2Sum += aces.valuesP2;
    if (twos.lockedP2) p2Sum += twos.valuesP2;
    if (threes.lockedP2) p2Sum += threes.valuesP2;
    if (fours.lockedP2) p2Sum += fours.valuesP2;
    if (fives.lockedP2) p2Sum += fives.valuesP2;
    if (sixes.lockedP2) p2Sum += sixes.valuesP2;

    console.log("p1sum: ", p1Sum, "  p2sum: ", p2Sum);

    if (p1Sum >= 20) {
      //63
      setBonus({ ...bonus, valuesP1: 50 });
    }
    if (p2Sum >= 20) {
      setBonus({ ...bonus, valuesP2: 50 });
    }
  };

  const handleTurnChange = (changeTurn) => {
    //console.log("changeTurn");
    let howManyRolls = roll;
    if (changeTurn === false) {
      //console.log("changeTurn");
      howManyRolls++;
      setRoll(howManyRolls);
    } else {
      howManyRolls = 3;
      setRoll(0);
      //if (config.singlePlayerMode === false) {
      setTurn(turn === 1 ? 2 : 1);
      disablePlayer1Divs();
    }
    //}
  };

  const setScoreDivUnactive = (e) => {
    //let scoreDiv = e.target.parentElement;
    //console.log("una", scoreDiv.classList);
    //scoreDiv.classList.add("scoreDivUnactive");
    //scoreDiv.classList.add("scoreDivUnactive");
    //console.log("una", scoreDiv.children);
  };

  const disablePlayer1Divs = () => {
    /*
    if (turn === 1) {
      let p1ScoreDivs = document.getElementsByClassName("scoreDivP1");
      let p2ScoreDivs = document.getElementsByClassName("scoreDivP2");
      //sp1ScoreDivs.classList.add("scoreDivP1Unactive");
      for (let i = 0; i < p2ScoreDivs.length; i++) {
        p1ScoreDivs[i].classList.remove("scoreDivUnactive");
        p2ScoreDivs[i].classList.add("scoreDivUnactive");
      }
    }
    if (turn === 2) {
      let p1ScoreDivs = document.getElementsByClassName("scoreDivP1");
      let p2ScoreDivs = document.getElementsByClassName("scoreDivP2");
      //console.log("divit", p2ScoreDivs.HTMLCOLLECTION);
      //sp1ScoreDivs.classList.add("scoreDivP1Unactive");
      for (let i = 0; i < p2ScoreDivs.length; i++) {
        p2ScoreDivs[i].classList.remove("scoreDivUnactive");
        p1ScoreDivs[i].classList.add("scoreDivUnactive");
      }
    }
    
  };
  
  const handleScoreVisibility = () => {
    if (multiplayerPlayer1 && turn === 1) {
      return "Score";
    }
    if (multiplayerPlayer1 && turn === 2) {
      return "Score-unclickable";
    }
    if (multiplayerPlayer2 && turn === 1) {
      return "Score-unclickable";
    }
    if (multiplayerPlayer2 && turn === 2) {
      return "Score";
    }
  };

  const handleDiceVisibility = () => {
    if (multiplayerPlayer1 && turn === 1) {
      return "Dices";
    }
    if (multiplayerPlayer1 && turn === 2) {
      return "Dices Dices-unclickable";
    }
    if (multiplayerPlayer2 && turn === 1) {
      return "Dices Dices-unclickable";
    }
    if (multiplayerPlayer2 && turn === 2) {
      return "Dices";
    }
  };

  const randomDice = () => {
    console.log("random dice");
    setDices([1, 3, 2, 2, 2]);
  };

  const showRollIcons = () => {
    //console.log("showrollicons", roll);
    if (roll === 0)
      return (
        <span>
          <FontAwesomeIcon icon={faDice} /> <FontAwesomeIcon icon={faDice} /> <FontAwesomeIcon icon={faDice} />{" "}
        </span>
      );
    if (roll === 1)
      return (
        <span>
          <FontAwesomeIcon icon={faDice} /> <FontAwesomeIcon icon={faDice} />{" "}
        </span>
      );
    if (roll === 2) return <FontAwesomeIcon icon={faDice} />;
  };

  const action = () => {
    if (!(aces.lockedP1 && aces.lockedP2)) isAces();
    if (!(twos.lockedP1 && twos.lockedP2)) isTwos();
    if (!(threes.lockedP1 && threes.lockedP2)) isThrees();
    if (!(fours.lockedP1 && fours.lockedP2)) isFours();
    if (!(fives.lockedP1 && fives.lockedP2)) isFives();
    if (!(sixes.lockedP1 && sixes.lockedP2)) isSixes();

    //calculateFirstTotal();
    //isBonus();

    if (!(altPair.lockedP1 && altPair.lockedP2)) alternativeisPair();
    if (!(triple.lockedP1 && triple.lockedP2)) isTriples();
    if (!(fourOfaKind.lockedP1 && fourOfaKind.lockedP2)) isFourOfaKind();
    if (!(yatzy.lockedP1 && yatzy.lockedP2)) isYatzy();
    if (!(smallStraight.lockedP1 && smallStraight.lockedP2)) isSmallStraight();
    if (!(bigStraight.lockedP1 && bigStraight.lockedP2)) isBigStraight();
    if (!(twoPairs.lockedP1 && twoPairs.lockedP2)) isTwoPairs();
    if (!(fullHouse.lockedP1 && fullHouse.lockedP2)) isFullHouse();
    if (!(chance.lockedP1 && fullHouse.lockedP2)) isChance();
  };
  */
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/*
        turn {turn}
        <button
          onClick={() => {
            randomDice();
          }}
        >
          btn
        </button>
        <br></br>
        roll {roll} */}
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/online-menu" element={<OnlineMenu roomName={roomName} setRoomName={setRoomName} username={username} setUsername={setUserName} socket={socket} setSocket={setSocket} />} />
          <Route path="/searching-menu" element={<SearchingMenu />} />
          <Route path="/game" element={<Game config={config} />} />
          <Route path="/mp-game" element={<MultiplayerGame multiplayerPlayer1={multiplayerPlayer1} setMultiplayerPlayer1={setMultiplayerPlayer1} multiplayerPlayer2={multiplayerPlayer2} setMultiplayerPlayer2={multiplayerPlayer2} socket={socket} setSocket={setSocket} roomName={roomName} config={config} username={username} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

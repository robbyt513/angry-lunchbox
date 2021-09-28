
const renderEl = document.getElementById("render-el");
const newRandomHitEl = document.getElementById("newrandomhit-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


const welcomeEl = document.getElementById("welcome-el")

function greetUser() {
    welcomeEl.textContent = "Welcome back, Jackie!! 👋"    
}

const getOutcome = () => {
    let swing = ["Ball", "Strike", "Single", "Double", "Triple", "Home Run", "Groundout", "Flyout"];
       return swing[Math.floor(Math.random() * swing.length)]
}

function finalOutcome() {
    let outcome = getOutcome();
        switch (outcome) {
            case "Ball":
                console.log("Ball");
                break;
            case "Strike":
                console.log("Strike");
                break;
            case "Single":
                console.log("Single");
            break;
            case "Double":
                console.log("Double");
                break;
            case "Triple":
                console.log("Triple");
                break;
            case "Home Run":
                console.log("Home Run");
                break;
            case "Groundout":
                console.log("Groundout");
                break;
            case "Flyout":
                console.log("Flyout");
                break;
            default:
                console.log("Sit Down");
        }
    }

const opponentTurn = () => {
        return (Math.floor(Math.random() * 3))
     }


function opponentOutcome() {
    let outcome = opponentTurn();
        switch (outcome) {
        case 0:
            console.log("No runs scored");
            break;
        case 1:
            console.log("One run scored");
            break;
        case 2:
            console.log("Two runs scored");
            break;
        default:
            console.log("Retire Scrub");
    }
}

const addPlayer = (firstName, lastName, age) => {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player)
};




  class Player {
      constructor(name) {
          this._name = name
          this._battingAverage = battingAverage
          this._OBP = OBP
          this._isAtBat = false
          this._hits = []
      }
      get name () {
          return this._name
      }
      get battingAverage () {
          return this._battingAverage
      }
      get OBP () {
          return this._OBP
      }
      get isAtBat () {
          return this._isAtBat
      }
      get hits () {
          return this._hits
      }
      set hits(value) {
          this._hits = value
      }
      toggleAtBat() {
        this.isAtBat = !this.isAtBat
      }
  }

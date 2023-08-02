
const App = () => {

  const [breakLength, setBreakLength] = React.useState(5); /* User Story #5: by default displays a value of 5 */
  const [sessionLength, setSessionLength] = React.useState(25); /* User Story #6: by default displays a value of 25 */

  const [timeLeft, setTimeLeft] = React.useState(1500);

  const [pomodoro, setPomodoro] = React.useState("SESSION"); //User Story #7: that contains a string indicating a session is initialized (e.g. "Session").Timer Title switch
  
  const [play, setPlay] = React.useState(false);
  
  /* User Story #19: 
  If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format 
  (decrementing by a value of 1 and updating the display every 1000ms). */
  const timeout = setTimeout(() => {
    if(timeLeft && play){
      setTimeLeft(timeLeft - 1)
    }
  }, 1000);
  
  /* User Story #12: 
  When I click the element with the id of break-decrement, 
  the value within id="break-length" decrements by a value of 1, 
  and I can see the updated value. 
  User Story #16: 
  I should not be able to set a session or break length to <= 0. */
  const decreaseBreak = () => {
    if(breakLength > 1){
      setBreakLength(breakLength - 1)
    }
  }

  /* User Story #13: 
  When I click the element with the id of break-increment, 
  the value within id="break-length" increments by a value of 1, 
  and I can see the updated value.
  User Story #17: 
  I should not be able to set a session or break length to > 60 */
  const IncreaseBreak = () => {
    if(breakLength < 60){
      setBreakLength(breakLength + 1)
    }
  }
  
  /* User Story #14: 
  When I click the element with the id of session-decrement, 
  the value within id="session-length" decrements by a value of 1, 
  and I can see the updated value.
  User Story #16: 
  I should not be able to set a session or break length to <= 0. */
  const decreaseSession = () => {
    if(sessionLength > 1){
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
    }
  }

  /* User Story #15: 
  When I click the element with the id of session-increment, 
  the value within id="session-length" increments by a value of 1, 
  and I can see the updated value. */
  const increaseSession = () => {
    if(sessionLength < 60){
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }
  
  /* User Story #11: 
  When I click the element with the id of reset, any running timer should be stopped, 
  the value within id="break-length" should return to 5, 
  the value within id="session-length" should return to 25, 
  and the element with id="time-left" should reset to its default state. */
  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5); 
    setSessionLength(25); 
    setPomodoro("SESSION"); 
    const audio = document.getElementById("beep");
    audio.pause()
    audio.currentTime = 0;
  }
  
  /* User Story #18: 
  When I first click the element with id="start_stop", 
  the timer should begin running from the value currently displayed in id="session-length", 
  even if the value has been incremented or decremented from the original value of 25. 
  User Story #20: 
  If the timer is running and I click the element with id="start_stop", the countdown should pause.
  User Story #21: 
  If the timer is paused and I click the element with id="start_stop", 
  the countdown should resume running from the point at which it was paused.*/
  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  }
  
  
  /* User Story #22: 
  When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, 
  the element with the id of timer-label should display a string indicating a break has begun. 
  User Story #23: 
  When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, 
  counting down from the value currently displayed in the id="break-length" element.
  User Story #24: 
  When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, 
  the element with the id of timer-label should display a string indicating a session has begun.
  User Story #25: 
  When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, 
  counting down from the value currently displayed in the id="session-length" element.
  User Story #26: 
  When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. 
  This should utilize an HTML5 audio tag and have a corresponding id="beep".
  User Story #27: 
  The audio element with id="beep" must be 1 second or longer.
  User Story #28: 
  The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.*/
  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if(!timeLeft && pomodoro === "SESSION"){
      setTimeLeft(breakLength * 60)
      setPomodoro("BREAK")
      audio.play()
    }
    if(!timeLeft && pomodoro === "BREAK"){
      setTimeLeft(sessionLength * 60)
      setPomodoro("SESSION")
      audio.pause()
      audio.currentTime = 0;
    }
  }
  
  const clock = () => {
    if(play){
      timeout
      resetTimer()
    }else {
      clearTimeout(timeout)
    }
  }
  
  React.useEffect(() => {clock()}, [play, timeLeft, timeout])
 

  /* User Story #8: 
  id="time-left". 
  Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00). */
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const secondsInFormat = seconds < 10 ? '0' + seconds : seconds;
    const minutesInFormat = minutes < 10 ? '0' + minutes : minutes;
    
    return `${minutesInFormat}:${secondsInFormat}`;
  }
  
  const title = pomodoro === "SESSION" ? "Session" : "Break";

    return (
    <div>
    <div class="container">
        <div class="brand">
        <h1>Pomodoro<br></br>25 + 5 Clock</h1>
      </div>

          <div class="length">

            {/* User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length"). */}
            <div id="break-label" class="controller">Break Length</div>

              <div class="break-controller">

                {/* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement". */}
                <a id="break-decrement" disabled={play} onClick={decreaseBreak} ><i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                  
                  {/* User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5. */}
                  <div id="break-length" class="label-text">{breakLength} </div>
                
                {/* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment" */}
                <a id="break-increment" disabled={play} onClick={IncreaseBreak}><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
              </div>

            {/* User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length"). */}
            <div id="session-label" class="controller">Break Length</div>
              <div class="session-controller">

                {/* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement". */}
                <a id="session-decrement" disabled={play} onClick={decreaseSession}><i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                  
                  {/* User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25. */}
                  <div id="session-length" class="label-text"> {sessionLength} </div>
                
                {/* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment" */}
                <a id="session-increment" disabled={play} onClick={increaseSession}><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
              </div>
          </div>
      

          <div class="timer">

            {/* User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session"). */}
            <h3 id="timer-label"> {title} </h3>
              <div class="display">

                {/* User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00). */}
                <div id="time-left"> {formatTime()} </div>
              </div>
          </div>

          <div class="timer-controller">

            {/* User Story #9: I can see a clickable element with a corresponding id="start_stop". */}
            <a id="start_stop" onClick={handlePlay}><i class="fa fa-play" aria-hidden="true"><i class="fa fa-pause" aria-hidden="true"></i></i></a>
            <div></div>
            {/* User Story #10: I can see a clickable element with a corresponding id="reset". */}
            <a id="reset" onClick={handleReset}><i class="fa fa-refresh" aria-hidden="true"></i></a>
          </div>

          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    
      </div>
    </div>
    );
  }

ReactDOM.render(<App/>, document.getElementById('app'))

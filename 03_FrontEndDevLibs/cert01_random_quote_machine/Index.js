
function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("red")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
                const colors = [
                    "red", "green", "blue", "cyan", "magenta", "yellow", "orange", "grey", "black"
                ];

            let randomIndex = Math.floor(Math.random() * quotes.length);
            let randColorIndex = Math.floor(Math.random() * quotes.length);
            
            setRandomQuote(quotes[randomIndex])
            setColor(colors[randColorIndex])
    }



    return (
        <div 
            style={{backgroundColor: color, color: color, minHeight: "100vh"}} >

        <div id="quote-box" className="container pt-5">
            <div id="quote-box" className="jumbotron"  >
                <div id="quote-box" className="card" 
                 >
                    
                    <div id="quote-box" className="card-body">
                        {randomQuote ? (
                            <  >
                            <h2  style={{textAlign: "center"}} id="text" className="card-title"><strong>&quot;{randomQuote.text}</strong></h2>
                            <h4 style={{textAlign: "right"}} id="author" className="card-text">- <em>{randomQuote.author || "Unknown Author"}</em> </h4>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}
                        <div id="quote-box" className="new-quote">
                            

                            <a className="btn btn-primary" id="tweet-quote" href= {"https://twitter.com/intent/tweet?text=" +
                                encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)}
                            target="_blank">
                                <i className="fa fa-twitter" ></i>
                            </a>
                            <a className="btn btn-primary" href="" >
                            <i className="fa fa-tumblr" ></i>

                            </a>
                            <button  id="new-quote" className="btn btn-primary ml-3" onClick={getNewQuote} >New Quote</button>
                        </div>
                    </div>
                    <div style={{textAlign: "center", fontSize: "small"}} className="card-footer">by Carlos Reinis</div>
                </div>
            </div>
        </div>

        </div>
    );
}

//Quote Machine Seed from the site https://type.fit/api/quotes

ReactDOM.render(<App/>, document.getElementById('app'))
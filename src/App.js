import Container from "./components/Container/Container";
import "./App.scss";
import Actions from "./components/Actions/Actions";
import { useEffect, useState } from "react";
import axios from "axios";
import variable from "./sass/variables.scss";

const backGroundColor = Object.values(variable);

function App() {
  const [data, setData] = useState({});
  const [fetch, setFetch] = useState(false);
  const [color, setColor] = useState(backGroundColor[0]);
  const [opacity, setOpacity] = useState(false);

  console.log(opacity);
  const fetchNewQuote = () => {
    setFetch(!fetch);
  };

  const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 7);

    setOpacity(true);
    setColor(backGroundColor[randomNumber]);
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      setData(response.data);
    };
    randomColor();
    fetchQuote();
  }, [fetch]);

  return (
    <div style={{ backgroundColor: `${color}` }} className="app">
      <Container>
        <div
          style={{ color: color }}
          className={`${opacity ? "text-animation" : ""} content`}
          onAnimationEnd={() => setOpacity(false)}
        >
          {data.quote && (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                fill="currentColor"
                className="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </span>
          )}
          {data.quote}
        </div>
        <p style={{ color: color }} className="author">
          {data.quote && `- ${data.author}`}
        </p>
        <Actions color={color} fetchNewQuote={fetchNewQuote} />
      </Container>
      <span>by Anh Bui</span>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selCoins, setSelCoins] = useState("0");
  const [result, setResult] = useState("0");


  const onChange = (event) => {
    setSelCoins(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const priceUSD = event.target[0].value;
    calculate(priceUSD);
  }

  const calculate = (priceUSD) => {
    setResult(priceUSD * selCoins);
  }


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, []); // 빈 배열이면 한번만 동작

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading
        ? <strong>Loading....</strong>
        : <select onChange={onChange}>
          {coins.map((coin, index) =>
            <option
              key={index}
              value={coin.quotes.USD.price}
            >{coin.name} : {coin.quotes.USD.price}
            </option>
          )}
        </select>}
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="write us dollars" />
        <button>change coins</button>
      </form>
      <h2>you can change {result} coins!</h2>
    </div>
  );
}

export default App;

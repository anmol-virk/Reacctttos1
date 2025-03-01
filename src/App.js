import { useState } from "react";
import "./styles.css";

const PositiveNegative = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Positive and Negative</h1>
      <p>Count: {count}</p>
      <p>The Count is {count >= 0 ? "Positive" : "Negative"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

const UserLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    if (name && password) {
      setFormData(true);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      {!formData ? (
        <form onSubmit={formHandler}>
          <label htmlFor="userName">Username: </label>
          <input
            type="text"
            id="userName"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <h1>Welcome, {name}</h1>
      )}
    </div>
  );
};

const TempConverter = () => {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const celciusHandler = (event) => {
    let value = event.target.value;
    setCelcius(value);
    setFahrenheit((value * 9) / 5 + 32);
  };

  const fahrenheitHandler = (event) => {
    let value = event.target.value;
    setFahrenheit(value);
    setCelcius((value - 32) * (5 / 9));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <form>
        <label htmlFor="celcius">Celcius: </label>
        <input
          id="celcius"
          type="number"
          value={celcius}
          onChange={celciusHandler}
        />
        <br />
        <br />
        <label htmlFor="fahrenheit">Fahrenheit: </label>
        <input
          id="fahrenheit"
          type="number"
          value={fahrenheit}
          onChange={fahrenheitHandler}
        />
      </form>
    </div>
  );
};

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const addItemsToCart = (productName, productPrice) => {
    const updatedProducts = [
      ...products,
      { name: productName, price: productPrice },
    ];
    setProducts(updatedProducts);
    setTotalPrice(totalPrice + productPrice);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => addItemsToCart("Product A", 10)}>
        Add Product A
      </button>
      <button onClick={() => addItemsToCart("Product B", 20)}>
        Add Product B
      </button>
    </div>
  );
};

const QuizApp = () => {
  const questions = [
    "What is the national bird of India?",
    "How many colors are there in Indian flag?",
    "What is the color of sky?",
  ];
  const [que, setQue] = useState(0);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);

  const nextQueHandler = () => {
    if (que < questions.length - 1) {
      setQue(que + 1);
      setAnswer("");
    } else {
      setCompleted(true);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {!completed ? (
        <>
          <p>{questions[que]}</p>
          <input
            id="answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
          <button onClick={nextQueHandler}>Next</button>
        </>
      ) : (
        <p>You answered all questions!</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <PositiveNegative />
      <br />
      <UserLogin />
      <br />
      <TempConverter />
      <br />
      <ShoppingCart />
      <br />
      <QuizApp />
    </div>
  );
}

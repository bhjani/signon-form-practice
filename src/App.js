import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <form>
          <label htmlFor="username" name="username">
            Username:
            <br />
            <input type="text" value="username" />
            <br />
          </label>
          <label htmlFor="password" name="password">
            Password:
            <br />
            <input type="text" value="password" />
          </label>
          <br />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
}

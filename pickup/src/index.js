import App from "./App"
import "./App.css"
import ReactDOM from "react-dom/client";

function Render() {
  return (
    <App />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Render />);
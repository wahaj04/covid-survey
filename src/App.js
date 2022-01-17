import QuestionsContext from "./context";
import Routes from "./routes/Routes";


function App() {
  return (
    <div>
    <QuestionsContext>

    <Routes />
    </QuestionsContext>
    </div>
  );
}

export default App;

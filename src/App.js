import { Popover, Button } from "@adverity/design-system";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Popover
        trigger={<Button>Open Popover</Button>}
        onClose={() => console.log("on close")}
      >
        Example popover content.
      </Popover>
    </div>
  );
}

export default App;

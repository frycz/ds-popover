import { Popover, Button } from "@adverity/design-system";
import "./App.css";

function App() {
  return (
    <div>
      <ul>
        <li>Open developer console</li>
        <li>Press Open Popover</li>
        <li>Close popover by clicking outside</li>
        <li>Keep clicking outside</li>
        <li>Result: onClose event is fired</li>
      </ul>
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

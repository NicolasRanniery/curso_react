import { Button } from "@/components/ui/button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gray-800 flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setCounter((counter) => counter + 1)}>
        O valor é: {counter}
      </Button>
    </div>
  );
}

export default App;

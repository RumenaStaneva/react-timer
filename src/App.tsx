import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    formRef.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={formRef}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />

        <p>
          <Button>Save</Button>
        </p>
      </Form>

      {/* <Input type="text" label="Test" id="test" ref={inputRef} /> */}

      {/* <Container as={Button}>Click</Container> */}
      {/* <Input type="text" label="name" id="name" />
      <Input type="number" label="your age" id="age" />

      <p>
        <Button>A button</Button>
      </p>

      <p>
        <Button href="https://google.com" target="_blank">
          A Link
        </Button>
      </p> */}
    </main>
  );
}

export default App;

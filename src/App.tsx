import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Container as={Button}>Click</Container>
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

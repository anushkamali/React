import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./components/context/CalcContext";

const btnValues = [
  ["clear", "÷"],
  ["7","8","9","-"],
  ["4","5","6","+"],
  ["1","2","3","="]
];

function App() {
  return (
    <CalcProvider>
    <Wrapper>
    <Screen />
    <ButtonBox>
      {btnValues.flat().map((btn, i) => (
        <Button value={btn} key={i}/>
      ))}
    </ButtonBox>
    </Wrapper>
    </CalcProvider>
  );
}

export default App;

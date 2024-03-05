import './App.css';
import styled from "styled-components";

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  color: #093545;
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px #000000;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px #000000;
  }
  &:active {
    box-shadow: 0px 0px 30px #000000;
  }
  &:focus {
    box-shadow: 0px 0px 40px #000000;
  }
`
function App() {
  return (
     <Title>Book App</Title>
  );
}

export default App;

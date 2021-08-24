import styled from 'styled-components'
import './App.css';

const StyledAppContainer = styled.div`
  padding: 90px 40px;
`

function App() {
  return (
    <StyledAppContainer className="App">
      <h1 className="title">
        SOUND RECORDER
      </h1>
    </StyledAppContainer>
  );
}

export default App;

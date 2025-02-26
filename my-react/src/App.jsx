import './App.css'
import MyButton from './Components/MyButton';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <MyButton text="Please Work" action={console.log("pressed")} />
      <NavBar />
    </>
  );

}

export default App
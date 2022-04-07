import logo from './logo.svg'; 
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
    <h1 className="text-3xl font-bold  mt-6 ml-5 font-link">
      My First React App
    </h1></header>
    <img src={logo} alt="Logo" className='w-96 '/>
    <div className='ml-5 para-font'>
    <li >I did react two years ago.Now, i forgot all concepts.I didn't code longtime. So, I will try my best to learn again.</li>
    <li>I don't want to loose my career again</li>
    <li>During this course i learned so many new things and i promise myself i will code daily and don't sit idle at home</li>
    </div>
  
    </div>
  );
}

export default App;

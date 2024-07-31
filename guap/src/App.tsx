// import Home from './Components/Home.tsx';
import SideBar from './Components/SideBar.tsx';
import Logo from './Assets/Logo.png';
import './output.css';
import Slider from './Components/Slider.tsx';

function App() {
  return (
    <div>
      <div className="flex bg-fundo-site bg-cover bg-no-repeat bg-center min-h-screen relative">
        <img src={Logo} alt="Logo" className="absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="absolute top-1/4 left-20  h-screen">
          <Slider />
          <h1 className='text-white mt-10'>HighLights</h1>
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;

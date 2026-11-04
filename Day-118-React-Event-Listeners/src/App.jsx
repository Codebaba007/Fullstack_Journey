import {useState , useEffect} from 'react';
import "./App.css";

function App(){
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(()=>{
    function handleResize(){
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('resize', handleResize);
    };
  },[]);
  return(
    <div className="Container">
     <h1>Window size Detector</h1>
     <div className="size-card">
      <h2>Width</h2>
      <p>{windowSize.width}px</p>
     </div>
     <div className="size-card">
      <h2>Height</h2>
      <p>{windowSize.height}px</p>
     </div>
    </div>
  );
}
export default App;
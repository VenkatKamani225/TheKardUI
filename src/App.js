
import App1 from './Components/SocialMedia1';
import profiles from './constants/MockData';
import './css/navbar.css';
import './css/SocialMedia1.css';
import FrontPage from './Components/FrontPage';
import { useState } from 'react';
import constants from './constants/MockData';

function App() {

  const [i,setI]= useState(0);
  const [account, setAccount] = useState(constants.profiles[i]);
  const { profiles, colors } =constants;

  console.log('inisde')
  return (

    <>
    <div className='Kard-Component' style={{backgroundColor: colors[profiles[i].socialMediaName]}}>
    
      <App1 props={account} />
   </div>
   <div className='SM-Buttons'>
    <button onClick={()=>{i===0 ? setAccount(profiles[0], setI(0)):setAccount(profiles[i-1], setI(i-1))}}>Previous</button>
    <button onClick={
      ()=>{i ===profiles.length-1 ? setAccount(profiles[i]):setAccount(profiles[i+1], setI(i+1))}
      } disabled={i ===profiles.length-1}>Next</button>
      /* Hello World*/

    </div>
    </>
  );
}

export default App;

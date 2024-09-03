import '../css/SocialMedia1.css';

function App1({ props }){
    console.log('inisde App1')
    return(
       <div className="card">
       <h1>{props.socialMediaName}</h1>
       <h2>{props.profileName}</h2>
       </div>
    );
}

export default App1;
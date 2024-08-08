import './App.css';


function Card({image, title, date}) {
  return(
    <div className='card'>
      <img src={require("./images/"+image+".png")} alt='/'></img>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <Card image="mustang-mach1" title="Mustang Mach 1" date="1969"></Card>
      <Card image="challenger" title="Dodge Challenger" date="1970"></Card>
      <Card image="charger" title="Dodge Charger" date="1969"></Card>
      <Card image="cuda" title="Plymouth Barracuda" date="1970"></Card>
      <Card image="ac-cobra" title="AC Cobra" date="1966"></Card>
      <Card image="cougar" title="Mercury Cougar" date="1967"></Card>
      <Card image="camaro" title="Chevrolet Camaro Z28" date="1968"></Card>
      <Card image="charger" title="Ford Mustang Boss 429" date="1970"></Card>
      <Card image="judge" title="Pontiac GTO Judge" date="1969"></Card>
      <Card image="charger" title="Mustang" date="12/02/2024"></Card>
      <Card image="charger" title="Mustang" date="12/02/2024"></Card>

    </div>
  );
}

export default App;

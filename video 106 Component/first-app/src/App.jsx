import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"

// New App using - Vite
// App.jsx - Entry point
// Components - App.jsx > navbar, card, footer
// Props - (props) - prop.title, props.desc 
// JSX - props, style in .jsx

function App() {      // App func() - component

  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title="Card 1" desc="Description of Card 1"/>   {/* title, desc - props */}
        <Card title="Card 2" desc="Description of Card 2"/>
        <Card title="Card 3" desc="Description of Card 3"/>
        <Card title="Card 4" desc="Description of Card 4"/>
      </div>

      <Footer/>
    </>
  )
}

export default App

import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Specialisation from "./components/Specialisation"

function App() {
  return (
      <div className="font-inter">
        <Header />
        <main>
          <About />
          <Services />
          <Specialisation />
          <Contact />
        </main>
      </div>
  )
}

export default App

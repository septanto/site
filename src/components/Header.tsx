function Header() {
  return (
    <header>
      <nav className="container mx-auto flex justify-end items-end p-6">
        <div>
          <a href="#about" className="px-4">About</a>
          <a href="#services" className="px-4">Services</a>
          <a href="#specialisation" className="px-4">Specialisation</a>
          <a href="#contact" className="px-4">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
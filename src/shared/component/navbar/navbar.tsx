import { useEffect } from 'react';
import './navbars.scss'

const Navbar = () => {

  useEffect(() => {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger-on');
    const navLinks = document.querySelector('.nav-links');
    let hamburgerOpen = false;

    hamburger?.addEventListener("click", function() {
      if (!hamburgerOpen) {
        navLinks?.classList.toggle("show-navlinks")
      } else {
        hamburger.classList.remove("show-navlinks");
        hamburgerOpen = false;
      }
    })
  }, [])
  

  return (
    <>
      <header>
        <a href="" className="logo">Learning Web</a>

        <div className="hamburger-on"></div>

        <ul className="nav-links">
          <li><a href="">Home</a></li>
          <li><a href="">Profile</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Action</a></li>
        </ul>
      </header>

      {/* <script>
        const header = document.querySelector('header');
        const hamburger = document.querySelector('.hamburger-on');
        const navLinks = document.querySelector('.nav-links');
        let hamburgerOpen = false;

        hamburger?.addEventListener("click", function() {
          if (!hamburgerOpen) {
            navLinks?.classList.toggle("show-navlinks")
          } else {
            hamburger.classList.remove("show-navlinks")
            hamburgerOpen = false
          }
        })
      </script> */}
    </>
  )
}

export default Navbar;
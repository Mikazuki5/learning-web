import React, { useEffect } from "react";
import './navbar.scss'
import NavbarLink from "./NavbarLink";

const Navbar = () => {

  useEffect(() => {
    console.log('hit')
    navbarHoverDropdown()
    window.onscroll = () => { scrollFunction() };

    const navbar: HTMLBaseElement = document.getElementById('project-navbar') as HTMLBaseElement;
    const sticky = 60;

    if(window.pageYOffset >= sticky) {
      navbar.classList.add('project-navbar-sticky');
      navbar.classList.add('project-navbar-bg-sticky');
      navbar.classList.add('shadow-sm');
    } else {
      navbar.classList.remove('project-navbar-swtick');
      navbar.classList.remove('project-navbar-bg-sticky');
      navbar.classList.remove('shadow-sm');
    }

    function scrollFunction() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("project-navbar-sticky")
          navbar.classList.add("project-navbar-bg-sticky")
          navbar.classList.add("shadow-sm");
          // navbarSlot.classList.add("scrolled");
      } else {
          navbar.classList.remove("project-navbar-bg-sticky")
          navbar.classList.remove("project-navbar-sticky");
          navbar.classList.remove("shadow-sm");
          // navbarSlot.classList.remove("scrolled");
      }
    }

  }, [])

  const navbarHoverDropdown = () => {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  }
  

  return (
    <nav className="navbar navbar-expand-lg bg-transparent d-flex align-items-start" id="project-navbar">
      <div className="col-6 d-block d-lg-none d-xl-none order-2 text-right my-sm-auto my-auto">
        <button className="navbar-toggler ml-auto d-lg-none d-xl-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav float-right" style={{ margin: "auto" }}>
            <NavbarLink isDropdown={false} singeLinkName={"Developer"} singleLinkRef={"developer"} />
            <NavbarLink isDropdown={false} singeLinkName={"About Us"} singeLinkRef={"about"} />
          </ul>
        </div>
      </div>

      <div className="col-6 col-md-6 col-lg-12 col-xl-12 order-1">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2 col-md-2 col-lg-2 align-self-center">
            <a className="navbar-brand" href="/">
              {/* responsive images */}
              <picture className="img-fluid">
                <source media="(min-width:992px)" srcSet="" className="w-100"/>
                <source media="(min-width:600px)" srcSet="" className="w-100"/>
                <img alt="" src={require('../../resIcon/logo.jpg')} style={{width: 'auto', height: '42px'}}/>
              </picture>
            </a>
          </div>

          <div className="col-12 col-lg-5 text-right text-md-right text-lg-center text-xl-center d-none d-lg-block mx-2">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav" style={{ margin: "auto" }}>
                <NavbarLink isDropdown={false} singeLinkName="Beranda" singeLinkRef="apa" />
                <NavbarLink isDropdown={false} singeLinkName="Pengajaran" singeLinkRef="apa" />
                <NavbarLink isDropdown={false} singeLinkName={"Video"} singeLinkRef={"https://wa.me/6287897759000"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
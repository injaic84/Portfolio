import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { sectionsIds } from './sectionIds';


 const NavBar = () => {
  //State to track active link a scroll state
  const [activeLink, setActiveLink] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  
  //function to transition from one page to another by their IDs 
  const scrollToSection = (sectionId) => {
    const element = document.getElementById (sectionId);
    if(element){
    const marginTop = 0;
    const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({top: scrollToY, behavior: "smooth"});
    }  
  }

//Function to determine the active section while scrolling
  const determineActiveSection = () => {
      for (let i = sectionsIds.length - 1; i >= 0; i--){
        const section = document.getElementById(sectionsIds[i]);
        if (section){
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120){
              // Set the active link based on the section ID
              setActiveLink(sectionsIds[i]);
              break;
          }
        }
      }
  };

  useEffect(() => {
      const handleScroll = () =>{
        if (window.scrollY > 300) {
          setIsScrolled(true);
        }
        else{
          setIsScrolled(false);
        }
        //Call the function to determine the active section while scrolling
          determineActiveSection();
      };
      window.addEventListener("scroll", handleScroll);

      //Remove the scroll event listner when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
  }, []);
  return (
    <nav className={isScrolled ? "scrolled" : ""}>
        <div className='container'>
                <div className='row'>
                    <div className='logo'>Carlos Injai</div>
	                    <ul className='menu-bar'>
                            {
                                sectionsIds.map((sectionId, i) => (
                                  <li key={i} onClick={() => scrollToSection (sectionId)}>
                                    <Link to="/"
                                    className={activeLink === sectionId ? "active" : ""}
                                    >
                                      {sectionId}
                                    </Link>
                                  </li>
                                ))
                            }
                        </ul>  
                    </div>
          </div>
    </nav>   
  )
};
export default NavBar
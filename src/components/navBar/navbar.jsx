import React from 'react'
import {Link} from 'react-router-dom'
import { sectionsIds } from './sectionIds';


 const NavBar = () => {
  return (
    <nav>
        <div className='container'>
                <div className='row'>
                    <div className='logo'>Carlos Injai</div>
	                    <ul className='menu-bar'>
                            {
                                sectionsIds.map((sectionId, i) => (
                                  <li key={i}>
                                    <Link to="/">{sectionId}</Link>
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
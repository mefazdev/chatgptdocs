import React, { useState } from "react";
import Link from "next/link";
import Menu from '../assets/mobile_menu.svg'
import Image from "next/image";
const Nav = ({ categories }) => {

  const [state,setState] = useState(false)

  return (

    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/" ><p style={{fontSize:'20px'}}>Artículo</p></Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">

          <ul className="uk-navbar-nav">
            <div className='menu__img' onClick={()=> setState(!state)}>
              <Image src={Menu}/>
            </div>
            {categories?.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`} >
                     <p className="uk-link-reset">{category.attributes.name}</p>
                      
                     
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      {state ?  <div className='nav__collapse'>
      {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`} style={{textDecoration:'none',color:'inherit'}}>
                    <p  className="uk-link-reset">{category.attributes.name}</p>
              
                  </Link>
                </li>
              )
            })}
      </div> : ''}
     
    </div>
    // <div>
    //   <nav className="uk-navbar-container" data-uk-navbar>
    //     <div className="uk-navbar-left">
    //       <ul className="uk-navbar-nav">
    //         <li>
    //           <Link href="/">
               
    //               Strapi Blog
           
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="uk-navbar-right">
    //       <ul className="uk-navbar-nav">
    //         {categories.map((category) => {
    //           return (
    //             <li key={category.id}>
    //               <Link href={`/category/${category.attributes.slug}`}>
                    
    //                 <p>{category.attributes.name}</p>
                      
                       
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Nav;
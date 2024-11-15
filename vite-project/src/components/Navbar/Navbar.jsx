import React from 'react'
import './Navbar.css'
import logo from './../../assets/imges/logo.svg'
import { GoChevronDown } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import plane from './../../assets/imges/plane.webp'

export default function Navbar({ x }) {
  return (
    <section className={x ? 'ED-navbar' : 'ED-navbar2'}>
      <div>
        <img src={logo} className='logo' />
      </div>

      <ul className='Menum'>
        <li>
          <Link to='/'>
            Home <IoIosArrowDown />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About</Link>
        </li>
        <li>Service <GoChevronDown /></li>
        <li>Pages <GoChevronDown /></li>
        <li>Blog <GoChevronDown /></li>
        <Link to='/contact' className='contact'>Contact</Link>
      </ul>

      <div className='side2'>
        <HiMagnifyingGlass />
        <LuShoppingCart />
        <button >GATE A QUOTE <IoMdArrowForward /> </button>
      </div>
      <div className='side3' >
        <FiAlignJustify />
      </div>
    </section>
  )
}

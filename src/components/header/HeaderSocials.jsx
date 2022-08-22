import React from 'react'
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ladislaogodocik/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/ladisgodo' target='_blank'><BsGithub /></a>
        <a href='https://api.whatsapp.com/send/?phone=543416153068&text&type=phone_number&app_absent=0' target='_blank'><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials
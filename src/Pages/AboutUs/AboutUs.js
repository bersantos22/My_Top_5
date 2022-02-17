import React from 'react'
import { FooterPage } from '../../Components/HomePage-Components/FooterPage/FooterPage'
import imgDev from '../../Components/images/web-developer-master-tn.svg'
import './index.css'

export function AboutUs(){

    return(
        <>
        <section className='sectionTop5'>
            
            <div className="textAll">

                <div className="smallTextTop">
                    <p>Web Developer</p>
                </div>

                <div className='bigText'>
                    <p>IRONHACK BOOTCAMP</p>
                </div>
                <div className='nameTop5'>
                    <p>Class 65 - Brazil/SP</p>
                </div>
            
            </div>

        </section>

        <section className='sectionAbout'>
        <div className='imgDeveloper'>
            <img className='photo' src={imgDev} alt='imgDeveloper' />
        </div>

        <div className='TextDeveloper'>
            <p>This is our second IronHack Bootcamp - Web Developer project, made by Bernardo Paes and Leninie Xavier, in less than a week of work.</p>
            <br></br>
            <p>The website <i>MyTop 5</i> is a project based on "React" for the improvement of (CRUDE- Create, Read, Update, Delete and Edit).</p>
            <br></br>
            <p>It used JavaScript, React, Vanilla CSS, Html and a bit of the Bulma library for the form.</p>
            <br></br>
            <p>We hope you enjoyed one of our first websites. As we also aim to improve <i>MyTop 5</i> ! See you in the next project !</p>
        </div>

        </section>
        <FooterPage/>
        </>
    )
}
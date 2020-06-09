 import React, { Component } from 'react'
 import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
 import Title  from './Title';
 
 export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Endless cocktails",
                info: "Like cocktails? Well we have you covered; forever. Drink to your hearts content."
            },
            {
                icon:<FaHiking />,
                title:"Hiking Adventures",
                info: "Need a change of scenery?  Join us for an adventure of a lifetime.  One you will never forget."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Car Service",
                info: "We will take you anywhere you want to go.  We are at your service."
            },
            {
                icon:<FaBeer />,
                title:"Specialty Beer",
                info: "Experience our selection of beer from around the world."
            }
        ]
    } 
    render() {
         return (
             <section className='services'>
                 <Title title='services' />
                 <div className='services-center'>
                     {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                </article>
                })}
             </div>
             </section>
         );
     }
 }
  
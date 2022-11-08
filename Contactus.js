import React, {Component} from 'react'

import contactus from '../src/images/contactus.gif'


export class Contactus extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render () {
        return (
            <section className="section"> 
            <div className="container">
            
            <div className='card-body'></div>
            <div className="col-md-12 text-center">          
            
            </div>
            <div className='underline mx-auto'></div>
           
            
            <div className="row">
                <div className="col-md-12 text-center">
                <h3 className ="main-heading"> Contact Us</h3></div>
               
                <div className="image">
                    <img src={contactus} alt="contactus" class="center"/>
                </div>
                <p>
                    
               <li>For queries related to Online orders
                             Please contact us at: <a href="http://localhost:3000/">prathyusha4501@gmail.com</a>
               </li>
               <li> For queries related to Care 4 All Store experience
                             Please contact us at: <a href="http://localhost:3000/">trishna367263@gmail.com</a>
               </li>
              
               <li>For Corporate and Bulk inquiries
                           Please contact us at: <a href="http://localhost:3000/"> wbhutia780@gmail.com</a> 
               </li> 
                </p>
                   
                <div className="col-md-4 text-center" id='box1'>
                    <h6>Our Goal and Mission</h6>
                    
                        <p2>
                            Care 4 All strives to provide the best experience for the user's welfare.
                        </p2>
                        </div>
               
            
                </div>
                     
            </div>
            </section>
        

        )
    }
}

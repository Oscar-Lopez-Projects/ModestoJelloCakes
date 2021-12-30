import React, { useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import '../styling/Order.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'antd/dist/antd.css'
import { TimePicker } from 'antd';
import UpdatedNavBar from './UpdatedNavBar';

const Order = () => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
    return (
        <>
            <NavBar />
            <UpdatedNavBar />
            <div className="center-order-box">
            <div className="Order-box">
                <h3>Place An Order </h3>
            <form>
                <div className="top-order-flex">
                <div className="three-inputs">
                       
                    <input className="input-order-div"  type="text" name="name" value="Name"/>

                    <input className="input-order-div" type="text" name="name" value="Enter Shape #" />
                    
                    
                        <select className="input-order-div">
                            <option>Select A Flavor </option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        <input className="input-order-div" type="text" name="name" value="Phone Number" />
                    
                </div>
        
                <div className="calender-side">
                    <Calendar 
                        value={dateState}
                        onChange={changeDate}
                    />
                    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                </div>
                </div>
                <div className="bottom-order-div">
                    <div className="left-order-div">
                        <h6 style={{textAlign:"left",width:"100%"}}>Describe Your Desire Cake</h6>
                        <textarea className="wide-text"></textarea>
                    </div>
                    <div className="right-order-div">
                    <TimePicker className="timer-clock-div" defaultValue={moment('13:30:56', 'HH:mm')} />    
                    <input className="image-div" accept="image/*" id="icon-button-file"
        type="file" />
                    </div>
                </div>
        
                <input className="button-submit" type="submit" value="Submit" />
                
              </form>
                
             </div>
             </div>
             <Footer />
        </>
    )
}

export default Order;

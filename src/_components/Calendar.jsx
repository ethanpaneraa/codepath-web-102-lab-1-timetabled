import React from "react"; 
import Event from "./Event";

export default function Calendar() {

    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' color='green' />
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                    </tr>    
                    <tr>
                        <td className="time">9 am</td>
                    </tr>  
                    <tr>
                        <td className="time">9 am</td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
import React from 'react'
import classes from './filter.module.css'

const Filter = (props) => {
    return (
        <div onClick={props.onClick} className={props.hide?classes.Filterhide:classes.Filtershow}>
            <p><svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-6.10352e-05 12.0001H5.99994V10.0001H-6.10352e-05V12.0001ZM-6.10352e-05 0.00012207V2.00012H17.9999V0.00012207H-6.10352e-05ZM-6.10352e-05 7.00012H11.9999V5.00012H-6.10352e-05V7.00012Z"
                        fill="white"
                        fillOpacity="0.8"/>
                </svg>Filters</p>
            <form className={props.hide?classes.Hide:''}>
                <hr/>
                <div>
                    <select className={classes.Drop} name="state">
                        <option value="Maharashtra">Maharashtra</option>
                    </select>
                </div>
                <div>
                    <select className={classes.Drop} name="city">
                        <option value="Panvel">Panvel</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter
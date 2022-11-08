import React from 'react';
import ReactDOM from 'react-dom';
import Countdown, { calcTimeDelta } from 'react-countdown';

const Completionist = () => <span className='text-md font-medium text-terraform'>You missed it :(</span>;

export default function WorkshopCountdown() {
  const timeDelta = calcTimeDelta('2022-11-23T16:00:00')
  return <>
    <Countdown
      date={Date.now() + timeDelta.total}
      intervalDelay={0}
      precision={3}
      autoStart={true}
      renderer={props => 
      <div>
        <span className='text-computas-secondary text-md font-bold'>{props.days} </span>
        <span className='text-white text-md font-bold mr-2'>Days </span>
        <span className='text-computas-secondary text-md font-bold'>{props.hours} </span>
        <span className='text-white text-md font-bold mr-2'>Hours </span>
        <span className='text-computas-secondary text-md font-bold'>{props.minutes} </span>
        <span className='text-white text-md font-bold mr-2'>Minutes </span>
        <span className='text-computas-secondary text-md font-bold'>{props.seconds} </span>
        <span className='text-white text-md font-bold'>Seconds </span>
      </div>}
    ></Countdown>
  </>
}
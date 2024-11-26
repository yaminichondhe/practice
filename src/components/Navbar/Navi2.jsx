import React from 'react'
import "./Navi2.css";

function Navi2() {
  return (
    <div className='N-container'>
        <div className='N-main'>
            <div className='N-left'>
                <div className='N-home'>
                    Home
                </div>
                <div className='N-stu'>
                    Student
                </div>
                <div className='N-tea'>
                    Teacher
                </div>
            </div>
            <div className='N-right'>
                <input type="text" />SEARCH
            </div>
        </div>
    </div>
  )
}
export default Navi2;

  

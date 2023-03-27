import React from 'react';
import '../base.css';
import './ProgressBar.css';

class ProgressBar extends React.Component {
  render() {
    const progressData = [
      {name: 'Cart', icon: 'fa-shopping-cart', active: true},
      {name: 'Delivery', icon: 'fa-truck', active: false},
      {name: 'Payment', icon: 'fa-credit-card', active: false},
      {name: 'Confirmation', icon: 'fa-check-circle', active: false},
    ]
    return (
      <div className='progress-bar-container'>
        <div className="progress-bar">
          {progressData.map((item) => (
            <div className={"bullet " + (item.active ? "active" : '')}>
              <div className="icon">
                <i className={"fas " + item.icon}></i>
              </div>{item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProgressBar;

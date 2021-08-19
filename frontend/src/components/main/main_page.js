import React from 'react';
import './main_page.css';
import Forest from '../forest/forest';

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div className='main-page-header'>
          <Forest />
        </div>
      </div>
    );
  }
}

export default MainPage;
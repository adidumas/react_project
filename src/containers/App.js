import React, {Component} from 'react';
import Books from './pages/books/books';
import Switch from "react-switch";

class App extends Component {
  state = {
    isDarkMode: false
  }

  changeViewMode = (checked) => {
    this.setState({ isDarkMode: checked });
  }

  render() {
    return (
        <div className={`wrapper ${this.state.isDarkMode ? 'dark-mode' : ''}`}>
          <div className="nav-content">
            <h3>React project</h3>
            <div className="view-switch">
              <p>Dark mode</p>
              <Switch className="switch" onChange={this.changeViewMode} checked={this.state.isDarkMode} />
            </div>
          </div>
          <div className="main-container">
            <Books />
          </div>
        </div>
    );
  }
}

export default App;

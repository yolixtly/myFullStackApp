import React from 'react';
import Header from './header';


class App extends React.Component {
    state = {
      pageHeader: "Naming Contests"
    };
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  render(){
    return (
  <div>
    <Header message={this.state.pageHeader}/>
    <div>
      {this.state.test}
    </div>
    <div className="text-right">
      Made by {this.props.name}
    </div>
  </div>
    );
  }
};

// defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component
App.defaultProps = {
  name: 'Yoli Anderson'
}

export default App;

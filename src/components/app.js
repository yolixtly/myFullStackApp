import React from 'react';
import Header from './header';
import GoalPreview from './goalPreview';



class App extends React.Component {
    state = {
      pageHeader: "Goals 2017",
    };
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  render(){
    var goals = this.props.goals.map(goal =>
      <GoalPreview {...goal} key={goal.id} />
    );
    return (
  <div>
    <Header message={this.state.pageHeader}/>
    <div>
        {goals}
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

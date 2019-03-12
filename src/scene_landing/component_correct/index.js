import React, { Component } from 'react';
import { connect } from 'react-redux';
import { continueGame } from 'service_game/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  continueGame: () => dispatch(continueGame()),
});

class index extends Component {
  componentDidMount() {
    console.log(this.props.game)
    setTimeout(() => {
      this.props.continueGame();
    }, 3000)
  }

  render() {
    return (
      <main role="main" className="cover">
        <form className="form" onSubmit={e => {
          e.preventDefault();
          this.props.startGame();
        }}>
          <div className="form-header">
            <h3>You guessed correctly!</h3>
            <p className="lead">Score: {this.props.game.score} </p>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
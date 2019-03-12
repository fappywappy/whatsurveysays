import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from 'service_game/actions';
import './styles.scss';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
});

class index extends Component {
  render() {
    return (
      <main role="main" className="cover">
        <form className="form" onSubmit={e => {
          e.preventDefault();
          this.props.startGame();
        }}>
          <div className="form-header">
            <h3>Wrong</h3>
            <p className="lead">Final Score: {this.props.game.finalScore} </p>
          </div>
          <div className="d-flex align-items-center flex-column button-group" >
            <button className="btn btn-lg btn-primary" type="submit">
              Play Again!
            </button>
            <button className="btn btn-lg btn-secondary" type="submit">
              Go Back to Home
            </button>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
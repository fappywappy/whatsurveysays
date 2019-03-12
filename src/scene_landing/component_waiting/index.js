import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from 'service_game/actions';

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
            <h3>Waiting</h3>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
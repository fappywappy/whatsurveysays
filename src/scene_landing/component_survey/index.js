import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initSurvey, getResults } from 'service_game/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  initSurvey: () => dispatch(initSurvey()),
  getResults: (selected) => dispatch(getResults(selected)),
});

class index extends Component {
  componentDidMount() {
    this.props.initSurvey();
    var radios = document.getElementsByName('exampleRadios');
    setTimeout(() => {
      let selectedRadio;
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          selectedRadio = radios[i].value;
  
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }

      this.props.getResults(selectedRadio);
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
            <h3>Survey</h3>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Second default radio
            </label>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
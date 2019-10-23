import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrainServices, setSelectedLine, showBikeHireCard } from './actions/trainServiceActions';
import MenuBar from './components/Menu';
import { bindActionCreators } from 'redux';
import { Segment } from 'semantic-ui-react';
import InfoCard from './components/InfoCard';
import PropTypes from 'prop-types';
import { isLineDisrupted, getDisruptedLines } from './utils/commonUtils';
import BikeHireContainer from './containers/BikeHireContainer';
import './App.css';
import Constants from './utils/constants';

class App extends Component {

  componentDidMount() {
    this.props.fetchServices(Constants.URLS.TRAIN_SERVICES);
  }

  render() {
    const {
      hasError,
      isLoading,
      services,
      isLineNotWorking,
      disruptedLines,
      setSelectedLine,
      showLineInfoCard,
      showBikeHireCard,
      showSearchCard
    } = this.props;

    if (hasError) {
      return <p>Some Error has occured. Please try again later...</p>
    }
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className="App">
        <MenuBar showBikeHireCard={showBikeHireCard} setSelectedLine={setSelectedLine} services={services} />
        <main>
          <section>
            <Segment color='grey' placeholder>
              {showLineInfoCard &&
                <InfoCard isServiceDown={isLineNotWorking} disruptedServices={disruptedLines} />
              }
              {showSearchCard &&
                <BikeHireContainer />
              }
            </Segment>
          </section>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services.items,
    isLoading: state.services.isLoading,
    hasError: state.services.hasError,
    isLineNotWorking: isLineDisrupted(state.services.selectedItem),
    disruptedLines: getDisruptedLines(state.services.selectedItem),
    showLineInfoCard: state.services.showLineInfoCard,
    showSearchCard: state.services.showSearchCard
  };
}

const mapDispatchToProps = dispatch => ({
  fetchServices: bindActionCreators(fetchTrainServices, dispatch),
  setSelectedLine: bindActionCreators(setSelectedLine, dispatch),
  showBikeHireCard: bindActionCreators(showBikeHireCard, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fetchServices: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  services: PropTypes.array.isRequired
}

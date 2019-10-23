import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikeHirePoints } from '../actions/bikeHireActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TypeAhead from '../components/TypeAhead';
import { getFilteredItems } from '../utils/commonUtils';
import Constants from '../utils/constants'

let searchText = ''

class BikeHire extends Component {

    handleSearchChange = (e, { value }) => {
        if (value) {
            searchText = value;
            this.props.fetchBikeHirePoints(`${Constants.URLS.BIKE_HIRE_POINTS}${value}`, value);
        }
    }

    render() {
        const { bikeHirePoints, isLoading } = this.props;
        return (
            <TypeAhead handleSearchChange={this.handleSearchChange} items={bikeHirePoints} isLoading={isLoading} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // get the bike hire points for the searched key
        bikeHirePoints: getFilteredItems(state.bikeHire.items, searchText),
        isLoading: state.bikeHire.isLoading,
        hasError: state.bikeHire.hasError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBikeHirePoints: bindActionCreators(fetchBikeHirePoints, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeHire)

BikeHire.propTypes = {
    fetchBikeHirePoints: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    bikeHirePoints: PropTypes.array,
    hasError: PropTypes.bool.isRequired
}
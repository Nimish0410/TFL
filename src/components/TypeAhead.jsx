import React from 'react';
import { Grid, Search, Card, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TypeAhead = (props) => {
    const { isLoading, items, handleSearchChange } = props;
    const resultRenderer = ({ commonName, lat, lon }) => <Label content={`${commonName} (${lat}, ${lon})`} />

    resultRenderer.propTypes = {
        commonName: PropTypes.string,
        lat: PropTypes.string,
        lon: PropTypes.string
    }
    return (
        <div>
            <Grid>
                <Grid.Column width={16}>
                    <Card centered>
                        <Card.Content>
                            Search your Bike Hire Point.
                        </Card.Content>
                        <Card.Content>
                            <Search
                                loading={isLoading}
                                onSearchChange={_.debounce(handleSearchChange, 1000, {
                                    leading: true,
                                })}
                                results={items}
                                resultRenderer={resultRenderer}
                            />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div >
    )
}

export default TypeAhead;

TypeAhead.propTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array
}

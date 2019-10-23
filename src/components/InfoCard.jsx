import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const InfoCard = ({ isServiceDown, disruptedServices }) => {
    return (
        <Grid>
            <Grid.Column width={16}>
                <Card centered>
                    <Card.Content>
                        <Card.Header>{isServiceDown ? "Service currently suffering disruptions" : "No service disruptions"}</Card.Header>
                    </Card.Content>
                    {disruptedServices.map((item, index) => {
                        return <Card.Content key={index}>
                            <Card.Header>{item.statusSeverityDescription}</Card.Header>
                            <Card.Description>{item.reason}</Card.Description>
                        </Card.Content>

                    })}
                </Card>
            </Grid.Column>
        </Grid>
    )
}
export default InfoCard;

InfoCard.propTypes = {
    isServiceDown: PropTypes.bool.isRequired,
    disruptedServices: PropTypes.array.isRequired,
}
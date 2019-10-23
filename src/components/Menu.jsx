import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { sorter, isLineAvailableAtNight, isLineDisrupted } from '../utils/commonUtils';

const MenuBar = ({ services, setSelectedLine, showBikeHireCard }) => {

    const handleItemClick = (item) => {
        setSelectedLine(item);
    }

    const handleBikeHire = () => {
        showBikeHireCard();
    }

    return (
        <div>
            <Menu pointing secondary>
                {services.sort(sorter).map((item, index) => {
                    return <Menu.Item key={index}
                        name={item.name}
                        onClick={(e) => handleItemClick(item, e)}>
                        {item.name}
                        {isLineAvailableAtNight(item) && <div className="night" />}
                        {isLineDisrupted(item) ? <div className="disrupted" /> : <div className="non-disrupted" />}

                    </Menu.Item>
                })}
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Bike Hire'
                        onClick={handleBikeHire}
                    />
                </Menu.Menu>
            </Menu>
        </div >
    )
}

export default MenuBar;

MenuBar.propTypes = {
    showBikeHireCard: PropTypes.func.isRequired,
    setSelectedLine: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired,
}

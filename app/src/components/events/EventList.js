import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import EventItem from './EventItem';
import { load_events } from '../../actions/event';



const EventList = ({ load_events, event_list }) => {
    useEffect(() => {
        load_events();
    }, [load_events]);
    console.log(event_list);
    const { loading, events } = event_list;

    return (
        <Fragment>
            {
                loading ? (
                    <Spinner />
                ) : (
                        <Fragment>
                            <h1 className='large text-primary'>Events</h1>
                            <div>
                                {
                                    events.length > 0 ? (
                                        events.map(event => (
                                            <EventItem key={event._id} title={event.title} start={event.start} end={event.end} />
                                        ))
                                    ) : (
                                            <h4>No events found...</h4>
                                        )
                                }
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}


EventList.propTypes = {
    load_events: PropTypes.func.isRequired,
    event_list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    event_list: state.event
});

export default connect(
    mapStateToProps,
    { load_events }
)(EventList);
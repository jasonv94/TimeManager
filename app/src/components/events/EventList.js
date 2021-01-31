import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { load_events } from '../../actions/event';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const EventList = ({ load_events, event_list }) => {
    useEffect(() => {
        load_events();
    }, [load_events]);
    console.log(event_list);
    const { loading, events } = event_list;

    const init_events = events.map((event, i) => {
        return {
            id: i,
            title: event.title,
            start: event.start + 'T12:00:00'
        }
    });

    console.log(init_events)

    return (
        <Fragment>
            {
                loading ? (
                    <Spinner />
                ) : (
                        <Fragment>
                            <h1 className='large text-primary'>Events</h1>

                            <div>
                                <FullCalendar
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    initialView='dayGridMonth'
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    //weekends={this.state.weekendsVisible}
                                    initialEvents={init_events}
                                    eventContent={renderEventContent}
                                />
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
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
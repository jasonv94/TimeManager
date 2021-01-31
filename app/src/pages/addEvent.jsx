import React from 'react';
import PropTypes from 'prop-types';


import TextField from "@material-ui/core/TextField";
import axios from "axios";



class AddEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            title: "",
            allDay: "no",
            start: "",
            end: "",
            url: "",
            backgroundColor: "",
            borderColor: "",
            textColor: "",
        };
        this.set_title = this.set_title.bind(this);
        this.set_allDay = this.set_allDay.bind(this);
        this.set_start = this.set_start.bind(this);
        this.set_end = this.set_end.bind(this);
        this.set_url = this.set_url.bind(this);
        this.set_backgroundColor = this.set_backgroundColor.bind(this);
        this.set_borderColor = this.set_borderColor.bind(this);
        this.set_textColor = this.set_textColor.bind(this);
        this.handle_submit = this.handle_submit.bind(this);
    }

        render() {
            const {title, allDay, start, end, url, backgroundColor, borderColor, textColor } = this.state;
            return (
                <div className="container">
                    <form>
                        <label>
                            <p>Title</p>
                            <TextField
                                inputProps={{"value": title}}
                                onChange={e => this.set_title(e.target.value)} />
                        </label>
                        <label>
                            <p>Start Date</p>
                            <TextField 
                                inputProps={{"value": start}}
                                type="date"
                                onChange={e => this.set_start(e.target.value)} />
                        </label>
                        <label>
                            <p>End Date</p>
                            <TextField 
                                inputProps={{"value": end}}
                                type="date"
                                onChange={e => this.set_end(e.target.value)} />
                        </label>
                        <label>
                            <p>Url</p>
                            <TextField 
                                inputProps={{"value": url}}
                                onChange={e => this.set_url(e.target.value)} />
                        </label>
                        <label>
                            <p>Background Color</p>
                            <TextField
                                type="color"
                                fullWidth="true"
                                inputProps={{"value": backgroundColor}}
                                onChange={e => this.set_backgroundColor(e.target.value)} />
                        </label>
                        <label>
                            <p>Text Color</p>
                            <TextField
                                type="color"
                                fullWidth="true"
                                inputProps={{"value": textColor}}
                                onChange={e => this.set_textColor(e.target.value)} />
                        </label>
                        <label>
                            <p>Border Color</p>
                            <TextField
                                type="color"
                                fullWidth="true"
                                inputProps={{"value": borderColor}}
                                onChange={e => this.set_borderColor(e.target.value)} />
                        </label>
                    <div>
                        <button type="submit" onClick={this.handle_submit}>Add</button>
                    </div>
                    </form>
                </div>

            )
        }

    
    set_title(title) {
        this.setState({title});
    }
    set_start(start) {
        this.setState({start});
    }
    set_end(end) {
        this.setState({end});
    }
    set_url(url) {
        this.setState({url});
    }
    set_allDay(allDay) {
        this.setState({allDay});
    }
    set_backgroundColor(backgroundColor) {
        this.setState({backgroundColor});
    }
    set_borderColor(borderColor) {
        this.setState({borderColor});
    }
    set_textColor(textColor) {
        this.setState({textColor});
    }
    handle_submit(e) {
        e.preventDefault();
        const {user_id, title, allDay, start, end, url, backgroundColor, borderColor, textColor } = this.state;
        console.log("Adding Event" + title);

        const config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios
            .post('http://localhost:5000/api/event', {user_id, title, allDay, start, end, url, backgroundColor, borderColor, textColor  }, config)
            .then(res => {
                console.log("successful:" + res.data + " " + this.props);
                //this.props.history.push("/overview");
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export default AddEvent

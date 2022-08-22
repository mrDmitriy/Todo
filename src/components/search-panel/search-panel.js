import React, {Component} from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);

    }

    render() {
        return (
            <div className="searchpanel">
                <div>
                    <input type="text" className="input_for_search form-control" placeholder=""
                           aria-label="Example text with button addon"
                           aria-describedby="button-addon1" value={this.state.term} onChange={this.onSearchChange}/>
                </div>
            </div>
        );
    }
}


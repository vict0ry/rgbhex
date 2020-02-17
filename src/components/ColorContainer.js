import React, {Component} from 'react'
import {canalChanged, changedChannelValue, hexChanged, refreshHex, refreshRGB} from "../actions/appActions";
import {connect} from "react-redux";

class ColorContainer extends Component {
    handleChannelChange(e) {
        this.props.dispatch(changedChannelValue(e.target.value));
        this.props.dispatch(refreshHex());
    };

    handleChannelSwitch(e) {
        this.props.dispatch(canalChanged(e.target.name));
    }

    handleHexChange(e) {
        this.props.dispatch(hexChanged(e.target.value));
        this.props.dispatch(refreshRGB(e.target.value));
    }

    render() {
        return (
            <div className="color-container">
                <div className="hex-container">
                    <div className="form-control">
                        <label htmlFor="hex">Hex</label>
                        <input onChange={this.handleHexChange.bind(this)} value={this.props.hexValue} name="hex"
                               type="text"/>
                    </div>
                </div>
                <div className="rgb-container">
                    <div className="form-control">
                        <label htmlFor="R">R</label>
                        <input onChange={this.handleChannelChange.bind(this)}
                               onClick={this.handleChannelSwitch.bind(this)} name="R" value={this.props.rValue}
                               type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="G">G</label>
                        <input onChange={this.handleChannelChange.bind(this)}
                               onClick={this.handleChannelSwitch.bind(this)} name="G" value={this.props.gValue}
                               type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="B">B</label>
                        <input name="B" onChange={this.handleChannelChange.bind(this)}
                               onClick={this.handleChannelSwitch.bind(this)} value={this.props.bValue}
                               type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ColorContainer);

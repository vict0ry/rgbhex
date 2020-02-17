import React, {Component} from 'react';

import {connect} from "react-redux";
import Slider from "rc-slider/lib/Slider";
import 'rc-slider/assets/index.css';
import {changedChannelValue, refreshHex} from "../actions/appActions";
import ColorContainer from "./ColorContainer";

class Home extends Component {
    handleSliderChange(event) {
        this.props.dispatch(changedChannelValue(event));
        this.props.dispatch(refreshHex());
    };


    render() {
        const bgStyle = {
            background: this.props.hexValue
        };
        return (
            <div className="App" style={bgStyle}>

                <ColorContainer rValue={this.props.rValue} gValue={this.props.gValue} bValue={this.props.bValue}
                                hexValue={this.props.hexValue}/>
                <div className="slider-wrapper">
                    <Slider min={0} max={255} onChange={(e) => {
                        this.handleSliderChange(e)
                    }} value={this.props.sliderValue}/>

                    <div className="slider-values">
                        <div className="value">Value: {this.props.sliderValue}</div>
                        <div className="channel">
                            For channel: {this.props.selectedChannel}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hexValue: state.colorValues.hexValue,
        sliderValue: Number(state.colorValues.rgbValue[state.colorValues.selectedChannel]),
        selectedChannel: state.colorValues.selectedChannel,
        rValue: state.colorValues.rgbValue.R,
        gValue: state.colorValues.rgbValue.G,
        bValue: state.colorValues.rgbValue.B
    }
};
export default connect(mapStateToProps)(Home);

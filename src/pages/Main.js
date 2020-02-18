import React, { Component } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SeriesTurkish from "../components/SeriesTurkish";
import ForeignSeries from "../components/ForeignSeries";
import ChannelType from "../components/ChannelType";
import Channels from "../components/Channels";
import DevicePromo from "../components/Devicepromo";
import Comments from "../components/Comments";
import Questions from "../components/Questions";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <SeriesTurkish />
        <ForeignSeries />
        <ChannelType />
        <Channels />
        <DevicePromo />
        <Comments />
        <Questions />
      </div>
    );
  }
}

export default Main;

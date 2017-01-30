import React from 'react';
import {connect} from 'react-redux';
import paper from 'paper';
import mvpPort from '../paper/mvpPort';
import paperjsSeed from '../redux/paperjsSeed';
export let pjs;

const styles = {
  paperCanvas: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#31B8B5'
  },
  /* Scale canvas with resize attribute to full size */
  canvas: {
    width: '100%',
    height: '100%',
  }
};

class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = document.getElementById('paperCanvas');
    pjs = this.canvas;
    paper.setup(this.canvas);
    paper.install(window);
    paperjsSeed();
  }

  componentWillReceiveProps(newprops) {
    this.props.paperFrames();
    if ( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return (
      <div id="test">
        <canvas id="paperCanvas" style={styles.paperCanvas}></canvas>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paperFrames: mvpPort,
    allChunks: state.allChunks,
    isPlaying: state.isPlaying
  };
};

export default connect(mapStateToProps)(P5Wrapper);

import Tone from 'tone';

//some overall compression to keep the levels in check
const masterCompressor = new Tone.Compressor({
	threshold: -6,
	ratio: 10,
	attack: 0.3,
	release: 0.6
});

//give a little boost to the lows
const lowBump = new Tone.Filter(210, 'lowshelf');

// a volume fader
// maybe this value passed in here could be retrieved from
// a redux store for values used by Tone
const masterGain = new Tone.Volume(-1);

//route everything through the filter
//and compressor before going to the speakers
export default masterGain.receive('masterBuss')
	.chain(lowBump, masterCompressor, Tone.Master);

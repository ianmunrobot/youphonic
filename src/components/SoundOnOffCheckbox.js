import React from 'react';
import { Checkbox } from 'material-ui';
import { VolumeOff, VolumeUp } from 'material-ui/svg-icons/av';


const styles = {
  checkbox: {
    marginBottom: 16,
    marginTop: 15,
    display: 'inline-flex'
  }
};

const SoundOnOffCheckbox = ({
  changeSynthEnabled,
  triggerSynthResponse
}) => {
  return (
    <div>
      <Checkbox
        checkedIcon={<VolumeUp />}
        uncheckedIcon={<VolumeOff />}
        style={styles.checkbox}
        label="enable sound"
        checked={triggerSynthResponse}
        onCheck={changeSynthEnabled}
      />
    </div>
  );
};

export default SoundOnOffCheckbox;

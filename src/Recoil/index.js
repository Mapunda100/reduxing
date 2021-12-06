import React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const fontSizeState =atom({
    default: 14,
    key: 'fontSizeState'
})

const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({ get }) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';

        return `${fontSize}${unit}`
    }
})


function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div className="offset-md-3 text-success"><b>Current font size: {fontSizeLabel}</b></div>

    <div>
      <button className="bg-primary col-md-4 offset-sm-2 p-2" onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>
       <b className="text-warning">ENLARGE</b>
      </button>
              <button className="bg-danger col-md-4 offset-sm-0 p-2"
                  onClick={() => { setFontSize(fontSize - 1) }}
                  style={{fontSize}}
              >RESET</button>
    </div>
      
          <div className="text-success offset-sm-3 p-2" style={{ fontSize }}>
              <b>This is how Recoil use values</b></div>
    </>
  );
}

export default FontButton;
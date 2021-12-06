import React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';

const userState = atom({
    key: 'userState',
    default: 'Sarah'
});


const userNameState = selector({
    key: 'userNameState',
    get: ({ get }) => {
        const userName = get(userState);

        return userName;
    }

})

function Test() {
    const name = useRecoilValue(userNameState);

    return <h3 className="text-light text-center bg-info">Your Name is { name}</h3>
}

export default Test;
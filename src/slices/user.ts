import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// store -> root reducer(state) -> user slice, order slice
// state.user.emil
// state.order
// state.ui

//action: state를 바꾸는 동작/행위
//dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직
// payload: dispatch로 입력된 데이터가 저장되어있다.

const initialState = {
  name: '',
  email: '',
  money: 0,
  accessToken: '',
  refreshToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMoney(state, action: PayloadAction<number>) {
      state.money = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;

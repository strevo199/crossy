import {createSlice} from '@reduxjs/toolkit';

export type AppSetting = {
  theme: 'light' | 'dark';
  gameGeneralDetails: {
    startNewGame: boolean;
    resetGame: boolean;
    resetUserDetail: boolean;
    totalGamePlay: number;
    totalWin: number;
    totalDraw: number;
    totalLose: number;
  };
  gameDeatils: {
    currentPlayer: string | null;
    nextPlayer: string | null;
    gameOver: boolean;
    refreshGame: boolean;
  };
  userDetail: {
    userWEmail: string | null;
    username: string | null;
    userCharacher: string | null;
  };
};

const initState: AppSetting = {
  theme: 'light',
  gameGeneralDetails: {
    startNewGame: false,
    resetGame: false,
    resetUserDetail: false,
    totalGamePlay: 0,
    totalWin: 0,
    totalDraw: 0,
    totalLose: 0,
  },
  gameDeatils: {
    currentPlayer: null,
    nextPlayer: null,
    gameOver: false,
    refreshGame: false,
  },
  userDetail: {
    userWEmail: null,
    username: null,
    userCharacher: null,
  },
};

export const appSettingSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {
    toggleTheme: state => {
      state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

import userReducer, {
  login,
  logout,
  editUserName,
  DO_NOT_INSERT_ID,
  DO_NOT_INSERT_NAME,
  DO_NOT_INSERT_PROFILE_IMAGE,
} from './user';

describe('user reducer', () => {
  const initialState = {
    isLogin: false,
    userId: 0,
    userName: '',
    profileImage: '',
  };

  it('initial value test', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      isLogin: false,
      userId: 0,
      userName: '',
      profileImage: '',
    });
  });

  it('login normal test', () => {
    const actual = userReducer(
      initialState,
      login({ userId: 4, userName: 'wook', profileImage: 'url' }),
    );
    expect(actual).toEqual({
      isLogin: true,
      userId: 4,
      userName: 'wook',
      profileImage: 'url',
    });
  });

  it('login abnormal test - no id', () => {
    const actual = userReducer(
      initialState,
      login({ userName: 'wook', profileImage: 'url' }),
    );
    expect(actual).toEqual({
      isLogin: false,
      userId: DO_NOT_INSERT_ID,
      userName: 'wook',
      profileImage: 'url',
    });
  });

  it('login abnormal test - no name', () => {
    const actual = userReducer(
      initialState,
      login({ userId: 4, profileImage: 'url' }),
    );
    expect(actual).toEqual({
      isLogin: false,
      userId: 4,
      userName: DO_NOT_INSERT_NAME,
      profileImage: 'url',
    });
  });

  it('login abnormal test - no image', () => {
    const actual = userReducer(
      initialState,
      login({ userId: 4, userName: 'wook' }),
    );
    expect(actual).toEqual({
      isLogin: false,
      userId: 4,
      userName: 'wook',
      profileImage: DO_NOT_INSERT_PROFILE_IMAGE,
    });
  });

  it('login abnormal test - no input', () => {
    const actual = userReducer(initialState, login());
    expect(actual).toEqual({
      isLogin: false,
      userId: DO_NOT_INSERT_ID,
      userName: DO_NOT_INSERT_NAME,
      profileImage: DO_NOT_INSERT_PROFILE_IMAGE,
    });
  });

  it('logout normal test', () => {
    const actual = userReducer(initialState, logout());
    expect(actual).toEqual({
      isLogin: false,
      userId: 0,
      userName: '',
      profileImage: '',
    });
  });

  it('should handle editUserName', () => {
    const actual = userReducer(
      initialState,
      editUserName({
        userName: 'newName',
      }),
    );
    expect(actual).toEqual({
      isLogin: false,
      userId: 0,
      userName: 'newName',
      profileImage: '',
    });
  });
});

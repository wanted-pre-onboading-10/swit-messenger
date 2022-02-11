import modalReducer, { open, close } from './modal';

describe('modal reducer', () => {
  const initialState = {
    isModalOpen: false,
  };

  it('initial value test', () => {
    expect(modalReducer(undefined, { type: 'unknown' })).toEqual({
      isModalOpen: false,
    });
  });

  it('modal open test', () => {
    const actual = modalReducer(initialState, open());
    expect(actual).toEqual({
      isModalOpen: true,
    });
  });

  it('modal close test', () => {
    const actual = modalReducer(initialState, close());
    expect(actual).toEqual({
      isModalOpen: false,
    });
  });
});

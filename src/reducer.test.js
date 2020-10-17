import reducer, { initialState } from './reducer';

import actions, { ADD_RESTAURANT, CHANGE_RESTAURANT_INPUT } from './actions';

describe('reducer', () => {
  describe(ADD_RESTAURANT, () => {
    it('add restaurant to the list', () => {
      // Given
      const previousState = {
        newId: 1,
        restaurants: [],
        name: '호호식당',
        category: '양식',
        address: '서울 성동구',
      };
      const action = actions.addRestaurant('이름 | 분류 | 주소');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({
        newId: 2,
        restaurants: [{ id: 1, value: '이름 | 분류 | 주소' }],
        name: '',
        category: '',
        address: '',
      });
    });
  });

  describe(CHANGE_RESTAURANT_INPUT.NAME, () => {
    it('changes restaurant name', () => {
      // Given
      const previousState = { name: '' };
      const action = actions.changeRestaurantInput('name', '마포설렁탕');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ name: '마포설렁탕' });
    });
  });

  describe(CHANGE_RESTAURANT_INPUT.CATEGORY, () => {
    it('changes restaurant category', () => {
      // Given
      const previousState = { category: '' };
      const action = actions.changeRestaurantInput('category', '한식');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ category: '한식' });
    });
  });

  describe(CHANGE_RESTAURANT_INPUT.ADDRESS, () => {
    it('changes restaurant address', () => {
      // Given
      const previousState = { ADDRESS: '' };
      const action = actions.changeRestaurantInput('address', '서울 강남구');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ address: '서울 강남구' });
    });
  });

  context('without any matched type', () => {
    it('returns state', () => {
      // Given
      const previousState = {
        newId: 1,
        restaurants: [],
        name: '마녀주방',
        category: '한식',
        address: '서울 강남구',
      };
      const action = { type: 'NOTHING' };

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject(previousState);
    });
  });

  context('without state', () => {
    it('use initialState', () => {
      // Given
      const action = { type: null };

      // When
      const state = reducer(undefined, action);

      // Then
      expect(state).toMatchObject(initialState);
    });
  });
});

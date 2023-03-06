import Vue from 'vue';
import Vuex from 'vuex';

import { generateRandom } from '@/helpers/math-helpers';
import { User } from '@/User';

Vue.use(Vuex);

type AppState = {
  'users': User [],
  'firstUser': User | undefined,
  'secondUser': User | undefined
}

export default new Vuex.Store({
  state: (): AppState => ({
    'users': [],
    'firstUser': undefined,
    'secondUser': undefined,
  }),
  getters: {
    users (state): User[] {
      return state.users;
    },
    getFirstUser (state): User | undefined {
      return state.firstUser;
    },
    getSecondUser (state): User | undefined {
      return state.secondUser;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setFirstUser(state, firstUser) {
      state.firstUser = firstUser;
    },
    setSecondUser(state) {
      const firstUserIndex = state.users.findIndex((user: User) => user.id === state.firstUser?.id);

      if (firstUserIndex) {
        const excludeNumber = firstUserIndex;
        const secondUserIndex = generateRandom(excludeNumber, state.users.length);

        state.secondUser = state.users[secondUserIndex];
      }
    },
  },
  actions: {
    onFirstUserSelected(state, user): void {
      state.commit('setFirstUser', user);
      state.commit('setSecondUser');
    },
    fetchUsers(state): void {
      fetch('http://localhost:8081/users')
        .then((response) => response.json())
        .then((users) => {
          state.commit('setUsers', users);
        });
    },
  },
});

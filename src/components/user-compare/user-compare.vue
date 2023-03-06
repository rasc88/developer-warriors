<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import { User } from '@/User';
import UserCard from '@/components/user-card/user-card.vue';

@Component({
  data() {
    return {
      'UserSelected': undefined,
    };
  },
  components: {
    UserCard,
  },
  computed: {
    ...mapGetters({
      'firstUser': 'getFirstUser',
      'secondUser': 'getSecondUser',
      'users': 'users',
    }),
  },
  methods: {
    ...mapActions({
      'onFirstUserSelected': "onFirstUserSelected",
      'fetchUsers': 'fetchUsers',
    }),
  },
})
export default class UserComparison extends Vue {
  firstUser: User | undefined;
  secondUser: User | undefined;
  users!: User[];
  onFirstUserSelected!: (user: User) => void;
  fetchUsers!: () => void;

  @Watch('UserSelected')
  onUserSelected(newValue: User | undefined): void {
    if (newValue) {
      this.onFirstUserSelected(newValue);
    }
  }

  created(): void {
    this.fetchUsers();
  }
}
</script>

<template>
  <v-container class="user-compare">
      <v-row >
        <v-select
          class="user-compare__select"
          v-model="UserSelected"
          :items="users"
          item-text="name"
          item-value="id"
          label="Please select an user"
          persistent-hint
          return-object
          single-line
        ></v-select>
    </v-row>
    <v-row>
      <v-col
        v-if="firstUser"
        class="user-compare__first-user"
        cols="3"
        offset="2"
      >
        <user-card
          class="user-compare__user-card"
          description="Selected user"
          v-bind="firstUser"
        />
      </v-col>
      <v-col
        v-if="secondUser"
        class="user-compare__second-user"
        cols="3"
        offset="2"
      >
        <user-card
          class="user-compare__user-card"
          description="Random User"
          v-bind="secondUser"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

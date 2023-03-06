<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserCard extends Vue {
  @Prop() description!: string;
  @Prop() name!: string;
  @Prop() avatar!: string;
  @Prop() followers!: number;
  @Prop() repositories!: number;
  @Prop() languages!: number;
}
</script>

<template>
  <v-card>
    <v-card-subtitle class="user-card__name">
      {{ description }}
    </v-card-subtitle>
    <v-card-title class="user-card__name">
      {{ name }}
    </v-card-title>

    <v-img
      class="user-card__avatar"
      :src="avatar"
     />

    <v-card-text>
      <v-chip-group
        column
      >
      <v-chip
        class="ma-2"
        color="success"
        variant="outlined"
      >
        <v-icon start icon="mdi-label"></v-icon>
        Followers {{ followers }}
      </v-chip>
      <v-chip
        class="ma-2"
        color="pink"
        variant="outlined"
        text-color="white"
      >
        <v-icon start icon="mdi-label"></v-icon>
        Repositories {{ repositories }}
      </v-chip>
      <v-chip
        class="ma-2"
        color="primary"
        variant="outlined"
      >
        <v-icon start icon="mdi-label"></v-icon>
        Languages {{ languages }}
      </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

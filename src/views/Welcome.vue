<template>
  <div class="welcome-page p-grid">
    <div class="p-col-6 p-offset-3">
      <h1>Welcome to Kittie Clicker!!!</h1>

      <div>
        <h2>Choose your cat:</h2>
        <img
          v-for="url in kittens"
          :src="url"
          :key="url"
          @click="selectKitten(url)"
          class="p-m-2"
        />
      </div>
      <div class="p-field">
        <label for="name" class="p-mr-3">Kitten's Name</label>
        <InputText
          :model-value="kittenName"
          id="name"
          type="username"
          @input="
            (e) =>
              updateKittenInfo({ field: 'kittenName', value: e.target.value })
          "
          aria-describedby="name-help"
        />
      </div>
      <Button @click="getPlay" label="Go Play" class="p-button-outlined" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Welcome',
  components: {
    Button,
    InputText,
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'kittens']),
  },
  methods: {
    ...mapMutations(['updateKittenInfo']),
    selectKitten(kittenUrl) {
      this.updateKittenInfo({ field: 'kittenUrl', value: kittenUrl })
    },
    getPlay() {
      if (!this.kittenUrl || !this.kittenName) {
        this.$toast.add({
          severity: 'error',
          summary: 'invalid',
          detail: 'Select a cat image and cat name please.',
          life: 5000,
        })
        return
      }
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="sass">
.p-inputtext
</style>

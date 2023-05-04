<template>
  <h1>Store</h1>
  <ul>
    <li
      v-for="item in items"
      :key="item.name"
      @click="() => purchaseItem(item)"
      :class="{ disabled: currentTotal < item.cost }"
    >
      {{ item.name }} - {{ item.cost }}
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    currentTotal: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(['items']),
  },
  methods: {
    ...mapMutations(['purchaseItem']),
    checkPurchase(item) {
      if (this.currentTotal > item.cost) {
        this.purchaseItem(item)
      }
    },
  },
}
</script>

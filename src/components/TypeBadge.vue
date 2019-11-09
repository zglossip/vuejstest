<template>
  <b-badge
    pill
    :class="'tb-' + typeName"
  >
    {{ typeName }}
  </b-badge>
</template>

<script>
export default {
  props: {
    typeName: {
      type: String,
      required: true
    }
  }
}
</script>

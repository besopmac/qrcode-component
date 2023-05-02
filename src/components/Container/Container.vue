<template>
  <section
    :class="[
      'flex flex-auto',
      direction === 'horizontal' ? 'flex-row' : 'flex-col'
    ]"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ContainerComponent',
  
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  }
}
</script>
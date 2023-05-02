<template>
  <Metainfo>
    <template #title="{ content }">
      {{ content ? `${content}` : 'Frontend Mentor Challenge - QRCode Component' }}
    </template>
  </Metainfo>
  <RouterView />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

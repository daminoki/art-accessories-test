<template>
  <div>
    <h1>Каталог</h1>
    <pre>{{ catalogData }}</pre>
  </div>
</template>

<script setup>
const catalogData = useState('catalogData')
console.log(catalogData.value)
</script>

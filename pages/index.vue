<template>
  <v-container>
    <LanguageSelect @language-changed="handleLanguageChange" />
    <ListView
      v-if="catalogData"
      :list-data="catalogData"
      :selected-language="selectedLanguage"
    />
  </v-container>
</template>

<script setup>
const catalogData = ref(null)

const loadCatalogData = async () => {
  const response = await fetch('/task_json.txt')
  catalogData.value = await response.json()
}

const selectedLanguage = ref('ru')

onMounted(() => {
  loadCatalogData()
})
</script>

<template>
  <v-container class="flex flex-col">
    <LanguageSelect @language-changed="handleLanguageChange" />

    <ListView
      v-if="catalogData.length > 0"
      :list-data="catalogData"
      :selected-language="selectedLanguage"
    />
  </v-container>
</template>

<script setup lang="ts">
import type CatalogItem from '~/entities/catalog'

const catalogData = ref<CatalogItem[]>([])

const loadCatalogData = async () => {
  const response = await fetch('/task_json.txt')
  catalogData.value = await response.json()
}

const selectedLanguage = ref('ru')

function handleLanguageChange(language: string) {
  selectedLanguage.value = language
}

onMounted(() => {
  loadCatalogData()
})
</script>

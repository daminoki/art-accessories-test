<template>
  <v-container>
    <LanguageSelect @language-changed="handleLanguageChange" />
    <ListView
      :list-data="catalogData"
      :selected-language="selectedLanguage"
    />
  </v-container>
</template>

<script setup>
const catalogData = useState('catalogData')
const selectedLanguage = ref('ru')

function handleLanguageChange(language) {
  selectedLanguage.value = language
}
</script>

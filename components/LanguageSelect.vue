<template>
  <v-select
    v-model="selectedLanguage"
    :label="labels[selectedLanguage]"
    :items="languages"
    variant="outlined"
    max-width="250"
    @update:model-value="changeLanguage"
  />
</template>

<script setup>
const languages = ['ru', 'en', 'fr']
const selectedLanguage = ref('ru')
const emit = defineEmits(['language-changed'])

const labels = {
  ru: 'Выберите язык',
  en: 'Choose language',
  fr: 'Choisissez la langue',
}

function changeLanguage() {
  emit('language-changed', selectedLanguage.value)
}
</script>

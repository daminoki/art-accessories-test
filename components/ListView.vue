<template>
  <v-treeview
    :items="listData"
    :item-children="item => item.childs"
    open-on-click
  >
    <template #title="{ item }">
      <NuxtLink
        :to="getItemLink(item)"
        class="hover:underline"
      >
        {{ getItemTitle(item) }}
      </NuxtLink>
    </template>
  </v-treeview>
</template>

<script setup>
const props = defineProps({
  listData: {
    type: Array,
    required: true,
  },
  selectedLanguage: {
    type: String,
    required: true,
  },
})

const getItemTitle = (item) => {
  const locale = item.locale[props.selectedLanguage]

  if (locale && locale.cg_name) {
    return locale.cg_name
  }

  // fallback if the selected language doesn't have a name
  const fallbackTitle = Object.values(item.locale).find(loc => loc.cg_name)
  return fallbackTitle.cg_name
}

const getItemLink = (item) => {
  const locale = item.locale[props.selectedLanguage]

  if (locale && locale.link) {
    return locale.link
  }

  // fallback if the selected language doesn't have a link
  const fallbackLink = Object.values(item.locale).find(loc => loc.cg_name)
  return fallbackLink.link
}
</script>

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

      <v-breadcrumbs
        v-if="getBreadcrumbs(item).length"
        :items="getBreadcrumbs(item)"
        class="text-xs"
      />
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
    return `${locale.link}${locale.id}`
  }

  // fallback if the selected language doesn't have a link
  const fallbackLink = Object.values(item.locale).find(loc => loc.cg_name)
  return `${fallbackLink.link}${fallbackLink.id}`
}

const getBreadcrumbs = (item) => {
  const breadcrumbs = []
  const breadcrumbsId = item.path_to_top

  const findItemById = (id, items) => {
    let foundItem = null

    items.forEach((item) => {
      if (item.id === id) {
        foundItem = item

        return
      }

      if (item.childs && findItemById(id, item.childs)) {
        foundItem = findItemById(id, item.childs)
      }
    })

    return foundItem
  }

  if (breadcrumbsId.length > 0) {
    breadcrumbs.push(getItemTitle(item))
  }

  breadcrumbsId.forEach((id) => {
    const foundItem = findItemById(id, props.listData)

    if (foundItem) {
      breadcrumbs.push(getItemTitle(foundItem))
    }
  })

  return breadcrumbs.reverse()
}
</script>

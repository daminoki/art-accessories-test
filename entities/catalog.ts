export default interface CatalogItem {
  id: number
  depth: number
  numchild: number
  category_image: string | null
  logo_image: string | null
  menu_image: string | null
  separate_menu: boolean
  c_images: number
  product_rep_1_id: number | null
  product_rep_2_id: number | null
  c_views: number
  og: OgItem[] | null
  twitter: TwitterItem[] | null
  locale: Record<string, LocaleItem>
  search_target: boolean
  path_to_top: number[]
  childs: CatalogItem[] | null
}

interface OgItem {
  id: number
  cat_id: number
  og_property_name: string
  locale: Record<string, OgLocaleItem>
}

interface OgLocaleItem {
  og_content_value: string
}

interface TwitterItem {
  id: number
  cat_id: number
  extra_meta_name: string
  locale: Record<string, TwitterLocaleItem>
}

interface TwitterLocaleItem {
  extra_meta_content: string
}

interface LocaleItem {
  id: number
  cg_name: string
  cg_description: string
  cg_title: string
  cg_slug: string
  meta_description: string
  meta_keywords: string
  link: string
}

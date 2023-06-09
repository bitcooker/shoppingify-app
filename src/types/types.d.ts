import { Category } from "@prisma/client"

interface CurrentItem {
  categoryId: string
  itemId: string
  categoryName: string
  itemName: string
  note: string
  image: string
  show: boolean
}

interface ActiveListItem {
  item: {
    category: Category | null
    id: string
    name: string
    note?: string
    image?: string
  }
  id: string
  quantity: number
  isDone: boolean
}

interface ChartData {
  _id: {
    year: number
    month: number
  }
  totalItems: number
}

interface TopCategories {
  result: [{ name: string; percentage: number }]
}

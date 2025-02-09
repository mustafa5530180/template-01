export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: "plant-pots" | "ceramics" | "tables" | "chairs"
  images: string[]
  specs: {
    dimensions: string
    weight: string
    material: string
  }
  inStock: boolean
}


import Link from "next/link"
import { categories } from "@/lib/data"

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex space-x-8 py-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.id === "all" ? "/products" : `/products?category=${category.id}`}
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


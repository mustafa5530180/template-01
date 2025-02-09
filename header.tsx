import Link from "next/link"
import { User } from "lucide-react"
import { CartSheet } from "./cart/cart-sheet"
import { Button } from "./ui/button"
import { SearchForm } from "./search-form"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Avion
        </Link>
        <div className="flex items-center gap-4">
          <SearchForm />
          <CartSheet />
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}


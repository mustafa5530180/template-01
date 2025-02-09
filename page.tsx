import { ImageCarousel } from "@/components/image-carousel"
import { ProductCard } from "@/components/ui/product-card"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <main>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Welcome to Avion</h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground">
            Discover our curated collection of modern furniture and home accessories.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      <ImageCarousel />
    </main>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock wishlist data
const mockWishlistItems = [
  {
    id: "1",
    title: "Complete Python Developer Course",
    instructor: "Jose Portilla",
    price: 94.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=100&width=180",
    rating: 4.6,
    students: 89000,
    level: "Beginner",
    category: "Programming",
  },
  {
    id: "2",
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    price: 84.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=100&width=180",
    rating: 4.5,
    students: 156000,
    level: "Intermediate",
    category: "Data Science",
  },
  {
    id: "3",
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    price: 89.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=100&width=180",
    rating: 4.4,
    students: 67000,
    level: "Beginner",
    category: "Marketing",
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems)

  const removeFromWishlist = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const addToCart = (id: string) => {
    // Add to cart logic
    console.log("Added to cart:", id)
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="font-serif text-3xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">Save courses you're interested in to your wishlist.</p>
            <Button asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground">{wishlistItems.length} courses</p>
        </div>

        <div className="grid gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4 p-6">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-40 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <Link href={`/course/${item.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors">{item.title}</h3>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground text-sm mb-2">By {item.instructor}</p>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({item.students.toLocaleString()} students)</span>
                      <Badge variant="secondary">{item.level}</Badge>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">${item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                      </div>

                      <Button onClick={() => addToCart(item.id)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

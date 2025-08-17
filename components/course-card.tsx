"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  id: string
  title: string
  instructor: string
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  duration: string
  students: number
  level: string
  category: string
  image: string
}

export function CourseCard({
  id,
  title,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  duration,
  students,
  level,
  category,
  image,
}: CourseCardProps) {
  const addToCart = () => {
    // Add to cart logic - in a real app, this would call an API
    console.log(`Added course ${id} to cart`)
    // You could also show a toast notification here
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">{category}</Badge>
        <Badge variant="secondary" className="absolute top-2 right-2">
          {level}
        </Badge>
      </div>

      <CardContent className="p-4">
        <Link href={`/course/${id}`}>
          <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">${price}</span>
          {originalPrice && <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>}
        </div>
        <Button size="sm" className="ml-auto" onClick={addToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
  }

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80"
              alt="Modern interior with wooden furniture"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-primary">Join the club and get the benefits</h2>
            <p className="text-secondary-foreground">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Free delivery on all orders over £50 with code easter checkout</span>
      </div>
      <button onClick={() => setIsVisible(false)} className="text-white hover:opacity-75">
        <X className="h-4 w-4" />
        <span className="sr-only">Close banner</span>
      </button>
    </div>
  )
}


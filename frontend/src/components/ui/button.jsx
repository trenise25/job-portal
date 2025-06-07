import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003366] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#003366] text-white hover:bg-[#002244] hover:scale-105 shadow-md hover:shadow-lg",
        destructive: "bg-red-500 text-white hover:bg-red-600 hover:scale-105 shadow-md hover:shadow-lg",
        outline: "border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white hover:scale-105",
        secondary: "bg-[#0088cc] text-white hover:bg-[#006699] hover:scale-105 shadow-md hover:shadow-lg",
        ghost: "hover:bg-[#f4f4f4] hover:text-[#003366] hover:scale-105",
        link: "text-[#003366] underline-offset-4 hover:underline hover:text-[#0088cc]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
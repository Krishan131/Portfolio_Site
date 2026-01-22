// Beginner Note:
// This file manages the "toasts" (notification popups) for our app.
// We use React's built-in "useState" and "useEffect" hooks to manage the list of toasts.
// This is a simplified version to make it easier to understand!

import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

// This defines what a "Toast" looks like in our app
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

// Using a global variable for simple state sharing (not recommended for large apps, but good for learning)
let listeners: Array<(toasts: ToasterToast[]) => void> = []
let memoryToasts: ToasterToast[] = []

function genId() {
  return Math.random().toString(36).substring(2, 9)
}

function dispatchChange() {
  listeners.forEach((listener) => {
    listener([...memoryToasts]) // Create a copy of the array
  })
}

function toast({ ...props }: Omit<ToasterToast, "id">) {
  const id = genId()

  const newToast: ToasterToast = {
    ...props,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismiss(id)
    },
  }

  // Add the new toast to our list
  memoryToasts = [newToast, ...memoryToasts].slice(0, TOAST_LIMIT)
  dispatchChange()

  return {
    id,
    dismiss: () => dismiss(id),
    update: (props: ToasterToast) => update(id, props),
  }
}

function dismiss(toastId?: string) {
  if (toastId) {
    memoryToasts = memoryToasts.map((t) =>
      t.id === toastId ? { ...t, open: false } : t
    )
  } else {
    memoryToasts = memoryToasts.map((t) => ({ ...t, open: false }))
  }
  dispatchChange()

  // Remove completely after animation
  setTimeout(() => {
    if (toastId) {
      memoryToasts = memoryToasts.filter((t) => t.id !== toastId)
    } else {
      memoryToasts = []
    }
    dispatchChange()
  }, 1000)
}

function update(id: string, props: ToasterToast) {
  memoryToasts = memoryToasts.map((t) =>
    t.id === id ? { ...t, ...props } : t
  )
  dispatchChange()
}

function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(memoryToasts)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    toasts,
    toast,
    dismiss,
  }
}

export { useToast, toast }

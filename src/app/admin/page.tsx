
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function AdminPage() {
  const router = useRouter()

  React.useEffect(() => {
    // Disable admin access and redirect home
    router.push("/")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

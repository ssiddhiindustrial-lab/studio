"use client"

import * as React from "react"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useAuth } from "@/components/providers/AuthProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, LogOut, ShieldCheck } from "lucide-react"

export default function AdminPage() {
  const { user, loading } = useAuth()
  const { toast } = useToast()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast({ title: "Logged in successfully", description: "You can now edit the site content directly." })
    } catch (error: any) {
      toast({ variant: "destructive", title: "Login Failed", description: error.message })
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    toast({ title: "Logged out", description: "Edit mode is now disabled." })
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )

  if (user) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center">
        <Card className="w-full max-w-md border-t-4 border-t-accent">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-headline">Admin Dashboard</CardTitle>
            <CardDescription>You are logged in as {user.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-secondary rounded-lg text-sm text-center">
              Go to any page (Home, About, etc.) and you will see "Edit" buttons on sections you can change.
            </div>
            <Button onClick={handleLogout} variant="outline" className="w-full h-12 gap-2">
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Admin Login</CardTitle>
          <CardDescription>Sign in to manage your website content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@siddhi.in" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isLoggingIn} className="w-full h-12 bg-primary hover:bg-accent font-bold">
              {isLoggingIn ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

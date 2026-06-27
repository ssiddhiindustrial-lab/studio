
"use client"

import * as React from "react"
import { useAuth } from "@/components/providers/AuthProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { uploadCmsImage } from "@/services/cmsService"
import { Loader2, Upload, Copy, Check, LogOut } from "lucide-react"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"

export default function AdminPage() {
  const { isAdmin, loading } = useAuth()
  const { toast } = useToast()
  const [file, setFile] = React.useState<File | null>(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploadedUrl, setUploadedUrl] = React.useState("")
  const [copied, setCopied] = React.useState(false)

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-bold text-primary mb-2">Access Denied</h1>
        <p className="text-muted-foreground">Please log in as an administrator to access this page.</p>
        <Button asChild className="mt-4" variant="outline">
          <a href="/">Go Home</a>
        </Button>
      </div>
    )
  }

  const handleUpload = async () => {
    if (!file) return
    setIsUploading(true)
    try {
      const url = await uploadCmsImage("assets", file)
      setUploadedUrl(url)
      toast({ title: "Upload Successful", description: "Image is now hosted on Firebase Storage." })
    } catch (error) {
      toast({ variant: "destructive", title: "Upload Failed", description: "Could not upload image." })
    } finally {
      setIsUploading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uploadedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({ title: "Copied!", description: "URL copied to clipboard." })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-primary font-headline">Admin Control Center</h1>
        <Button variant="ghost" className="text-destructive hover:bg-destructive/10" onClick={() => signOut(auth)}>
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-accent" /> Asset Uploader
            </CardTitle>
            <CardDescription>
              Upload images to get permanent URLs for your website.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="picture">Select Image</Label>
              <Input 
                id="picture" 
                type="file" 
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
            <Button 
              onClick={handleUpload} 
              disabled={!file || isUploading}
              className="w-full"
            >
              {isUploading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Upload to Storage"}
            </Button>

            {uploadedUrl && (
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg border space-y-3">
                <Label className="text-xs uppercase font-bold tracking-widest opacity-70">Generated URL</Label>
                <div className="flex gap-2">
                  <Input readOnly value={uploadedUrl} className="bg-white" />
                  <Button size="icon" variant="outline" onClick={copyToClipboard}>
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground">Share this URL with your developer to update images.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Direct access to edit various site sections.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Home Page", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/projects" },
              { name: "Safety", href: "/safety" },
            ].map((link) => (
              <Button key={link.name} variant="outline" className="w-full justify-between group" asChild>
                <a href={link.href}>
                  {link.name}
                  <span className="text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">Click to edit in-place</span>
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

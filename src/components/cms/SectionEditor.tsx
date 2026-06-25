"use client"

import * as React from "react"
import { useAuth } from "@/components/providers/AuthProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Edit, Loader2, Image as ImageIcon } from "lucide-react"
import { updatePageContent, uploadCmsImage } from "@/services/cmsService"
import { useToast } from "@/hooks/use-toast"

interface SectionEditorProps {
  pageId: string
  sectionKey: string
  defaultValues: {
    title?: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonLink?: string
    imageUrl?: string
  }
}

export function SectionEditor({ pageId, sectionKey, defaultValues }: SectionEditorProps) {
  const { isAdmin } = useAuth()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)
  const [formData, setFormData] = React.useState(defaultValues)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState(defaultValues.imageUrl)

  if (!isAdmin) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      let finalImageUrl = formData.imageUrl
      
      if (selectedFile) {
        finalImageUrl = await uploadCmsImage(`${pageId}/${sectionKey}`, selectedFile)
      }

      await updatePageContent(pageId, {
        [sectionKey]: {
          ...formData,
          imageUrl: finalImageUrl
        }
      })

      toast({ title: "Content Saved", description: "Refresh the page to see changes." })
      setIsOpen(false)
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to save content." })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 shadow-lg border-2 border-primary/20">
          <Edit className="h-4 w-4" /> Edit Section
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Edit Section: {sectionKey}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {formData.imageUrl !== undefined && (
            <div className="space-y-2">
              <Label>Section Image</Label>
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-primary/20 bg-secondary/30 flex items-center justify-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                ) : (
                  <ImageIcon className="h-10 w-10 text-muted-foreground" />
                )}
                <Input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <p className="text-[10px] text-muted-foreground text-center italic">Click image area to upload new image</p>
            </div>
          )}

          {formData.title !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="title">Main Title (H1/H2)</Label>
              <Input 
                id="title" 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
          )}

          {formData.subtitle !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle / Badge Text</Label>
              <Input 
                id="subtitle" 
                value={formData.subtitle} 
                onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
              />
            </div>
          )}

          {formData.description !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="description">Description / Content</Label>
              <Textarea 
                id="description" 
                rows={4}
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          )}

          {(formData.buttonText !== undefined || formData.buttonLink !== undefined) && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="btnText">Button Text</Label>
                <Input 
                  id="btnText" 
                  value={formData.buttonText} 
                  onChange={(e) => setFormData({...formData, buttonText: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="btnLink">Button Link (e.g. /contact)</Label>
                <Input 
                  id="btnLink" 
                  value={formData.buttonLink} 
                  onChange={(e) => setFormData({...formData, buttonLink: e.target.value})}
                />
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={isSaving} className="w-full h-12 text-lg">
            {isSaving ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

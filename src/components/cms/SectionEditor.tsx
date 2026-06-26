
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
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      setFormData(defaultValues)
      setPreviewUrl(defaultValues.imageUrl)
      setSelectedFile(null)
    }
  }, [isOpen, defaultValues])

  if (!isAdmin) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSave = async () => {
    if (isSaving) return;
    
    setIsSaving(true)
    
    // Safety timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (isSaving) {
        setIsSaving(false);
        toast({ 
          variant: "destructive", 
          title: "Request Timeout", 
          description: "The database took too long to respond. Please check your connection." 
        });
      }
    }, 15000);

    try {
      let finalImageUrl = formData.imageUrl
      
      if (selectedFile) {
        finalImageUrl = await uploadCmsImage(`${pageId}/${sectionKey}`, selectedFile)
      }

      const result = await updatePageContent(pageId, {
        [sectionKey]: {
          ...formData,
          imageUrl: finalImageUrl
        }
      });

      clearTimeout(timeout);
      
      if (result.success) {
        toast({ title: "Update Successful", description: "Content has been saved." })
        setIsOpen(false)
        // Refresh after short delay to ensure DB consistency
        setTimeout(() => window.location.reload(), 500);
      }
    } catch (error: any) {
      clearTimeout(timeout);
      console.error("Detailed Save Error:", error)
      toast({ 
        variant: "destructive", 
        title: "Update Failed", 
        description: error.message || "Could not save changes. Please try again." 
      })
    } finally {
      setIsSaving(false)
    }
  }

  const triggerFileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 shadow-lg border-2 border-primary/20 bg-white hover:bg-accent hover:text-white transition-all">
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
              <div 
                onClick={triggerFileClick}
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-primary/20 bg-secondary/30 flex items-center justify-center cursor-pointer group"
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                ) : (
                  <ImageIcon className="h-10 w-10 text-muted-foreground" />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-bold gap-2">
                  <ImageIcon className="h-6 w-6" />
                  <span>Click to Change Image</span>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          )}

          {formData.title !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="title">Main Title</Label>
              <Input 
                id="title" 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
          )}

          {formData.subtitle !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle / Badge</Label>
              <Input 
                id="subtitle" 
                value={formData.subtitle} 
                onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
              />
            </div>
          )}

          {formData.description !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="description">Description Content</Label>
              <Textarea 
                id="description" 
                rows={4}
                value={formData.description} 
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={isSaving} className="w-full h-12 text-lg">
            {isSaving ? <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Saving...</> : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

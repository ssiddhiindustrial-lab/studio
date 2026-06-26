
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
import { updateProjectData, uploadProjectImage } from "@/services/projectService"
import { useToast } from "@/hooks/use-toast"
import { Project } from "@/lib/projects-data"

interface ProjectEditorProps {
  project: Project
}

export function ProjectEditor({ project }: ProjectEditorProps) {
  const { isAdmin } = useAuth()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)
  const [formData, setFormData] = React.useState<Project>(project)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState(project.imageUrl)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      setFormData(project)
      setPreviewUrl(project.imageUrl)
      setSelectedFile(null)
    }
  }, [isOpen, project])

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

    const timeout = setTimeout(() => {
      if (isSaving) {
        setIsSaving(false);
        toast({ 
          variant: "destructive", 
          title: "Save Timeout", 
          description: "Database connection slow. Please try again." 
        });
      }
    }, 15000);

    try {
      let finalImageUrl = formData.imageUrl
      
      if (selectedFile) {
        finalImageUrl = await uploadProjectImage(project.slug, selectedFile);
      }

      const result = await updateProjectData(project.slug, {
        ...formData,
        imageUrl: finalImageUrl
      });

      clearTimeout(timeout);

      if (result.success) {
        toast({ title: "Project Saved", description: "Changes updated in database." })
        setIsOpen(false)
        setTimeout(() => window.location.reload(), 500);
      }
    } catch (error: any) {
      clearTimeout(timeout);
      console.error("Project save error detail:", error)
      toast({ 
        variant: "destructive", 
        title: "Save Failed", 
        description: error.message || "Could not write to database." 
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
        <Button size="sm" variant="secondary" className="gap-2 shadow-lg border-2 border-accent/20 bg-white text-primary hover:bg-accent hover:text-white transition-all">
          <Edit className="h-4 w-4" /> Edit Project Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Edit Project: {project.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Main Image</Label>
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
                  <span>Change Photo</span>
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

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">Value</Label>
                  <Input id="value" value={formData.value} onChange={(e) => setFormData({...formData, value: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Overview</Label>
            <Textarea 
              id="desc" 
              rows={4} 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={isSaving} className="w-full h-12 text-lg">
            {isSaving ? <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Saving...</> : "Apply Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

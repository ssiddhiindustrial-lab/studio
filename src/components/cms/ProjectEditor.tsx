
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
import { Edit, Loader2, Image as ImageIcon, Plus, Trash2 } from "lucide-react"
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

  // Reset form when project prop changes or dialog opens
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

  const handleScopeChange = (index: number, value: string) => {
    const newScope = [...formData.scope]
    newScope[index] = value
    setFormData({ ...formData, scope: newScope })
  }

  const addScopeItem = () => {
    setFormData({ ...formData, scope: [...formData.scope, ""] })
  }

  const removeScopeItem = (index: number) => {
    const newScope = formData.scope.filter((_, i) => i !== index)
    setFormData({ ...formData, scope: newScope })
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      let finalImageUrl = formData.imageUrl
      
      if (selectedFile) {
        finalImageUrl = await uploadProjectImage(project.slug, selectedFile)
      }

      const updatedProject = {
        ...formData,
        imageUrl: finalImageUrl
      }

      await updateProjectData(project.slug, updatedProject)

      toast({ title: "Project Updated", description: "Changes have been saved successfully. Please refresh the page." })
      setIsOpen(false)
    } catch (error) {
      console.error(error)
      toast({ variant: "destructive", title: "Error", description: "Failed to update project." })
    } finally {
      setIsSaving(false)
    }
  }

  const triggerFileClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary" className="gap-2 shadow-lg border-2 border-accent/20 bg-white text-primary hover:bg-accent hover:text-white">
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
              <Label>Main Project Image</Label>
              <div 
                onClick={triggerFileClick}
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-primary/20 bg-secondary/30 flex items-center justify-center group cursor-pointer"
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

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">Value (e.g. ₹1.5 Cr)</Label>
                  <Input id="value" value={formData.value} onChange={(e) => setFormData({...formData, value: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year (e.g. 2024)</Label>
                  <Input id="year" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client">Client Name</Label>
              <Input id="client" value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select 
                id="category" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value as any})}
              >
                <option value="Industrial">Industrial</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Warehousing">Warehousing</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Project Description</Label>
            <Textarea 
              id="desc" 
              rows={4} 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Scope of Work (Points)</Label>
              <Button type="button" size="sm" variant="outline" onClick={addScopeItem} className="h-8 gap-1">
                <Plus className="h-3 w-3" /> Add Point
              </Button>
            </div>
            <div className="space-y-2">
              {formData.scope.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input 
                    value={item} 
                    onChange={(e) => handleScopeChange(index, e.target.value)} 
                    placeholder={`Scope point ${index + 1}`}
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost" 
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => removeScopeItem(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={isSaving} className="w-full h-12 text-lg">
            {isSaving ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : "Save Project Data"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Upload, Plus, Edit, Trash2, Loader2, AlertTriangle } from "lucide-react"

interface University {
  id: string
  name: string
  country: string
  programs: string[]
  intakes: string[]
  tuition: string
  requirements: string
}

const emptyForm = {
  name: '',
  country: '',
  programs: '',
  intakes: '',
  tuition: '',
  requirements: '',
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([])
  const [loading, setLoading] = useState(true)
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null)
  const [formData, setFormData] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchUniversities()
  }, [])

  const fetchUniversities = async () => {
    try {
      const res = await fetch('/api/admin/universities')
      const data = await res.json()
      if (data.success) {
        setUniversities(data.universities)
      }
    } catch (error) {
      console.error('Failed to fetch universities:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/admin/universities/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          programs: formData.programs.split(',').map(p => p.trim()).filter(Boolean),
          intakes: formData.intakes.split(',').map(i => i.trim()).filter(Boolean),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setAddDialogOpen(false)
        setFormData(emptyForm)
        fetchUniversities()
      } else {
        alert(data.error || 'Failed to add university')
      }
    } catch (error) {
      alert('Error adding university')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedUniversity) return
    setSubmitting(true)

    try {
      const res = await fetch('/api/admin/universities/manage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedUniversity.id,
          ...formData,
          programs: formData.programs.split(',').map(p => p.trim()).filter(Boolean),
          intakes: formData.intakes.split(',').map(i => i.trim()).filter(Boolean),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setEditDialogOpen(false)
        setSelectedUniversity(null)
        setFormData(emptyForm)
        fetchUniversities()
      } else {
        alert(data.error || 'Failed to update university')
      }
    } catch (error) {
      alert('Error updating university')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedUniversity) return
    setSubmitting(true)

    try {
      const res = await fetch('/api/admin/universities/manage', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedUniversity.id }),
      })

      const data = await res.json()

      if (data.success) {
        setDeleteDialogOpen(false)
        setSelectedUniversity(null)
        fetchUniversities()
      } else {
        alert(data.error || 'Failed to delete university')
      }
    } catch (error) {
      alert('Error deleting university')
    } finally {
      setSubmitting(false)
    }
  }

  const openEdit = (uni: University) => {
    setSelectedUniversity(uni)
    setFormData({
      name: uni.name,
      country: uni.country,
      programs: uni.programs.join(', '),
      intakes: uni.intakes.join(', '),
      tuition: uni.tuition || '',
      requirements: uni.requirements || '',
    })
    setEditDialogOpen(true)
  }

  const openDelete = (uni: University) => {
    setSelectedUniversity(uni)
    setDeleteDialogOpen(true)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const uploadData = new FormData()
    uploadData.append('file', file)

    try {
      const res = await fetch('/api/admin/universities/bulk-upload', {
        method: 'POST',
        body: uploadData,
      })

      const data = await res.json()

      if (data.success) {
        alert(`Successfully uploaded ${data.count} universities!`)
        fetchUniversities()
      } else {
        alert(data.error || 'Failed to upload file')
      }
    } catch (error) {
      alert('Error uploading file')
    }
  }

  const UniversityForm = ({ onSubmit, submitLabel }: { onSubmit: (e: React.FormEvent) => void, submitLabel: string }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">University Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="programs">Programs (comma separated) *</Label>
        <Input
          id="programs"
          value={formData.programs}
          onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
          placeholder="Engineering, Business, Medicine"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="intakes">Intake Months (comma separated) *</Label>
          <Input
            id="intakes"
            value={formData.intakes}
            onChange={(e) => setFormData({ ...formData, intakes: e.target.value })}
            placeholder="September, January"
            required
          />
        </div>
        <div>
          <Label htmlFor="tuition">Tuition Fees *</Label>
          <Input
            id="tuition"
            value={formData.tuition}
            onChange={(e) => setFormData({ ...formData, tuition: e.target.value })}
            placeholder="€12,000 - €25,000"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="requirements">Entry Requirements *</Label>
        <Textarea
          id="requirements"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          placeholder="IELTS 6.5, GPA 3.0, Bachelor's degree"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Saving...
          </span>
        ) : submitLabel}
      </Button>
    </form>
  )

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Partner Universities</h1>
          <p className="text-gray-600">Manage university listings and program details</p>
        </div>

        <div className="flex gap-2">
          <label htmlFor="bulk-upload">
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <Upload className="mr-2 h-4 w-4" />
                Bulk Upload CSV
              </span>
            </Button>
          </label>
          <input
            id="bulk-upload"
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}
            className="hidden"
          />

          <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add University
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New University</DialogTitle>
              </DialogHeader>
              <UniversityForm onSubmit={handleAdd} submitLabel="Add University" />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={(open) => {
        setEditDialogOpen(open)
        if (!open) { setSelectedUniversity(null); setFormData(emptyForm) }
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit University</DialogTitle>
          </DialogHeader>
          <UniversityForm onSubmit={handleEdit} submitLabel="Save Changes" />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={(open) => {
        setDeleteDialogOpen(open)
        if (!open) setSelectedUniversity(null)
      }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Delete University
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Are you sure you want to delete <strong>{selectedUniversity?.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
                  </span>
                ) : "Delete University"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>All Universities ({universities.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-gray-500">Loading universities...</span>
            </div>
          ) : universities.length === 0 ? (
            <div className="text-center py-12">
              <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No universities yet</p>
              <p className="text-sm text-gray-400 mt-1">Add one manually or upload a CSV file to get started.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>University</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Programs</TableHead>
                    <TableHead>Intakes</TableHead>
                    <TableHead>Tuition</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {universities.map((uni) => (
                    <TableRow key={uni.id}>
                      <TableCell className="font-medium">{uni.name}</TableCell>
                      <TableCell>{uni.country}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {uni.programs.slice(0, 2).map((p, i) => (
                            <Badge key={i} variant="outline">{p}</Badge>
                          ))}
                          {uni.programs.length > 2 && (
                            <Badge variant="outline">+{uni.programs.length - 2}</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{uni.intakes.join(', ')}</TableCell>
                      <TableCell>{uni.tuition}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEdit(uni)}
                            className="hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openDelete(uni)}
                            className="hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  resource_url: string | null;
  image_url: string | null;
  resource_type: string | null;
  published: boolean | null;
  created_at: string;
}

const AdminResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Resource | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    resource_url: '',
    image_url: '',
    resource_type: '',
    published: true,
  });

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: 'Failed to fetch resources', variant: 'destructive' });
    } else {
      setResources(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      resource_url: '',
      image_url: '',
      resource_type: '',
      published: true,
    });
    setEditingItem(null);
  };

  const handleEdit = (item: Resource) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category || '',
      resource_url: item.resource_url || '',
      image_url: item.image_url || '',
      resource_type: item.resource_type || '',
      published: item.published ?? true,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const itemData = {
      title: formData.title,
      description: formData.description || null,
      category: formData.category || null,
      resource_url: formData.resource_url || null,
      image_url: formData.image_url || null,
      resource_type: formData.resource_type || null,
      published: formData.published,
    };

    if (editingItem) {
      const { error } = await supabase
        .from('resources')
        .update(itemData)
        .eq('id', editingItem.id);

      if (error) {
        toast({ title: 'Error', description: 'Failed to update resource', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Resource updated successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('resources').insert([itemData]);

      if (error) {
        toast({ title: 'Error', description: 'Failed to create resource', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Resource created successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;

    const { error } = await supabase.from('resources').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete resource', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Resource deleted successfully' });
      fetchItems();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Resources</h2>
          <p className="text-muted-foreground text-sm">Manage your resources and downloads</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Resource
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Resource' : 'Add New Resource'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="E-books, Templates..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resource_type">Resource Type</Label>
                  <Input
                    id="resource_type"
                    value={formData.resource_type}
                    onChange={(e) => setFormData({ ...formData, resource_type: e.target.value })}
                    placeholder="PDF, Video, Guide..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="resource_url">Resource URL</Label>
                  <Input
                    id="resource_url"
                    value={formData.resource_url}
                    onChange={(e) => setFormData({ ...formData, resource_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                />
                <Label htmlFor="published">Published</Label>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => { setIsDialogOpen(false); resetForm(); }}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {editingItem ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {resources.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No resources yet. Add your first resource!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {resources.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.category && `${item.category} • `}
                      {item.resource_type && `${item.resource_type} • `}
                      {item.published ? '✅ Published' : '📝 Draft'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {item.description && (
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminResources;

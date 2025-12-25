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
import { Plus, Pencil, Trash2, Loader2, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  rating: number | null;
  published: boolean | null;
  created_at: string;
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    avatar_url: '',
    rating: 5,
    published: true,
  });

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: 'Failed to fetch testimonials', variant: 'destructive' });
    } else {
      setTestimonials(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      company: '',
      content: '',
      avatar_url: '',
      rating: 5,
      published: true,
    });
    setEditingItem(null);
  };

  const handleEdit = (item: Testimonial) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      role: item.role || '',
      company: item.company || '',
      content: item.content,
      avatar_url: item.avatar_url || '',
      rating: item.rating || 5,
      published: item.published ?? true,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const itemData = {
      name: formData.name,
      role: formData.role || null,
      company: formData.company || null,
      content: formData.content,
      avatar_url: formData.avatar_url || null,
      rating: formData.rating,
      published: formData.published,
    };

    if (editingItem) {
      const { error } = await supabase
        .from('testimonials')
        .update(itemData)
        .eq('id', editingItem.id);

      if (error) {
        toast({ title: 'Error', description: 'Failed to update testimonial', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Testimonial updated successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('testimonials').insert([itemData]);

      if (error) {
        toast({ title: 'Error', description: 'Failed to create testimonial', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Testimonial created successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    const { error } = await supabase.from('testimonials').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete testimonial', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Testimonial deleted successfully' });
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
          <h2 className="text-xl font-semibold">Testimonials</h2>
          <p className="text-muted-foreground text-sm">Manage client testimonials and reviews</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Testimonial' : 'Add New Testimonial'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="avatar_url">Avatar URL</Label>
                  <Input
                    id="avatar_url"
                    value={formData.avatar_url}
                    onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 5 })}
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

      {testimonials.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No testimonials yet. Add your first testimonial!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {testimonials.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.role}{item.company && ` at ${item.company}`} • 
                      <span className="inline-flex items-center ml-1">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </span>
                      {' • '}{item.published ? '✅ Published' : '📝 Draft'}
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
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">"{item.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;

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
import { Plus, Pencil, Trash2, Loader2, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string | null;
  event_type: string | null;
  registration_url: string | null;
  image_url: string | null;
  published: boolean | null;
  created_at: string;
}

const AdminEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Event | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    location: '',
    event_type: '',
    registration_url: '',
    image_url: '',
    published: true,
  });

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    if (error) {
      toast({ title: 'Error', description: 'Failed to fetch events', variant: 'destructive' });
    } else {
      setEvents(data || []);
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
      event_date: '',
      location: '',
      event_type: '',
      registration_url: '',
      image_url: '',
      published: true,
    });
    setEditingItem(null);
  };

  const handleEdit = (item: Event) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      event_date: item.event_date ? format(new Date(item.event_date), "yyyy-MM-dd'T'HH:mm") : '',
      location: item.location || '',
      event_type: item.event_type || '',
      registration_url: item.registration_url || '',
      image_url: item.image_url || '',
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
      event_date: formData.event_date,
      location: formData.location || null,
      event_type: formData.event_type || null,
      registration_url: formData.registration_url || null,
      image_url: formData.image_url || null,
      published: formData.published,
    };

    if (editingItem) {
      const { error } = await supabase
        .from('events')
        .update(itemData)
        .eq('id', editingItem.id);

      if (error) {
        toast({ title: 'Error', description: 'Failed to update event', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Event updated successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('events').insert([itemData]);

      if (error) {
        toast({ title: 'Error', description: 'Failed to create event', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Event created successfully' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase.from('events').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete event', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Event deleted successfully' });
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
          <h2 className="text-xl font-semibold">Events</h2>
          <p className="text-muted-foreground text-sm">Manage your upcoming events</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Event' : 'Add New Event'}</DialogTitle>
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
                  <Label htmlFor="event_date">Date & Time *</Label>
                  <Input
                    id="event_date"
                    type="datetime-local"
                    value={formData.event_date}
                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event_type">Event Type</Label>
                  <Input
                    id="event_type"
                    value={formData.event_type}
                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    placeholder="Workshop, Webinar..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Online or physical location"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="registration_url">Registration URL</Label>
                  <Input
                    id="registration_url"
                    value={formData.registration_url}
                    onChange={(e) => setFormData({ ...formData, registration_url: e.target.value })}
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

      {events.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No events yet. Add your first event!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {events.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(item.event_date), 'PPP p')}
                      {item.location && ` • ${item.location}`}
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

export default AdminEvents;

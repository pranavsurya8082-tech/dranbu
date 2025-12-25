import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  subtitle: string | null;
  category: string;
  content: string | null;
  image_url: string | null;
  author_name: string | null;
  read_time: string | null;
  tags: string[] | null;
  published: boolean | null;
  created_at: string;
}

const AdminArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'wellness',
    content: '',
    image_url: '',
    author_name: 'Dr. Anbu',
    read_time: '5 min read',
    tags: '',
    published: false,
  });

  const categories = ['wellness', 'travel', 'creativity', 'growth'];

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: 'Failed to fetch articles', variant: 'destructive' });
    } else {
      setArticles(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      category: 'wellness',
      content: '',
      image_url: '',
      author_name: 'Dr. Anbu',
      read_time: '5 min read',
      tags: '',
      published: false,
    });
    setEditingArticle(null);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      subtitle: article.subtitle || '',
      category: article.category,
      content: article.content || '',
      image_url: article.image_url || '',
      author_name: article.author_name || 'Dr. Anbu',
      read_time: article.read_time || '5 min read',
      tags: article.tags?.join(', ') || '',
      published: article.published || false,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const articleData = {
      title: formData.title,
      subtitle: formData.subtitle || null,
      category: formData.category,
      content: formData.content || null,
      image_url: formData.image_url || null,
      author_name: formData.author_name,
      read_time: formData.read_time,
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : null,
      published: formData.published,
    };

    if (editingArticle) {
      const { error } = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', editingArticle.id);

      if (error) {
        toast({ title: 'Error', description: 'Failed to update article', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Article updated successfully' });
        fetchArticles();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('articles').insert([articleData]);

      if (error) {
        toast({ title: 'Error', description: 'Failed to create article', variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Article created successfully' });
        fetchArticles();
        setIsDialogOpen(false);
        resetForm();
      }
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    const { error } = await supabase.from('articles').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete article', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Article deleted successfully' });
      fetchArticles();
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
          <h2 className="text-xl font-semibold">Articles</h2>
          <p className="text-muted-foreground text-sm">Manage your blog articles</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingArticle ? 'Edit Article' : 'Add New Article'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="read_time">Read Time</Label>
                  <Input
                    id="read_time"
                    value={formData.read_time}
                    onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="wellness, mindfulness, health"
                />
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
                  {editingArticle ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {articles.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No articles yet. Create your first article!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <Card key={article.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {article.category} • {article.read_time} • {article.published ? '✅ Published' : '📝 Draft'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(article)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(article.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {article.subtitle && (
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{article.subtitle}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminArticles;

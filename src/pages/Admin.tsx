import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, MessageSquare, Calendar, BookOpen, User, LogOut } from 'lucide-react';
import AdminArticles from '@/components/admin/AdminArticles';
import AdminTestimonials from '@/components/admin/AdminTestimonials';
import AdminEvents from '@/components/admin/AdminEvents';
import AdminResources from '@/components/admin/AdminResources';
import AdminSettings from '@/components/admin/AdminSettings';

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('articles');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Access Denied</CardTitle>
              <CardDescription>
                You don't have admin privileges. Please contact the site administrator.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Logged in as: {user.email}
              </p>
              <Button onClick={() => signOut()} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-serif">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your website content</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto gap-2 bg-muted/50 p-2">
            <TabsTrigger value="articles" className="flex items-center gap-2 py-3">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Articles</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2 py-3">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Testimonials</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2 py-3">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2 py-3">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2 py-3 col-span-2 sm:col-span-1">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="animate-fade-in">
            <AdminArticles />
          </TabsContent>

          <TabsContent value="testimonials" className="animate-fade-in">
            <AdminTestimonials />
          </TabsContent>

          <TabsContent value="events" className="animate-fade-in">
            <AdminEvents />
          </TabsContent>

          <TabsContent value="resources" className="animate-fade-in">
            <AdminResources />
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;

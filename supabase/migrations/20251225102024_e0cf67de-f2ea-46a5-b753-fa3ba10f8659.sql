-- Create app_role enum for role-based access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create site_settings table for profile/bio details
CREATE TABLE public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT NOT NULL UNIQUE,
    value TEXT,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings"
ON public.site_settings FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can update site settings"
ON public.site_settings FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create articles table
CREATE TABLE public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    subtitle TEXT,
    category TEXT NOT NULL,
    content TEXT,
    image_url TEXT,
    author_name TEXT DEFAULT 'Dr. Anbu',
    author_avatar TEXT,
    author_bio TEXT,
    read_time TEXT DEFAULT '5 min read',
    tags TEXT[],
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published articles"
ON public.articles FOR SELECT
TO anon, authenticated
USING (published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage articles"
ON public.articles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create testimonials table
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT,
    company TEXT,
    content TEXT NOT NULL,
    avatar_url TEXT,
    rating INTEGER DEFAULT 5,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published testimonials"
ON public.testimonials FOR SELECT
TO anon, authenticated
USING (published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage testimonials"
ON public.testimonials FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create events table
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location TEXT,
    event_type TEXT,
    registration_url TEXT,
    image_url TEXT,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published events"
ON public.events FOR SELECT
TO anon, authenticated
USING (published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage events"
ON public.events FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create resources table
CREATE TABLE public.resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    resource_url TEXT,
    image_url TEXT,
    resource_type TEXT,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published resources"
ON public.resources FOR SELECT
TO anon, authenticated
USING (published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage resources"
ON public.resources FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Insert default site settings
INSERT INTO public.site_settings (key, value) VALUES
('name', 'Dr. Anbu'),
('title', 'Life Coach, Public Speaker & Author'),
('bio', 'Empowering individuals to unlock their full potential through mindful living and personal growth.'),
('email', ''),
('phone', ''),
('linkedin', ''),
('twitter', ''),
('instagram', ''),
('youtube', ''),
('profile_image', '');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
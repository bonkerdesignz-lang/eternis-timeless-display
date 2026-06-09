
CREATE TABLE public.site_content (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_content TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_content TO authenticated;
GRANT ALL ON public.site_content TO service_role;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published content" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert content" ON public.site_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can update content" ON public.site_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
INSERT INTO public.site_content (id, data) VALUES ('main', '{}'::jsonb) ON CONFLICT (id) DO NOTHING;

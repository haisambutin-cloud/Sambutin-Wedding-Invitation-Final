-- Lock down site_content writes to authenticated users only (admin panel)
DROP POLICY IF EXISTS "Public can insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Public can update site content" ON public.site_content;

CREATE POLICY "Authenticated can insert site content"
  ON public.site_content FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated can update site content"
  ON public.site_content FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

GRANT INSERT, UPDATE ON public.site_content TO authenticated;

-- Seed the content row so anonymous visitors always get a row to read
INSERT INTO public.site_content (id, data)
VALUES ('main', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
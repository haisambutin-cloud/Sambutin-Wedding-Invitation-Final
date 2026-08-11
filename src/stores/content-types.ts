export type TitleParts = {
  pre: string;
  em: string;
  post: string;
};

export type KeunggulanItem = {
  title: string;
  desc: string;
};

export type FiturItem = {
  title: string;
  desc: string;
};

export type PortfolioItem = {
  title: string;
  cat: string;
  link: string;
  price: string;
  priceOriginal?: string;
  image?: string;
  badge?: string;
};

export type ProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export type TestimoniItem = {
  text: string;
  name: string;
  meta: string;
  image?: string;
};

export type FAQItem = {
  q: string;
  a:
    | { type: "text"; content: string }
    | { type: "list"; content: string[] };
};

export type AddOnItem = {
  name: string;
  price: string;
};

export type SiteContent = {
  branding: {
    waNumber: string;
    waMessage: string;
    siteName: string;
    metaTitle: string;
    metaDescription: string;
  };

  nav: {
    label: string;
    href: string;
  }[];

  hero: {
    script: string;
    title: TitleParts;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
  };

  keunggulan: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    items: KeunggulanItem[];
  };

  fitur: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    items: FiturItem[];
  };

  portfolio: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    cats: string[];
    items: PortfolioItem[];
    ctaLabel: string;
  };

  addon: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    ticketLabel: string;
    items: AddOnItem[];
    note: string;
  };

  process: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    steps: ProcessStep[];
  };

  testimoni: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    items: TestimoniItem[];
    stats: {
      icon: string;
      label: string;
    }[];
  };

  faq: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    items: FAQItem[];
  };

  cta: {
    script: string;
    title: TitleParts;
    description: string;
    button: string;
  };

  kontak: {
    eyebrow: string;
    title: TitleParts;
    subtitle: string;
    phone: string;
    waNote: string;
    location: string;
  };

  footer: {
    tagline: string;
    email: string;
    instagram: string;
    facebook: string;
    waLabel: string;
  };
};
// Componentes comunes para usar en la interfaz
export interface Asset {
  url: string;
}

export interface RichText {
  json: any;
}

export interface BaseComponent {
  __typename: string; // Permite identificar el tipo de componente
}

// Tipos específicos para los componentes de la página
export interface Header extends BaseComponent {
  title: string;
  image: Asset;
}

export interface Hero extends BaseComponent {
  mainTitle: string;
  subtitle: string;
  buttonText: string;
  videoId: string;
  titleResponsive: RichText;
}

export interface Reality extends BaseComponent {
  title: string;
  subtitle: string;
  finalNote: RichText;
  points: RichText;
  icon: string;
}

export interface Testimonials extends BaseComponent {
  title: string;
  subtitleResponsive: RichText;
  sub: RichText;
  finalText: string;
  testimonialImagesCollection: {
    items: Asset[];
  };
}

export interface Program extends BaseComponent {
  welcomeText: string;
  mainTitle: string;
  image: Asset;
  desc: RichText;
  descMobile: RichText;
}

export interface VideoTestimonial extends BaseComponent {
  title: string;
  subtitle: string;
  videoUrl: string;
}

export interface Module extends BaseComponent {
  title: string;
  icon: string;
  description: string;
}

export interface CourseIncludes extends BaseComponent {
  title: string;
  buttonText: string;
  features: RichText;
  icon: string;
}

export interface Pricing extends BaseComponent {
  title: string;
  plansCollection: {
    items: {
      title: string;
      price: string;
      paymentType: string;
      features: RichText;
      buttonText: string;
      buttonLink: string;
    }[];
  };
}

export interface FAQ extends BaseComponent {
  title: string;
  questionsCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export interface CallToAction extends BaseComponent {
  title: string;
  sub: RichText;
  buttonText: string;
}

export interface AboutPilar extends BaseComponent {
  title: string;
  image: {
    url: string;
  };
  biography: RichText;
}

export interface StudentResults extends BaseComponent {
  textTitle: RichText;
  entry: string;
  testimonialImagesCollection: {
    items: {
      url: string;
    }[];
  };
}

// Tipo principal para los componentes dinámicos
export type PageComponent =
  | Header
  | Hero
  | Reality
  | Testimonials
  | Program
  | VideoTestimonial
  | Module
  | CourseIncludes
  | Pricing
  | FAQ
  | CallToAction
  | AboutPilar
  | StudentResults;

// Colección de componentes de la página
export interface PageComponentsCollection {
  items: PageComponent[];
}

// Página principal
export interface Page {
  slug: string;
  componentsCollection: PageComponentsCollection;
}

// Colección de páginas
export interface PageCollection {
  items: Page[];
}

// Query principal
export interface QueryData {
  pageCollection: PageCollection;
}

export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface Link {
  type: string;
  url: string;
};

export interface SectionPrimaty {
  name: string;
  title: Title;
  texts: string[]
  image: Image;
  links?: Link[];
};
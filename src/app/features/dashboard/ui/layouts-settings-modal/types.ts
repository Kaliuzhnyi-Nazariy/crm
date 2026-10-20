export type LayoutIds = 'first' | 'second' | 'third' | 'forth';

export type Layout = {
  id: LayoutIds;
  //   id: string;
  img?: string;
  contains: string[];
};

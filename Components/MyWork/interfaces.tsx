export interface tech {
  name: string;
  logo: any;
  note?: string;
}
export interface images {
  src: any;
  orientation: "h" | "v";
}
export interface work {
  name: string;
  description?: string;
  img: images[];
  stack: tech[];
  url?: string;
}

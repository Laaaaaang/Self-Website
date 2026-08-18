export type TraceLayout = "grid" | "sequence" | "diptych";

export type TraceCollection = {
  slug: string;
  title: string;
  description: string;
  layout: TraceLayout;
};

export type TracePhoto = {
  id: string;
  title: string;
  src: string;
  alt: string;
  collection: string;
  tags: string[];
  location?: string;
  date?: string;
  orientation: "portrait" | "landscape" | "square";
  order: number;
};

// Add exhibitions here. Each collection controls how its photographs are displayed.
export const traceCollections: TraceCollection[] = [];

// Register each photograph here after placing its file in public/images/traces/<collection>/.
// Example:
// {
//   id: "night-study-01",
//   title: "Night Study 01",
//   src: "/images/traces/night-studies/night-study-01.jpg",
//   alt: "A nocturnal study of reflected light beneath an overpass.",
//   collection: "night-studies",
//   tags: ["night", "structure", "reflection"],
//   location: "Pittsburgh",
//   date: "2026",
//   orientation: "portrait",
//   order: 1
// }
export const tracePhotos: TracePhoto[] = [];

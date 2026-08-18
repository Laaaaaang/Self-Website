import type { ComponentType } from "react";

import NotesOnEmergence, { metadata as notesOnEmergence } from "./notes-on-emergence.mdx";
import OnHiddenStructure, { metadata as onHiddenStructure } from "./on-hidden-structure.mdx";
import RepresentationIsNotStructure, {
  metadata as representationIsNotStructure
} from "./representation-is-not-structure.mdx";
import WhatSurvivesTransformation, {
  metadata as whatSurvivesTransformation
} from "./what-survives-transformation.mdx";

export type FragmentEntry = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  summary: string;
  Component: ComponentType<Record<string, never>>;
};

export const fragmentEntries: FragmentEntry[] = [
  {
    slug: "on-hidden-structure",
    ...onHiddenStructure,
    Component: OnHiddenStructure
  },
  {
    slug: "representation-is-not-structure",
    ...representationIsNotStructure,
    Component: RepresentationIsNotStructure
  },
  {
    slug: "what-survives-transformation",
    ...whatSurvivesTransformation,
    Component: WhatSurvivesTransformation
  },
  {
    slug: "notes-on-emergence",
    ...notesOnEmergence,
    Component: NotesOnEmergence
  }
];

export function getFragmentBySlug(slug: string) {
  return fragmentEntries.find((fragment) => fragment.slug === slug);
}

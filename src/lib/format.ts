// src/lib/format.ts
export function lastName(full: string): string {
  // Take the final token; handles “A. B. Lastname”, “Lastname, Firstname” fallback
  if (!full) return '';
  if (full.includes(',')) return full.split(',')[0].trim();
  const parts = full.trim().split(/\s+/);
  return parts[parts.length - 1];
}

export function firstAuthorsEtAl(allAuthors: string[], firsts?: string[]): string {
  const chosen = (firsts && firsts.length ? firsts : (allAuthors?.[0] ? [allAuthors[0]] : [])).map(lastName);
  if (!chosen.length) return '';
  const etal = allAuthors && allAuthors.length > chosen.length ? ' et al.' : '';
  // “Levis” or “Levis, Luong” (and then add “ et al.” if applicable)
  const names = chosen.length === 1 ? chosen[0] : `${chosen[0]}, ${chosen[1]}`;
  return names + etal;
}

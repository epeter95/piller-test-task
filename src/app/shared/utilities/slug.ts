export function toSlug(value: string): string {
  return value
    .toLowerCase()                        // lowercase
    .normalize('NFD')                     // decompose accents
    .replaceAll(/[\u0300-\u036f]/g, '')     // remove diacritics
    .replaceAll(/\s+/g, '-')                 // replace spaces with hyphens
    .replaceAll(/[^\w-]+/g, '')             // remove invalid chars
    .replaceAll(/--+/g, '-')                 // collapse multiple hyphens
    .replaceAll(/^-+|-+$/g, '');            // trim hyphens from start/end
}

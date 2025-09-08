# Fix Team Page Issues

## Issues Identified
- [x] Missing `Users` import from lucide-react causing runtime error
- [x] Image paths missing leading slash for public assets
- [x] Category badge logic has mismatch for 'media' category
- [x] TypeScript errors for implicit any types and undefined social object

## Steps to Fix
1. [x] Add `Users` to lucide-react import in TeamPage.tsx
2. [x] Update image paths to start with '/'
3. [x] Fix category badge logic for 'chapter-lead'
4. [x] Fix TypeScript errors (parameter types and null checks)
5. [ ] Test the page rendering

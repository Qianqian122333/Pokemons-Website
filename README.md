# PokeWeb

PokeWeb is a lightweight Pokémon browser built with React, TypeScript, Vite and Chakra UI. It consumes the PokeAPI to display Pokémon data, supports filtering by type and color, searching by name, and shows detailed Pokémon information in a modal when a card is clicked.

## Key Features

- Filter Pokémon by Type and Color
- Exact name search (English names)
- Clickable Pokémon cards with a detail modal (artwork, height, weight, types, abilities, stats)
- Responsive layout with a larger search field on wide screens
- Built using Chakra UI for consistent styling and easy theming

## Tech Stack

- React 18
- TypeScript
- Vite
- Chakra UI
- Axios (for PokeAPI requests)

## Quick Start

Ensure you have Node.js (recommended v18+) and npm installed.

Clone and install dependencies:

```bash
git clone <your-repo-url>
cd poke-web
npm install
```

Run in development mode:

```bash
npm run dev
```

Build and preview production bundle:

```bash
npm run build
npm run preview
```

## Usage

- Search: Type an English Pokémon name in the navbar and press Enter (e.g. `pikachu`). Searching will clear current type/color filters.
- Filter: Choose a `Type` or `Color` from the UI to filter results (selecting a filter clears the search input).
- Clear filters: Selected `Type` / `Color` are shown as capsule tags with an `X` close button to remove each filter individually.
- Details: Click a Pokémon card to open a modal that displays detailed information and stat bars.

## Project Structure (important files)

- `src/components/NavBar.tsx` — Top navigation containing `SearchBar`
- `src/components/SearchBar.tsx` — Search input component
- `src/components/PokeGrid.tsx` — Grid / list displaying Pokémon
- `src/components/PokeCard.tsx` — Single Pokémon card (clickable)
- `src/components/PokeDetailModal.tsx` — Modal showing Pokémon details
- `src/components/PokeHeading.tsx` — Displays and clears active filter tags
- `src/hooks/usePokemons.ts` — Fetching and filtering logic (supports type / color / search)
- `src/services/api-client.ts` — Axios instance configured for PokeAPI

Inspect these files to extend the app or to add new behaviors.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a branch `feature/your-feature`
3. Commit and push, then open a Pull Request

---

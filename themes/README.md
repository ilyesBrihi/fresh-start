# Fresh Start — Theme Modules

This folder contains modular pieces that build the Fresh Start theme. Each file focuses on one part of VS Code's appearance.

## Structure

**base/** - Core window and text colors

**components/** - Buttons, inputs, scrollbars, badges

**panels/** - Sidebar, statusbar, tabs, editor panels

**editor/** - Code editor styling, selections, brackets, gutter, errors, diff view

**terminal/** - ANSI colors and terminal styling

**extensions/** - Git, debug, testing, and other extension UI

**syntax/** - Token colors for Go, Python, TypeScript, JavaScript, JSON, and YAML

## How It Works

1. Each `.json` file defines colors or syntax rules
2. Colors use `{{variable-name}}` syntax referencing `theme-colors.json`
3. The build script merges everything into `fresh-start.json`

## Building

```bash
npm run build-theme
```

The script scans all modules, resolves color variables, and creates the final theme file.

## Customizing

Want to change colors? Edit `theme-colors.json` - changes apply everywhere.

Want to modify specific areas? Edit the relevant module file in its category folder.

## Creating Your Own Theme

1. Create a new folder in `themes/` (e.g., `themes/my-theme`)
2. Copy the structure from `themes/original`
3. Modify `theme-colors.json` with your colors
4. Adjust module files as needed
5. Modify the build script to reflect your files (Working on a CLI).
6. Run the build script

The modular setup makes it easy to experiment without breaking things.

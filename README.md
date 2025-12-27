Fresh Start
===========

A clean, dark theme for VS Code with support for Go, Python, TypeScript, JavaScript, JSON, and YAML.

Installation
------------

**From Marketplace:** Search "Fresh Start" in VS Code Extensions or visit [the marketplace](https://marketplace.visualstudio.com/items?itemName=BrihiIlyesImad.fresh-start).

**Manual Install:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`git clone https://github.com/ilyesBrihi/fresh-start.git`

Copy the folder to your VS Code extensions directory:

* **Windows:** C:\\Users\\YourUsername\\.vscode\\extensions

* **macOS/Linux:** ~/.vscode/extensions

Then open VS Code, press Ctrl+Shift+P (or Cmd+Shift+P on macOS), type "Color Theme," and select "Fresh Start."

Features
--------

* Clean syntax highlighting with distinct colors for keywords, types, functions, and more

* Reduced shadows on widgets for a cleaner look

* Modular theme structure for easy customization

* Optimized for multiple programming languages

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`themes/original/     # Fresh Start theme modules  ├── base/           # Core interface colors  ├── components/     # Buttons, inputs, scrollbars  ├── editor/         # Editor-specific styling  ├── panels/         # Sidebar, statusbar, tabs  ├── syntax/         # Language-specific highlighting  ├── terminal/       # Terminal colors  └── extensions/     # Git, debug, testing UI  scripts/            # Build system  docs/              # Documentation`

Building the Theme
------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`npm run build-theme`

This merges all module files into themes/original/fresh-start.json.

Contributing
------------

Want to contribute? You can:

1. **Create a new theme variant** - Make a new folder in themes/ with your own colors

2. **Add language support** - Create a syntax file in themes/original/syntax/

3. **Improve existing colors** - Edit module files and submit a PR

The modular structure makes it easy to work on specific parts without touching everything else.

Color System
------------

Colors are defined in theme-colors.json and referenced using {{variable-name}} syntax throughout the theme. See docs/COLOR\_PALETTE.md for details.

License
-------

MIT License with additional terms. See LICENSE.md for details.

Author
------

Brihi Ilyes Imad - [GitHub](https://github.com/ilyesBrihi)

**Have issues or suggestions?** Open an issue on [GitHub](https://github.com/ilyesBrihi/fresh-start).

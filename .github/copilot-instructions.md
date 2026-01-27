# Copilot Instructions for AI Coding Agents

## Project Overview
This repository is a collection of static web assignments and practice files. It is organized into folders for each assignment, each containing HTML, CSS, and sometimes JavaScript files. There is no build system, backend, or package management—just direct editing and previewing of files.

## Directory Structure
- `AS02/`, `as03/`, `as1/`: Assignment folders. Each contains:
  - `index.html`: Main HTML file for the assignment
  - `style.css`: Assignment-specific styles
  - `script.js`: (only in `as03/`) Assignment-specific JavaScript
- `parctice-sticky-top.html`: Standalone HTML file for layout practice
- No global CSS/JS—each assignment is self-contained

## Key Patterns & Conventions
- **File Naming:** Lowercase, short, and descriptive. Assignment folders use `AS` or `as` prefix.
- **HTML Structure:** Each `index.html` is the entry point for its assignment. Use semantic HTML and link only local CSS/JS.
- **CSS:** Styles are scoped per assignment. Avoid global selectors that could affect other assignments.
- **JavaScript:** Only present in `as03/script.js`. Scripts should be modular and interact only with their assignment's DOM.
- **No Frameworks:** Do not introduce frameworks or build tools. Keep all code vanilla and static.

## Developer Workflow
- **Edit & Preview:** Open HTML files directly in the browser to preview changes. No build or test commands are required.
- **Debugging:** Use browser DevTools for inspecting layout, styles, and scripts.
- **Adding Assignments:** Create a new folder (e.g., `as04/`), add `index.html`, `style.css`, and optionally `script.js`.

## Integration Points
- No external dependencies or APIs.
- All resources are local and self-contained.

## Examples
- To add a new assignment:
  1. Create `as04/` folder
  2. Add `index.html`, `style.css`, and (if needed) `script.js`
  3. Link CSS/JS in the HTML using relative paths

## Important Files
- `AS02/index.html`, `as03/index.html`, `as1/index.html`: Reference for assignment structure
- `as03/script.js`: Example of assignment-specific scripting
- `parctice-sticky-top.html`: Example of standalone layout practice

---

**For AI agents:**
- Focus on direct file edits, not project-wide refactoring
- Maintain assignment isolation—do not share code across folders
- Use clear, simple code and comments for educational clarity

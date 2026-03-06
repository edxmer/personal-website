# **Edömér's Archive** <br> *cheat_sheets/vscode*

<!-- nav -->
## *Navigation:*
- [~](../index.md)
- [Projects](../projects/projects.md)
- [Cheat Sheets](cheat_sheets.md)
- [Resources](../resources/resources.md)
<!-- /nav -->

[« Go back](cheat_sheets.md)

## *Contents:*
- [General](#general)
- [Basic Editing](#basic-editing)
- [Multi-cursor and Selection](#multi-cursor-and-selection)
- [Navigation](#navigation-1)
- [Search and Replace](#search-and-replace)
- [Window Management](#window-management)

## General
> Tip: The command palette can be used to search for any action, if you forget a shortcut, and it will also display the shortcut.
<br>
> For example: `Format Document` -> searches for the formatting command and shows its keybind.

| Keybind | Action |
| - | - |
| `⌘⇧P` / `F1` | open command palette |
| `⌘P` | quick open (go to file) |
| `⌘⇧N` | open new window/instance |
| `⌘W` | close active window/tab |
| `⌘,` | open user settings |


## Basic Editing
> Tip: If you press copy or cut without having any text selected, VS Code will automatically copy or cut the entire current line.

| Keybind | Action |
| - | - |
| `⌘X` | cut |
| `⌘C` | copy |
| `⌥Up` / `⌥Down` | move line up / down |
| `⇧⌥Up` / `Down` | copy line up / down |
| `⌘Enter` | insert line below |
| `⌘⇧Enter` | insert line above |
| `⌘/` | toggle line comment |
| `⌥Z` | toggle word wrap |


## Multi-cursor and Selection
> Example usage:
&emsp; Select a variable name, press `⌘D` three times to select the next 3 occurrences, and type to rename them all simultaneously.

| Keybind | Action |
| - | - |
| `⌥Click` | insert multiple cursors |
| `⌘⌥Up` / `Down` | insert cursor above / below |
| `⌘D` | add selection to next Find match |
| `⌘K` then `⌘D` | move last selection to next Find match |
| `⌘⇧L` | select all occurrences of current selection |
| `⌘U` | undo last cursor operation |


## Navigation
> Tip: You can use Quick Open (`⌘P`) with special prefixes to navigate. Type `@` to jump to symbols (like functions) in your current file, or `#` for symbols across your entire workspace.

| Keybind | Action |
| - | - |
| `⌃G` | go to line... |
| `⌘⇧O` | go to symbol... |
| `F12` | go to definition |
| `⌥F12` | peek definition |
| `⌘⌥Left` / `Right` | go back / forward in file history |
| `⌘Up` / `⌘Down` | jump to absolute beginning / end of file |
| `⌘Right` / `⌘Left` | jump to absolute end / beginning of line |
| `⌥Right` / `⌥Left` | move forward / backward by word |


## Search and Replace
> Tip: Inside the search widget, you can toggle modifiers using keyboard shortcuts: Case Sensitivity (`⌘⌥C`), Whole Word (`⌘⌥W`), and Regular Expressions (`⌘⌥R`).

| Keybind | Action |
| - | - |
| `⌘F` | find in current file |
| `⌘⌥F` | replace in current file |
| `⌘G` / `⌘⇧G` | find next / find previous |
| `⌘⇧F` | search across all files in workspace |
| `⌘⇧H` | replace across all files in workspace |

## Window Management
| Keybind | Action |
| - | - |
| `⌘B` | toggle sidebar visibility |
| `⌘J` | toggle bottom panel visibility (terminal, output, etc.) |
| `⌘\` | split editor side-by-side |
| `⌘1` / `⌘2` / `⌘3` | focus into 1st, 2nd, or 3rd editor group |
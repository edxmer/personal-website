# **Edömér's Archive** <br> *cheat_sheets/vim*

<!-- nav -->
## *Navigation:*
- [~](../index.md)
- [Projects](../projects/projects.md)
- [Cheat Sheets](cheat_sheets.md)
- [Resources](../resources/resources.md)
<!-- /nav -->

[« Go back](cheat_sheets.md)

<!-- contents -->
## *Contents:*
- [Commands](#commands)
- [Keybinds](#keybinds)
  - [Insert mode](#insert-mode)
  - [Visual (selection) mode](#visual-selection-mode)
  - [Clipboard](#clipboard)
  - [Navigation](#navigation-1)
  - [Search and Replace](#search-and-replace)
  - [Undo, Redo, and Repeat](#undo-redo-and-repeat)
<!-- /contents -->

## Commands
> Tip: The longer vim commands can be shortened by only writing the part where if you were to press tab, the autocomplete would only find a single command <br>
> For example: `:Explore` -> `:Ex`

| Command | Action |
| - | - |
| `:q` | exit |
| `:q!` | force exit |
| `:w (optional:filename)` | write (save) |
| `:wq` | write and quit |
| `:Explore` | open vim file explorer |
| `:(n)` | jump to nth line
| `:m+(n)` / `m-(n)` | move current line (or selected lines) to above the relative +nth or -nth line

## Keybinds
> Tip: by typing a number before a command, vim will repeat the command the typed number of times <br><br>
> For example: 
&emsp; `dd`: *delete line* 
&emsp;&emsp; `3dd`: *delete 3 lines*
### Insert mode
| Keybind | Action |
| - | - |
| `i` | enter insert mode before cursor |
| `a` | enter insert mode on cursor |
| `I` | enter insert mode at the beginning of line |
| `A` | enter insert mode at the end of line |
| `o` | create line below, and enter insert mode there |
| `O` | create line above, and enter insert mode there |
### Visual (selection) mode
> Tip: if you type a command or keybind in visual mode, it will usually apply to the selection

| Keybind | Action |
| - | - |
| `v` | enter visual mode |
| `V` | enter visual line mode |
| `>` | shift selected text to right (by a tab) |
| `<` | shift selected text to left (by a tab)
| `>>` | shift current line to right (by a tab)
| `<<` | shift current line to right (by a tab)

### Clipboard
> Tip: registers are basically storages. You can specify which register you want to run a command on, like `"ayy` to copy the current line into register `a`. You can then paste it by running `"ap`. There are also special registers like `0` for your last yank, and `+` or `*` for system clipboard. There is also the `_` black hole register, which is similar to /dev/null

| Keybind | Action |
| - | - |
| `yy` | yank (copy) line (to register 0)
| `y` | yank selection (in visual mode)
| `p` | paste after cursor |
| `P` | paste before cursor |
| `dd` | delete (cut) line |
| `d` | delete (cut) selection (in visual mode) |
| `x` | delete (cut) character under cursor |
| `cc` | change (delete line and enter insert mode) |
| `c` | change (delete selection and enter insert mode) |

### Navigation
> Tip: You can also combine numbers with movement keys. For example, `5j` will move the cursor down 5 lines, and `3w` will jump forward 3 words.

| Keybind | Action |
| - | - |
| `h` / `j` / `k` / `l` | move left / down / up / right |
| arrow keys| move left / down / up / right |
| `w` | move forward to start of next word |
| `b` | move backward to start of previous word |
| `e` | move forward to end of word |
| `0` | move to absolute beginning of line |
| `^` | move to first non-blank character of line |
| `$` | move to absolute end of line |
| `gg` | jump to first line of document |
| `G` | jump to last line of document |
| `Ctrl + u` | move half a screen up |
| `Ctrl + d` | move half a screen down |

### Search and Replace
> Tip: You can clear the highlighting of your last search by typing `:noh`

| Keybind / Command | Action |
| - | - |
| `/pattern` | search forward for 'pattern' |
| `?pattern` | search backward for 'pattern' |
| `n` | repeat search in same direction |
| `N` | repeat search in opposite direction |
| `*` | search forward for the exact word under cursor |
| `#` | search backward for the exact word under cursor |
| `:%s/old/new/g` | replace all occurrences of 'old' with 'new' throughout the file. |
| `:%s/old/new/gc` | replace with confirmation prompts for each match (`y` to accept, `n` to skip) |

### Undo, Redo, and Repeat
| Keybind | Action |
| - | - |
| `u` | undo last action |
| `Ctrl + r` | redo last undone action |
| `.` | repeat last change |
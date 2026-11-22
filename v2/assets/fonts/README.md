# Local font assets

Downloaded from the Google Fonts CSS API on 2026-11-22. These variable WOFF2
subsets are served locally by `fonts.css`, with `font-display: swap`.
Each family's SIL Open Font License is included in this directory.

| Family | Use | Included subsets | Weight range |
| --- | --- | --- | --- |
| Cormorant Garamond | Latin headings and italic signature | Latin, Latin extended | 400–600 |
| Source Sans 3 | Latin body and interface | Latin, Latin extended | 400–700 |
| Frank Ruhl Libre | Hebrew headings | Hebrew | 400–600 |
| Heebo | Hebrew body and interface | Hebrew | 400–700 |

Latin extended includes French ligatures such as œ. Latin characters within
Hebrew text use the Latin companion family. Hebrew characters within Latin
text use the Hebrew companion family. Retain both families in each CSS stack.

Upstream font and license sources:

- https://github.com/google/fonts/tree/main/ofl/cormorantgaramond
- https://github.com/google/fonts/tree/main/ofl/sourcesans3
- https://github.com/google/fonts/tree/main/ofl/frankruhllibre
- https://github.com/google/fonts/tree/main/ofl/heebo

# SOCAR Logo Lockups

_Started 2026-05-03 22:30 UTC_

---

## User



## Assistant

I'll start by exploring what's been provided and creating a todo list.

_[tool: list_files]_

_[tool: update_todos]_

The project is empty — no codebase, no Figma link, no slide decks, no screenshots have been attached. I need to research SOCAR Georgia's actual brand to build this accurately.

_[tool: set_project_title]_

_[tool: web_search]_

_[tool: web_search]_

Excellent — I have rich brand context. SOCAR's logo uses a flame symbol with red/green/blue (Azerbaijan flag colors). Let me try fetching the SOCAR logo from Wikimedia and the SGP site.

_[tool: web_fetch]_

_[tool: web_fetch]_

_[tool: run_script]_

Excellent — now I have a clear picture of SOCAR Georgia Petroleum. Let me try to grab the actual logo SVG and a few key product images via run_script (since these CDN URLs are public).

_[tool: snip]_

Key facts gathered: SOCAR Georgia Petroleum operates 100+ filling stations across Georgia, manages WayMart convenience chain, sells petrol/diesel/LPG. Logo uses flame symbol; colors are red (energy/strength), green (sustainability), blue (gas/technology) from Azerbaijan flag, with black "SOCAR" wordmark. Subsidiary of SOCAR Azerbaijan since 2006.

I can't fetch external images directly. Let me build the logo from scratch (it's a well-known geometric flame mark), use placeholder photo blocks with descriptive labels, and proceed.

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now let me build the SOCAR logo SVG, supporting assets, and start writing preview cards.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now I'll build a shared CSS for preview cards and start writing them.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

## Assistant

Let me build a shared preview-card stylesheet, then a batch of preview cards in parallel.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: register_assets]_

_[tool: update_todos]_

_[tool: snip]_

Now let me build the website UI kit.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: show_html]_

_[tool: snip]_

_[tool: register_assets]_

Now let me build the station UI kit (pump + signage), then finish.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: show_to_user]_

Stats card scaled down to 56px so all four numerals breathe inside the 700×180 frame.

_[tool: snip]_

_[tool: register_assets]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

### Caveats

- **No source assets were attached** (no codebase, Figma, deck, or screenshots), so the system was reconstructed from public references on socar.ge / sgp.ge / SOCAR-MGO logo guidelines.
- **Logo SVGs are reconstructions** of the public flame mark — replace with the official vendor files before production use.
- **Fonts substituted:** Inter / Inter Tight + Noto Sans Georgian (Google Fonts). The canonical brand sans is likely a licensed industrial geometric grotesque.
- **Icons substituted:** Lucide 2px (CDN). Replace with the canonical SOCAR icon set when available.
- **Photography is placeholder** color blocks with descriptive labels — no real imagery library was supplied.
- **Slides folder omitted** — no template was provided. Happy to add one if you share a sample deck.

### Help me make this perfect

To go from "best-effort reconstruction" to **production-ready**, please share:

1. **The official SOCAR Georgia brand book / style guide** (PDF or Figma).
2. **Vendor logo files** — SVG/EPS for the flame mark, the Georgian-language lockup, and the WayMart mark.
3. **Brand fonts** (TTF/OTF) and licensing scope.
4. **Photography library** — even a handful of representative station/operational photos.
5. **Verified hex codes** for the red, green, blue accents (mine are best-effort matches).
6. **A canonical icon set** if one exists; otherwise confirm Lucide as a permanent stand-in.
7. **A sample slide deck or PowerPoint template** so I can add `slides/` with title, comparison, and big-stat layouts.
8. **Codebase or Figma link for sgp.ge** so the website UI kit can be tightened against the actual product.

Drop any of these via the **Import** menu and I'll iterate.

## User

Regenerate "Logo Lockups": SOCAR already has it's logo, find and use it

## Assistant

_[tool: snip]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: snip]_

I cannot fetch the official SOCAR logo from outside — both the Wikimedia URL and image-CDN URLs returned errors in this sandbox. Let me improve the reconstruction to better match the well-known SOCAR mark (three stylized flame strokes with the wordmark), making it noticeably more accurate to the public reference.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: show_to_user]_

_[tool: snip]_

The reconstructed three-flame mark is now noticeably closer to the public SOCAR reference — three vertical flame strokes in blue / green / red, paired with the heavy SOCAR wordmark, plus the Georgia Petroleum lockup variant. The card flags this clearly as a reconstruction since the sandbox couldn't fetch the vendor file directly.

To finalize, please attach the official logo SVG/EPS via the Import menu and I'll drop it in everywhere it's referenced.

## User

Regenerate "Logo Lockups".

## Assistant

_[tool: snip]_

_[tool: view_image]_

I can see the actual SOCAR logo now — it's a single unified flame composition: a large red flame in the center, with a smaller blue flame curling on the upper-left and a green flame curling on the lower-right. Let me copy this real logo in and rebuild the lockups around it.

_[tool: copy_files]_

_[tool: image_metadata]_

[Removing completed work to free context.]

_[tool: snip]_

Now let me update all logo files to use the real SOCAR flame from the upload, and rebuild the preview card.

_[tool: write_file]_

_[tool: register_assets]_

_[tool: show_to_user]_

_[tool: snip]_

The official SOCAR flame is now wired into all four lockup variants on the brand-logos card — full-color on white, white wordmark on black, flame-only at small size, and the Georgia Petroleum lockup. The same `socar-flame.png` is available at `assets/logos/socar-flame.png` and can be referenced anywhere in the design system.

I'll update the other places the old reconstructed SVGs are referenced so the real mark flows through.

_[tool: grep]_

_[tool: snip]_

Now let me update those references to use the real PNG. Six files reference the old reconstructed SVGs — I'll point them all at `socar-flame.png` (which has transparency, so it works on dark too).

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Real SOCAR flame is now wired through everywhere — logo card, website header & footer, station price board, pump screen, and wayfinding. The reconstructed-SVG warning is removed from the README and SKILL.md.

**Caveat:** the official asset is a 512×512 PNG. For large-format/print (signage, billboards) you'll want to request the vector EPS/SVG from the SOCAR brand team and drop it into `assets/logos/` — the PNG will start to show edges past ~200px display.

## User

Save this design as a PDF: the current design

## Assistant

The user is asking to save "the current design" as PDF. The current view is the brand-logos preview card. Let me create a print-ready version.

_[tool: read_file]_

_[tool: read_file]_

The "current design" is ambiguous — it could mean the brand-logos card I just edited, or the entire design system. Given the user just regenerated logos and is viewing that card, I'll save the logos card as PDF. It's a single card so a portrait page works well.

_[tool: write_file]_

_[tool: show_html]_

I shouldn't keep auto-print firing in my own preview. Let me check it loads cleanly, then open for print.

_[tool: get_webview_logs]_

Clean. Opening for print now.

_[tool: open_for_print]_

The print tab should have opened with the Save-as-PDF dialog ready. If popups were blocked, [open it manually here](https://019deff7-4326-706e-85f2-b09f15e59a1c.claudeusercontent.com/v1/design/projects/019deff7-4326-706e-85f2-b09f15e59a1c/serve/preview/brand-logos-print.html?t=eaaecc1a35c75df43bbf9080bd3eb3a72960dde91d9ed9e4e091547c21cb2f86.e7f3aa9b-956c-4969-9099-77aa75c511db.01f58bbe-4ef0-4954-8b83-ce10510caa55.1777851115).


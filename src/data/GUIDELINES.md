# Data Update Guidelines

## Activities (`activities/activities.json`)

- Store all activities in one list file: `src/data/activities/activities.json`.
- Add new activities by appending a new object at the end of the array.
- Always set:
  - `date`: display text (example: `March 2026`)
  - `sortDate`: sortable value in `YYYY-MM` format (example: `2026-03`)
  - `icon`: one of `Award`, `FileText`, `Presentation`, `Users`
- `id` is optional. If omitted, it is auto-assigned in list order.
- `color` is optional. If omitted, it is auto-assigned.
- Rendering order is handled by `activitiesNewestFirst`, so items still show newest-first.

Example:

```json
[
  {
    "date": "March 2026",
    "sortDate": "2026-03",
    "type": "conference",
    "title": "Activity title",
    "description": "One-sentence update summary.",
    "icon": "Presentation",
    "link": "https://example.com"
  }
]
```

## Projects (`projects/*.json`)

- Store each project in its own JSON file under `src/data/projects/`.
- Use numeric filename prefixes to keep manual order clear, for example:
  - `001-dytrec.json`
  - `002-vr-accessibility-analyzer.json`
- Keep existing project `id` values stable.
- Add new projects by creating a new JSON file (do not edit `index.ts`).
- Copy `src/data/projects/_template.project.json` for new entries.
- For `image`, you can use a local asset path like `src/assets/projects/007.jpeg`.
- `fullDescription` supports lightweight rich text:
  - `**bold text**`
  - `==italic text==`
  - `[link text](https://example.com)`
  - Unordered lists with `- item` or `* item` (inside a block)
  - Ordered lists with `1. item`, `2. item` (inside a block)
  - Separate paragraphs with a blank line (`\n\n`)
- Supported portfolio item `type` values:
  - `paper`
  - `tool`
  - `award` (for grants/funding/awards related to the project)
- The same lightweight rich text syntax also works in portfolio text fields:
  - paper `authors`, paper `venue`, tool `description`, award `description`
- `portfolio` display order in project detail:
  - items with `"pin": true` appear first
  - then remaining items are sorted by `publishedDate` descending (`YYYY-MM`)
- `pin` is optional on each portfolio item.
- Tool `linkType` supports `github`, `website`, and `pypi`.
- `src/data/projects/index.ts` auto-loads all JSON files and excludes the template file.

Template path:

`src/data/projects/_template.project.json`

## Teaching (`teaching/*.json`)

- Store each course in its own JSON file under `src/data/teaching/`.
- Use numeric filename prefixes for ordering, for example:
  - `001-1051.json`
  - `002-1052.json`
- Keep existing course `id` values stable.
- Add new courses by creating a new JSON file (do not edit imports manually).
- Copy `src/data/teaching/_template.course.json` when adding a new course.
- Required syllabus structure:
  - `objectives`: string array
  - `textbook`: `{ title, url, description }`
  - `gradingBreakdown`: array of `{ item, weight }`
  - `classSchedule`: array of `{ week, topic }` (typically 15 rows)
- `src/data/teaching/index.ts` auto-loads all JSON files and excludes the template file.

# SurgViva Project

We are building a mobile-first Surgery Viva web application called SurgViva.

## GitHub

Repository:

s3workforce-s3-bot/SurgViva

GitHub Pages is already configured.

Website:

https://s3workforce-s3-bot.github.io/SurgViva/

The GitHub connector is available in this chat. Please update the repository directly whenever possible instead of asking for code to be copied manually.

## Current Status

Version 1.0 is complete.

The home page displays:

- SurgViva
- Surgery Viva Platform
- Examiner button
- Student button

This is already deployed on GitHub Pages.

## Project Philosophy

- Build slowly.
- Every commit should leave the website in a working state.
- One feature at a time.

## Version 1.1 (Build Next)

Replace the current placeholder page with a single-page application.

- No separate HTML pages.
- Use one index.html.

When Examiner is tapped:

Show:

- Hernia
- Breast
- Thyroid

as large touch-friendly cards.

When Student is tapped:

Show:

"Waiting for examiner..."

with a clean full-screen display.

- No alert popups.

## Version 1.2

Hernia question cards.

Requirements:

- 10 questions.
- At least 6 cards visible on one phone screen.
- Large cards.
- Easy to tap.

## Version 1.3

Breast questions.

- 10 cards.

## Version 1.4

Thyroid questions.

- 10 cards.

## Version 1.5

Real-time synchronization between examiner and student phones using Firebase.

- Examiner taps a question.
- Student phone updates instantly.

## Design Rules

Two taps to any question.

Example:

Examiner

↓

Tap Hernia

↓

Tap Clinical Examination

↓

Student sees question.

- No unnecessary menus.
- No typing.

## Question Structure

Store questions separately from the interface.

Each question should have:

```json
{
  "id": "H04",
  "title": "Clinical Examination",
  "display": "Describe the clinical examination of a patient with an inguinal hernia. Discuss the findings and differentiate between direct and indirect inguinal hernias."
}
```

The examiner sees only the title.

The student sees the full display text.

## Current Subjects

Only these three:

- Hernia
- Breast
- Thyroid

- 10 questions each.
- No answers.
- No scoring.
- No AI.
- No timer.

Keep Version 1 very simple.

## Future Roadmap

### V2

- Images
- Clinical photographs
- Instruments
- X-rays

### V3

- AI examiner
- Scoring
- Timer
- Multiple viva rooms

## Development Workflow

- Update the GitHub repository directly.
- Commit changes.
- GitHub Pages deploys automatically.
- Refresh the website and test.
- Repeat.

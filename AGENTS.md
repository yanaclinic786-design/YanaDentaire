<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Clinic architecture
- Use TanStack Start file routes with per-leaf search metadata; this preserves SSR and independently discoverable clinic pages.
- Keep exact clinic facts and search helpers in src/lib/clinic.ts; centralisation prevents local SEO inconsistencies.
- Public clinic content loads via a publishable-key server function and query loader; this keeps initial content in SSR without privileged reads.
- Store clinic media in private Cloud storage with signed public-read URLs gated by published media rows; workspace privacy policy disallows public buckets.
- Admin content writes require a separate database admin role via RLS; sign-in alone must never grant editing privileges.

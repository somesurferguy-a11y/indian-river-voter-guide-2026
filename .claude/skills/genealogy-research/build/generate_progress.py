#!/usr/bin/env python3
"""Regenerate progress.html from status.json. Run after every critic verdict."""
import json, os, datetime, html

HERE = os.path.dirname(os.path.abspath(__file__))
STATUS = os.path.join(HERE, "status.json")
OUT = os.path.join(HERE, "progress.html")

CRIT_LABELS = {
    "citation_formats": "Citation formats",
    "source_evaluation": "Source evaluation rigor",
    "timeline_accuracy": "Timeline accuracy",
    "relationship_clarity": "Relationship clarity",
    "documentation_completeness": "Documentation completeness",
}
STATUS_CLASS = {
    "queued": "s-queued", "building": "s-building", "in review": "s-review",
    "revising": "s-building", "passed": "s-pass", "failed": "s-fail",
}

def esc(v):
    return html.escape(str(v if v is not None else ""))

def main():
    with open(STATUS) as f:
        d = json.load(f)
    d["updated"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    with open(STATUS, "w") as f:
        json.dump(d, f, indent=2)

    crits = d["criteria"]
    domains = d["domains"]
    passed = sum(1 for x in domains if x["status"] == "passed")
    rounds = sum(x["round"] for x in domains)

    rows = []
    for x in domains:
        sc = x.get("scores") or {}
        total = sum(sc.get(c, 0) for c in crits) if sc else None
        cells = []
        for c in crits:
            v = sc.get(c)
            if v is None:
                cells.append('<td class="num empty">—</td>')
            else:
                cls = "good" if v >= 9 else ("ok" if v >= 8 else "bad")
                cells.append(f'<td class="num {cls}">{esc(v)}</td>')
        tot = '<td class="num empty">—</td>' if total is None else \
              f'<td class="num total {"good" if total>=44 else "bad"}">{total}<span class="den">/50</span></td>'
        scls = STATUS_CLASS.get(x["status"], "s-queued")
        rows.append(f"""    <tr>
      <th scope="row"><span class="dname">{esc(x['name'])}</span><span class="did">{esc(x['id'])}.md</span></th>
      <td><span class="pill {scls}">{esc(x['status'])}</span></td>
      <td class="num">{esc(x['round'])}</td>
{chr(10).join('      '+c for c in cells)}
{'      '+tot}
      <td class="gap">{esc(x['gap'])}</td>
    </tr>""")

    logrows = "".join(
        f'<li><span class="lt">{esc(e.get("t",""))}</span> {esc(e.get("msg",""))}</li>'
        for e in reversed(d.get("log", [])[-40:])
    ) or '<li class="muted">No events yet.</li>'

    bench = "".join(f"<li>{esc(b)}</li>" for b in d["benchmarks"])
    heads = "".join(f'<th class="num" scope="col"><span>{esc(CRIT_LABELS.get(c,c))}</span></th>' for c in crits)

    doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Genealogy Skill Build Progress</title>
<style>
  :root {{
    --bg:#f7f6f3; --panel:#fff; --ink:#1b1917; --muted:#6b6560; --line:#e3ded6;
    --good:#1f7a4d; --goodbg:#e4f3ea; --ok:#8a6a12; --okbg:#fbf2d9; --bad:#a32b26; --badbg:#fae8e6;
    --accent:#5a4632;
  }}
  @media (prefers-color-scheme: dark) {{
    :root:not([data-theme="light"]) {{
      --bg:#17150f; --panel:#201d16; --ink:#efeae1; --muted:#a49c90; --line:#353026;
      --good:#6cd39b; --goodbg:#16311f; --ok:#e0bc5c; --okbg:#33290f; --bad:#f08b85; --badbg:#3a1a18;
      --accent:#d8c3a5;
    }}
  }}
  :root[data-theme="dark"] {{
    --bg:#17150f; --panel:#201d16; --ink:#efeae1; --muted:#a49c90; --line:#353026;
    --good:#6cd39b; --goodbg:#16311f; --ok:#e0bc5c; --okbg:#33290f; --bad:#f08b85; --badbg:#3a1a18;
    --accent:#d8c3a5;
  }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--ink);
    font:15px/1.55 ui-sans-serif,-apple-system,"Segoe UI",Roboto,sans-serif; }}
  .wrap {{ max-width:1080px; margin:0 auto; padding:40px 16px 64px; }}
  h1 {{ font-size:1.6rem; margin:0 0 4px; letter-spacing:-.01em; }}
  .sub {{ color:var(--muted); margin:0 0 24px; font-size:.9rem; }}
  .stats {{ display:flex; flex-wrap:wrap; gap:10px; margin-bottom:22px; }}
  .stat {{ background:var(--panel); border:1px solid var(--line); border-radius:10px;
    padding:10px 16px; min-width:110px; }}
  .stat b {{ display:block; font-size:1.5rem; line-height:1.1; font-variant-numeric:tabular-nums; }}
  .stat span {{ color:var(--muted); font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; }}
  .card {{ background:var(--panel); border:1px solid var(--line); border-radius:12px;
    padding:4px 4px 8px; margin-bottom:22px; overflow-x:auto; }}
  table {{ border-collapse:collapse; width:100%; min-width:840px; }}
  th,td {{ padding:10px 10px; text-align:left; border-bottom:1px solid var(--line); vertical-align:top; }}
  thead th {{ font-size:.7rem; text-transform:uppercase; letter-spacing:.05em; color:var(--muted);
    font-weight:600; border-bottom:1px solid var(--line); }}
  thead th.num span {{ display:inline-block; max-width:82px; }}
  tbody tr:last-child td, tbody tr:last-child th {{ border-bottom:0; }}
  .num {{ text-align:right; font-variant-numeric:tabular-nums; white-space:nowrap; }}
  .good {{ color:var(--good); }} .ok {{ color:var(--ok); }} .bad {{ color:var(--bad); }}
  .empty {{ color:var(--muted); }}
  .total {{ font-weight:700; }} .den {{ color:var(--muted); font-weight:400; font-size:.8em; }}
  .dname {{ display:block; font-weight:600; }}
  .did {{ display:block; color:var(--muted); font-size:.75rem; font-family:ui-monospace,monospace; }}
  .gap {{ font-size:.85rem; color:var(--muted); max-width:300px; }}
  .pill {{ display:inline-block; padding:2px 9px; border-radius:99px; font-size:.75rem;
    font-weight:600; white-space:nowrap; }}
  .s-queued {{ background:var(--line); color:var(--muted); }}
  .s-building {{ background:var(--okbg); color:var(--ok); }}
  .s-review {{ background:var(--okbg); color:var(--ok); }}
  .s-pass {{ background:var(--goodbg); color:var(--good); }}
  .s-fail {{ background:var(--badbg); color:var(--bad); }}
  h2 {{ font-size:.8rem; text-transform:uppercase; letter-spacing:.07em; color:var(--muted);
    margin:0 0 10px; font-weight:600; }}
  ul.bench, ul.log {{ margin:0; padding-left:18px; }}
  ul.log {{ list-style:none; padding:0; font-size:.85rem; }}
  ul.log li {{ padding:5px 0; border-bottom:1px solid var(--line); }}
  ul.log li:last-child {{ border-bottom:0; }}
  .lt {{ color:var(--muted); font-family:ui-monospace,monospace; font-size:.78rem; margin-right:8px; }}
  .muted {{ color:var(--muted); }}
  .pad {{ padding:16px; }}
  footer {{ color:var(--muted); font-size:.8rem; margin-top:8px; }}
  @media (max-width:640px) {{ .wrap {{ padding:24px 16px 48px; }} h1 {{ font-size:1.3rem; }} }}
</style>
</head>
<body>
<div class="wrap">
  <h1>{esc(d['project'])} — build progress</h1>
  <p class="sub">Builder → critic loop per domain. {esc(d['bar'])}. Last updated {esc(d['updated'])}.</p>

  <div class="stats">
    <div class="stat"><b>{passed}/{len(domains)}</b><span>Domains passing</span></div>
    <div class="stat"><b>{rounds}</b><span>Critic rounds run</span></div>
    <div class="stat"><b>{len(crits)}</b><span>Scored criteria</span></div>
  </div>

  <div class="card">
  <table>
    <thead><tr>
      <th scope="col">Domain</th><th scope="col">Status</th><th class="num" scope="col">Rd</th>
      {heads}
      <th class="num" scope="col">Total</th><th scope="col">Biggest remaining gap</th>
    </tr></thead>
    <tbody>
{chr(10).join(rows)}
    </tbody>
  </table>
  </div>

  <div class="card pad">
    <h2>Benchmarks the critic scores against</h2>
    <ul class="bench">{bench}</ul>
  </div>

  <div class="card pad">
    <h2>Event log</h2>
    <ul class="log">{logrows}</ul>
  </div>
  <footer>Generated by generate_progress.py from status.json.</footer>
</div>
</body>
</html>
"""
    with open(OUT, "w") as f:
        f.write(doc)
    print(f"wrote {OUT}  ({passed}/{len(domains)} passing, {rounds} rounds)")

if __name__ == "__main__":
    main()

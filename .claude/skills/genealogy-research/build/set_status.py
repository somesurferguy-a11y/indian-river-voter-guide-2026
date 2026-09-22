#!/usr/bin/env python3
"""set_status.py <domain-id> --status S [--round N] [--verdict V] [--gap G]
                 [--scores cf,se,ta,rc,dc] [--log "message"]"""
import json, os, sys, datetime, argparse

HERE = os.path.dirname(os.path.abspath(__file__))
STATUS = os.path.join(HERE, "status.json")

p = argparse.ArgumentParser()
p.add_argument("domain", nargs="?")
p.add_argument("--status"); p.add_argument("--round", type=int)
p.add_argument("--verdict"); p.add_argument("--gap"); p.add_argument("--scores")
p.add_argument("--log")
a = p.parse_args()

with open(STATUS) as f:
    d = json.load(f)

if a.domain:
    dom = next((x for x in d["domains"] if x["id"] == a.domain), None)
    if not dom:
        sys.exit(f"unknown domain {a.domain}")
    if a.status:  dom["status"] = a.status
    if a.round is not None: dom["round"] = a.round
    if a.verdict: dom["verdict"] = a.verdict
    if a.gap:     dom["gap"] = a.gap
    if a.scores:
        vals = [float(v) if "." in v else int(v) for v in a.scores.split(",")]
        if len(vals) != len(d["criteria"]):
            sys.exit(f"need {len(d['criteria'])} scores")
        dom["scores"] = dict(zip(d["criteria"], vals))

if a.log:
    d.setdefault("log", []).append(
        {"t": datetime.datetime.now().strftime("%H:%M"), "msg": a.log})

with open(STATUS, "w") as f:
    json.dump(d, f, indent=2)
print("ok")

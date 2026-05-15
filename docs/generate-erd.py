#!/usr/bin/env python3
"""Generate presentation-ready BRIMS ERD SVG."""

from __future__ import annotations

ENTITIES = [
    {
        "name": "ROLE",
        "color": "#1d4ed8",
        "x": 2100,
        "y": 40,
        "fields": [
            ("id", "string", "PK"),
            ("name", "string", "UK"),
            ("description", "string", None),
            ("permissions", "string[]", None),
            ("userCount", "int", None),
        ],
        "note": "Admin / Staff / Resident",
    },
    {
        "name": "SYSTEM_USER",
        "color": "#1d4ed8",
        "x": 2100,
        "y": 280,
        "fields": [
            ("id", "string", "PK"),
            ("name", "string", None),
            ("email", "string", "UK"),
            ("role", "string", "FK→ROLE.name"),
            ("status", "string", None),
            ("password", "string", None),
            ("profilePicture", "string", None),
            ("lastLogin", "string", None),
            ("createdAt", "string", None),
            ("archived", "bool", None),
            ("archivedAt", "string", None),
        ],
        "note": "Active / Inactive · password hashed",
    },
    {
        "name": "RESIDENT",
        "color": "#047857",
        "x": 80,
        "y": 120,
        "fields": [
            ("id", "string", "PK"),
            ("residentId", "string", "UK"),
            ("name", "string", None),
            ("age", "int", None),
            ("gender", "string", None),
            ("purok", "string", None),
            ("birthdate", "string", None),
            ("placeOfBirth", "string", None),
            ("birthCertificateNumber", "string", "UK"),
            ("bloodType", "string", None),
            ("civilStatus", "string", None),
            ("nationality", "string", None),
            ("contact", "string", None),
            ("email", "string", None),
            ("password", "string", None),
            ("address", "string", None),
            ("profilePicture", "string", None),
            ("archived", "bool", None),
            ("archivedAt", "string", None),
            ("archivedReason", "string", None),
        ],
        "note": "Firestore doc id · portal login",
    },
    {
        "name": "HOUSEHOLD",
        "color": "#047857",
        "x": 80,
        "y": 820,
        "fields": [
            ("id", "string", "PK"),
            ("householdId", "string", "UK"),
            ("headId", "string", "FK→residentId"),
            ("address", "string", None),
            ("purok", "string", None),
            ("latitude", "number", None),
            ("longitude", "number", None),
            ("status", "string", None),
            ("riskLevel", "string", None),
            ("barangayZone", "string", None),
            ("archived", "bool", None),
            ("archivedAt", "string", None),
        ],
        "note": "members[] embeds HOUSEHOLD_MEMBER",
    },
    {
        "name": "HOUSEHOLD_MEMBER",
        "color": "#059669",
        "x": 80,
        "y": 1380,
        "fields": [
            ("householdId", "string", "PK,FK"),
            ("residentId", "string", "PK,FK"),
            ("name", "string", None),
            ("age", "int", None),
            ("gender", "string", None),
            ("relationship", "string", None),
            ("birthdate", "string", None),
            ("civilStatus", "string", None),
        ],
        "note": "Logical entity · denormalized name",
    },
    {
        "name": "CERTIFICATE_REQUEST",
        "color": "#b45309",
        "x": 1180,
        "y": 520,
        "fields": [
            ("id", "string", "PK"),
            ("type", "string", None),
            ("purpose", "string", None),
            ("status", "string", None),
            ("date", "string", None),
            ("residentId", "string", "FK"),
            ("approvedById", "string", "FK"),
            ("approvedByName", "string", None),
            ("approvedAt", "string", None),
            ("rejectedById", "string", "FK"),
            ("rejectedByName", "string", None),
            ("rejectedAt", "string", None),
            ("rejectedReason", "string", None),
            ("archived", "bool", None),
            ("archivedAt", "string", None),
        ],
        "note": "Pending / For Review / Approved / Rejected",
    },
    {
        "name": "CERTIFICATE",
        "color": "#b45309",
        "x": 1180,
        "y": 1180,
        "fields": [
            ("id", "string", "PK"),
            ("requestId", "string", "FK"),
            ("residentId", "string", "FK"),
            ("type", "string", None),
            ("issuedById", "string", "FK"),
            ("issuedAt", "string", None),
            ("qrCode", "string", None),
        ],
        "note": "Issued document · QR payload",
    },
    {
        "name": "PORTAL_NOTIFICATION",
        "color": "#6d28d9",
        "x": 1180,
        "y": 1580,
        "fields": [
            ("id", "string", "PK"),
            ("audience", "string", None),
            ("recipientBarangayKey", "string", "FK"),
            ("type", "string", None),
            ("title", "string", None),
            ("message", "string", None),
            ("linkRequestId", "string", "FK"),
            ("read", "bool", None),
            ("createdAt", "timestamp", None),
        ],
        "note": "Firestore: portalNotifications",
    },
    {
        "name": "AUDIT_LOG_ENTRY",
        "color": "#475569",
        "x": 3680,
        "y": 200,
        "fields": [
            ("id", "string", "PK"),
            ("timestamp", "string", None),
            ("action", "string", None),
            ("category", "string", None),
            ("userId", "string", "FK"),
            ("userName", "string", None),
            ("userEmail", "string", None),
            ("details", "string", None),
            ("entityId", "string", None),
            ("entityName", "string", None),
        ],
        "note": "localStorage · polymorphic entityId",
    },
    {
        "name": "APP_NOTIFICATION",
        "color": "#6d28d9",
        "x": 3680,
        "y": 720,
        "fields": [
            ("id", "string", "PK"),
            ("type", "string", None),
            ("title", "string", None),
            ("message", "string", None),
            ("visibleToRoles", "string[]", None),
            ("recipientUserIds", "string[]", "FK"),
            ("linkRequestId", "string", "FK"),
            ("actionRoute", "string[]", None),
            ("read", "bool", None),
            ("createdAt", "date", None),
        ],
        "note": "Staff bell · local + Firestore sync",
    },
]

RELATIONSHIPS = [
    ("ROLE", "SYSTEM_USER", "1 — *", "assigned to"),
    ("SYSTEM_USER", "CERTIFICATE_REQUEST", "1 — *", "approves / rejects"),
    ("SYSTEM_USER", "CERTIFICATE", "1 — *", "issues"),
    ("SYSTEM_USER", "AUDIT_LOG_ENTRY", "1 — *", "generates"),
    ("SYSTEM_USER", "APP_NOTIFICATION", "1 — *", "may target"),
    ("RESIDENT", "HOUSEHOLD", "1 — 0..1", "heads (headId)"),
    ("RESIDENT", "HOUSEHOLD_MEMBER", "1 — *", "member of"),
    ("HOUSEHOLD", "HOUSEHOLD_MEMBER", "1 — *", "contains"),
    ("RESIDENT", "CERTIFICATE_REQUEST", "1 — *", "submits"),
    ("RESIDENT", "CERTIFICATE", "1 — *", "owns"),
    ("RESIDENT", "PORTAL_NOTIFICATION", "1 — *", "receives"),
    ("CERTIFICATE_REQUEST", "CERTIFICATE", "1 — 0..1", "results in"),
    ("CERTIFICATE_REQUEST", "PORTAL_NOTIFICATION", "1 — *", "relates to"),
    ("CERTIFICATE_REQUEST", "APP_NOTIFICATION", "1 — *", "relates to"),
]

BOX_W = 420
HEADER_H = 48
LINE_H = 22
PAD_BOTTOM = 36
FONT_ATTR = 17
FONT_NAME = 22
FONT_TITLE = 40
FONT_SUB = 20
FONT_REL = 16
FONT_LEGEND = 18


def entity_height(entity: dict) -> int:
    lines = len(entity["fields"]) + (1 if entity.get("note") else 0)
    return HEADER_H + lines * LINE_H + PAD_BOTTOM


def entity_boxes(entities: list) -> dict[str, dict]:
    boxes: dict[str, dict] = {}
    for e in entities:
        h = entity_height(e)
        boxes[e["name"]] = {
            "x": e["x"],
            "y": e["y"],
            "w": BOX_W,
            "h": h,
            "cx": e["x"] + BOX_W / 2,
            "cy": e["y"] + h / 2,
            "color": e["color"],
        }
    return boxes


def esc(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def badge_color(key: str | None) -> str:
    if not key:
        return "#64748b"
    upper = key.upper()
    if "PK" in upper:
        return "#b91c1c"
    if "FK" in upper:
        return "#1d4ed8"
    if "UK" in upper:
        return "#c2410c"
    return "#64748b"


def render_entity(entity: dict) -> str:
    x, y = entity["x"], entity["y"]
    h = entity_height(entity)
    color = entity["color"]
    parts = [
        f'<g id="entity-{entity["name"]}">',
        f'  <rect x="{x}" y="{y}" width="{BOX_W}" height="{h}" rx="10" fill="#ffffff" stroke="{color}" stroke-width="3"/>',
        f'  <rect x="{x}" y="{y}" width="{BOX_W}" height="{HEADER_H}" rx="10" fill="{color}"/>',
        f'  <rect x="{x}" y="{y + HEADER_H - 10}" width="{BOX_W}" height="10" fill="{color}"/>',
        f'  <text x="{x + BOX_W/2}" y="{y + 32}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_NAME}" font-weight="700" fill="#ffffff">{esc(entity["name"])}</text>',
    ]
    ty = y + HEADER_H + 20
    for fname, ftype, fkey in entity["fields"]:
        parts.append(
            f'  <text x="{x + 14}" y="{ty}" font-family="Consolas, Segoe UI, monospace" font-size="{FONT_ATTR}" fill="#0f172a">'
            f'<tspan font-weight="600">{esc(fname)}</tspan>'
            f'<tspan fill="#475569"> : {esc(ftype)}</tspan>'
            f"</text>"
        )
        if fkey:
            bx = x + BOX_W - 14
            parts.append(
                f'  <text x="{bx}" y="{ty}" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="{badge_color(fkey)}">{esc(fkey)}</text>'
            )
        ty += LINE_H
    if entity.get("note"):
        parts.append(
            f'  <text x="{x + 14}" y="{ty}" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-style="italic" fill="#64748b">{esc(entity["note"])}</text>'
        )
    parts.append("</g>")
    return "\n".join(parts)


def anchor(box: dict, side: str) -> tuple[float, float]:
    x, y, w, h = box["x"], box["y"], box["w"], box["h"]
    if side == "left":
        return x, y + h / 2
    if side == "right":
        return x + w, y + h / 2
    if side == "top":
        return x + w / 2, y
    return x + w / 2, y + h


def pick_sides(a: dict, b: dict) -> tuple[str, str]:
    dx = b["cx"] - a["cx"]
    dy = b["cy"] - a["cy"]
    if abs(dx) > abs(dy):
        return ("right", "left") if dx > 0 else ("left", "right")
    return ("bottom", "top") if dy > 0 else ("top", "bottom")


def render_relationship(name_a: str, name_b: str, cardinality: str, label: str, boxes: dict) -> str:
    a, b = boxes[name_a], boxes[name_b]
    side_a, side_b = pick_sides(a, b)
    x1, y1 = anchor(a, side_a)
    x2, y2 = anchor(b, side_b)
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    return f"""
  <path d="M {x1} {y1} C {mx} {y1}, {mx} {y2}, {x2} {y2}" fill="none" stroke="#334155" stroke-width="2.5" marker-end="url(#arrow)"/>
  <text x="{mx}" y="{my - 8}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_REL}" font-weight="600" fill="#334155">{esc(cardinality)}</text>
  <text x="{mx}" y="{my + 14}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_REL}" fill="#64748b">{esc(label)}</text>"""


OVERVIEW_ENTITIES = [
    {
        "name": "ROLE",
        "color": "#1d4ed8",
        "x": 2000,
        "y": 60,
        "fields": [("id", "string", "PK"), ("name", "string", "UK")],
        "note": "Admin · Staff · Resident",
    },
    {
        "name": "SYSTEM_USER",
        "color": "#1d4ed8",
        "x": 2000,
        "y": 260,
        "fields": [
            ("id", "string", "PK"),
            ("email", "string", "UK"),
            ("role", "string", "FK"),
        ],
        "note": "Staff / Admin accounts",
    },
    {
        "name": "RESIDENT",
        "color": "#047857",
        "x": 120,
        "y": 200,
        "fields": [
            ("id", "string", "PK"),
            ("residentId", "string", "UK"),
            ("name", "string", None),
        ],
        "note": "Barangay residents · portal login",
    },
    {
        "name": "HOUSEHOLD",
        "color": "#047857",
        "x": 120,
        "y": 480,
        "fields": [
            ("id", "string", "PK"),
            ("householdId", "string", "UK"),
            ("headId", "string", "FK"),
        ],
        "note": "GIS · risk level · purok",
    },
    {
        "name": "HOUSEHOLD_MEMBER",
        "color": "#059669",
        "x": 120,
        "y": 760,
        "fields": [
            ("householdId", "string", "PK,FK"),
            ("residentId", "string", "PK,FK"),
            ("relationship", "string", None),
        ],
        "note": "Embedded in household.members[]",
    },
    {
        "name": "CERTIFICATE_REQUEST",
        "color": "#b45309",
        "x": 1080,
        "y": 360,
        "fields": [
            ("id", "string", "PK"),
            ("residentId", "string", "FK"),
            ("status", "string", None),
        ],
        "note": "Pending → Approved / Rejected",
    },
    {
        "name": "CERTIFICATE",
        "color": "#b45309",
        "x": 1080,
        "y": 640,
        "fields": [
            ("id", "string", "PK"),
            ("requestId", "string", "FK"),
            ("qrCode", "string", None),
        ],
        "note": "Issued document",
    },
    {
        "name": "PORTAL_NOTIFICATION",
        "color": "#6d28d9",
        "x": 1080,
        "y": 900,
        "fields": [
            ("id", "string", "PK"),
            ("audience", "string", None),
            ("linkRequestId", "string", "FK"),
        ],
        "note": "Firestore portalNotifications",
    },
    {
        "name": "AUDIT_LOG_ENTRY",
        "color": "#475569",
        "x": 3520,
        "y": 240,
        "fields": [
            ("id", "string", "PK"),
            ("userId", "string", "FK"),
            ("category", "string", None),
        ],
        "note": "localStorage audit trail",
    },
    {
        "name": "APP_NOTIFICATION",
        "color": "#6d28d9",
        "x": 3520,
        "y": 520,
        "fields": [
            ("id", "string", "PK"),
            ("visibleToRoles", "string[]", None),
            ("linkRequestId", "string", "FK"),
        ],
        "note": "Staff bell notifications",
    },
]


def build_svg(entities: list, relationships: list, title_suffix: str, out_name: str) -> tuple[int, int]:
    boxes = entity_boxes(entities)
    max_y = max(b["y"] + b["h"] for b in boxes.values())
    width, height = 4300, max_y + 220

    entities_svg = "\n".join(render_entity(e) for e in entities)
    rels_svg = "\n".join(
        render_relationship(a, b, card, lbl, boxes) for a, b, card, lbl in relationships
    )

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <polygon points="0 0, 12 4, 0 8" fill="#334155"/>
    </marker>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <text x="{width/2}" y="72" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_TITLE}" font-weight="700" fill="#0f172a">BRIMS — Entity Relationship Diagram{esc(title_suffix)}</text>
  <text x="{width/2}" y="108" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_SUB}" fill="#475569">Barangay Resident Information Management System · Firestore / local storage</text>

  <g filter="url(#shadow)">
{entities_svg}
  </g>

  <g opacity="0.95">
{rels_svg}
  </g>

  <g transform="translate(80, {height - 150})">
    <rect x="0" y="0" width="{width - 160}" height="120" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <text x="24" y="36" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_LEGEND}" font-weight="700" fill="#0f172a">Legend</text>
    <text x="24" y="68" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_LEGEND}" fill="#0f172a"><tspan fill="#b91c1c" font-weight="700">PK</tspan> Primary Key · <tspan fill="#1d4ed8" font-weight="700">FK</tspan> Foreign Key · <tspan fill="#c2410c" font-weight="700">UK</tspan> Unique Key</text>
    <text x="24" y="98" font-family="Segoe UI, Arial, sans-serif" font-size="{FONT_LEGEND}" fill="#475569">Blue = users &amp; roles · Green = residents &amp; households · Amber = certificates · Purple = notifications · Gray = audit log</text>
  </g>
</svg>
"""

    out = __file__.replace("generate-erd.py", out_name)
    with open(out, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"Wrote {out} ({width}x{height})")
    return width, height


def main() -> None:
    build_svg(ENTITIES, RELATIONSHIPS, "", "brims-erd.svg")
    build_svg(OVERVIEW_ENTITIES, RELATIONSHIPS, " (Overview)", "brims-erd-overview.svg")


if __name__ == "__main__":
    main()

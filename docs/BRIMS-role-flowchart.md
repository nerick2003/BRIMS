# BRIMS — Role Flowcharts

Barangay Resident Information Management System (Angular + Firestore).

**Start here:** Three **start terminal → end terminal** journeys below — one per role, top to bottom.

### Diagram files (visual)

| File | Description |
|------|-------------|
| [`brims-role-journeys.svg`](brims-role-journeys.svg) | **Overview** — Admin, Staff, Resident side by side (START → END) |
| [`brims-role-journeys.html`](brims-role-journeys.html) | **Interactive** — full Mermaid diagrams in browser (open locally) |
| [`diagrams/*.mmd`](diagrams/) | Mermaid source (edit & run `npm run docs:diagrams`) |

For module breakdowns and branches, see [Detailed reference](#detailed-reference) at the bottom.

---

## Admin journey — start to end

One session from opening the app until logout. Side branches rejoin the main line.

```mermaid
flowchart TB
  S([START — User opens BRIMS]) --> L1[/login — Login page/]
  L1 --> L2[Enter email + password]
  L2 --> L3{Valid input?}
  L3 -->|No| L2
  L3 -->|Yes| L4[AuthService.login → Firestore]
  L4 --> L5{Credentials OK?}
  L5 -->|No| L2
  L5 -->|Yes| L6[authGuard + roleGuard → role = Admin]
  L6 --> L7[/admin/dashboard — Admin dashboard/]

  L7 --> W1[Review stats · recent activity · notifications]
  W1 --> W2[/admin/requests — Open requests queue/]
  W2 --> W3[Select request → /admin/requests/:id]
  W3 --> W4{Pending or For Review?}
  W4 -->|Yes| W5{Approve or reject?}
  W5 -->|Approve| W6[Status → Approved · record approver]
  W5 -->|Reject| W7[Enter reason → Status → Rejected]
  W6 --> W8[Download certificate PDF/PNG · request QR]
  W7 --> W9[Request leaves active queue or archive later]
  W8 --> W9
  W4 -->|Already final| W9

  W9 --> W10{Archive this request? — Admin only}
  W10 -->|Yes| W11[/admin/archives — Tab Requests · restore later if needed/]
  W10 -->|No| W12
  W11 --> W12

  W12[/admin/residents — Residents list/]
  W12 --> W13{Add or edit?}
  W13 -->|Add| W14[/admin/residents/add — Create BRGY-#### · portal login/]
  W13 -->|Edit| W15[/admin/residents/:id — Profile · history · on-behalf request/]
  W14 --> W16
  W15 --> W16{Archive resident?}
  W16 -->|Yes| W17[/admin/archives — Tab Residents/]
  W16 -->|No| W18
  W17 --> W18

  W18[/admin/households — List · map · add · edit · detail/]
  W18 --> W19{Archive household?}
  W19 -->|Yes| W20[/admin/archives — Tab Households/]
  W19 -->|No| W21
  W20 --> W21

  W21[/admin/users — Users & Roles/]
  W21 --> W22[Add/edit Admin or Staff · roles · permissions]
  W22 --> W23{Archive staff account?}
  W23 -->|Yes| W24[/admin/archives — Tab Users/]
  W23 -->|No| W25
  W24 --> W25

  W25[/admin/sms · /admin/email — Broadcasts via backend/]
  W25 --> W26[/admin/audit-log — Review system actions/]
  W26 --> W27[/admin/reports — Charts · export PDF/]
  W27 --> W28[/admin/qr-scanner — Scan → open resident or request in new tab/]
  W28 --> W29[/admin/settings — System settings/]
  W29 --> W30[/admin/profile — My profile/]

  W30 --> X1[Profile menu → Logout]
  X1 --> X2{Confirm logout?}
  X2 -->|Cancel| W30
  X2 -->|Yes| X3[auth.logout — clear session · audit Logout]
  X3 --> X4[/login — Login page/]
  X4 --> E([END — Session ended])

  classDef startEnd fill:#4338ca,stroke:#312e81,color:#fff
  classDef route fill:#e0e7ff,stroke:#4338ca,color:#1e1b4b
  class S,E startEnd
  class L7,W2,W12,W18,W21,W25,W26,W27,W28,W29,W30,L1,X4 route
```

---

## Staff journey — start to end

Same core barangay work as Admin; **no** archive, Users & Roles, broadcast, audit, archives, or system settings.

```mermaid
flowchart TB
  S([START — User opens BRIMS]) --> L1[/login — Login page/]
  L1 --> L2[Enter email + password]
  L2 --> L3{Valid input?}
  L3 -->|No| L2
  L3 -->|Yes| L4[AuthService.login → Firestore]
  L4 --> L5{Credentials OK?}
  L5 -->|No| L2
  L5 -->|Yes| L6[authGuard + roleGuard → role = Staff]
  L6 --> L7[/staff/dashboard — Staff dashboard/]

  L7 --> W1[Review stats · recent requests · notifications]
  W1 --> W2[/staff/requests — Requests queue — active only/]
  W2 --> W3[Select request → /staff/requests/:id]
  W3 --> W4{Pending or For Review?}
  W4 -->|Yes| W5{Approve or reject?}
  W5 -->|Approve| W6[Status → Approved · download cert · QR]
  W5 -->|Reject| W7[Reason required → Status → Rejected]
  W6 --> W8
  W7 --> W8
  W4 -->|Already final| W8[Back to requests list]

  W8 --> W9[/staff/residents — List · add · profile/]
  W9 --> W10[/staff/residents/add or /staff/residents/:id/]
  W10 --> W11[/staff/households — List · map · add · edit · detail/]
  W11 --> W12[/staff/reports — Population & request reports · PDF/]
  W12 --> W13[/staff/qr-scanner — Scan resident or request QR/]
  W13 --> W14[/staff/settings — Staff preferences/]
  W14 --> W15[/staff/profile — My profile/]

  W15 --> X1[Profile menu → Logout]
  X1 --> X2{Confirm logout?}
  X2 -->|Cancel| W15
  X2 -->|Yes| X3[auth.logout — clear session · audit Logout]
  X3 --> X4[/login — Login page/]
  X4 --> E([END — Session ended])

  classDef startEnd fill:#0e7490,stroke:#155e75,color:#fff
  classDef route fill:#cffafe,stroke:#0e7490,color:#134e4a
  class S,E startEnd
  class L7,W2,W9,W10,W11,W12,W13,W14,W15,L1,X4 route
```

> **Note:** An Admin user can follow the same operational steps under `/staff/*` (guard allows Admin in staff area). Admin-only steps stay under `/admin/*` in the Admin journey above.

---

## Resident journey — start to end

From login through requesting a certificate, tracking the outcome, then logout.

```mermaid
flowchart TB
  S([START — User opens BRIMS]) --> L1[/login — Login page/]
  L1 --> L2[Enter email + password]
  L2 --> L3{Valid input?}
  L3 -->|No| L2
  L3 -->|Yes| L4[AuthService.login → Firestore]
  L4 --> L5{Credentials OK?}
  L5 -->|No| L2
  L5 -->|Yes| L6[authGuard + roleGuard → role = Resident]
  L6 --> L7[/resident/dashboard — Resident dashboard/]

  L7 --> W1[View welcome · quick actions · recent own requests]
  W1 --> W2{Need a barangay document?}
  W2 -->|No| W8
  W2 -->|Yes| W3[/resident/request-certificate/]
  W3 --> W4[Choose type · enter purpose]
  W4 --> W5[Submit → data.addRequest · status = Pending]
  W5 --> W6[/resident/requests — My Requests/]
  W6 --> W7[/resident/requests/:id — Track status/]

  W7 --> W7a{Staff decision}
  W7a -->|Approved| W7b[View approved · approver info]
  W7a -->|Rejected| W7c[View rejection reason]
  W7a -->|Pending / For Review| W7d[Wait — refresh list or dashboard]
  W7b --> W8
  W7c --> W8
  W7d --> W8

  W8[/resident/profile — My profile & household info/]
  W8 --> W9[/resident/reports — Own request statistics/]
  W9 --> W10[/resident/settings — Profile preferences/]
  W10 --> W11[Notifications bell — mark read as needed]

  W11 --> X1[Profile menu → Logout]
  X1 --> X2{Confirm logout?}
  X2 -->|Cancel| W10
  X2 -->|Yes| X3[auth.logout — clear session]
  X3 --> X4[/login — Login page/]
  X4 --> E([END — Session ended])

  classDef startEnd fill:#047857,stroke:#065f46,color:#fff
  classDef route fill:#d1fae5,stroke:#047857,color:#064e3b
  class S,E startEnd
  class L7,W3,W6,W7,W8,W9,W10,L1,X4 route
```

---

## Public path — forgot password (any role)

Separate entry that also ends at the login terminal.

```mermaid
flowchart TB
  S([START — Forgot password]) --> F1[/forgot-password/]
  F1 --> F2[Enter registered email]
  F2 --> F3{Valid email + backend configured?}
  F3 -->|No| F2
  F3 -->|Yes| F4[Generate reset link · send email via backend]
  F4 --> F5[/reset-password — Open link from email/]
  F5 --> F6[Set new password → save to Firestore]
  F6 --> L[/login/]
  L --> E([END — Ready to log in again])
```

---

## Role comparison — same terminals, different middle

| Phase | Admin | Staff | Resident |
|-------|-------|-------|----------|
| **Start** | Open BRIMS | Open BRIMS | Open BRIMS |
| **Login terminal** | `/login` → Firestore → `/admin/dashboard` | `/login` → `/staff/dashboard` | `/login` → `/resident/dashboard` |
| **Core work** | Requests + residents + households + **governance** | Requests + residents + households + reports + QR | Request certificate + track **own** requests |
| **Admin-only middle** | Archive · Users · SMS/Email · Audit · Settings | — | — |
| **End** | Logout → `/login` → session cleared | Same | Same |

---

<a id="detailed-reference"></a>

# Detailed reference (modules & branches)

The sections below break out authentication, archives, QR parsing, and permission tables. Use the **start → end** journeys above for the full role path; use this section when you need step detail on one module.

---

## §1 Authentication & access

### 1.1 Login and portal routing

```mermaid
flowchart TB
  START([User opens BRIMS]) --> HOME{URL?}
  HOME -->|/ or unknown| LOGIN
  HOME -->|/login| LOGIN[Login page]

  LOGIN --> FILL[Enter email + password]
  FILL --> REMEMBER{Remember me?}
  REMEMBER -->|Yes| SAVE[Save email to localStorage]
  REMEMBER -->|No| CLEAR[Clear saved email]
  SAVE --> VALIDATE
  CLEAR --> VALIDATE{Valid email format + password?}
  VALIDATE -->|No| ERR1[Show validation error] --> FILL
  VALIDATE -->|Yes| AUTH[AuthService.login → Firestore]

  AUTH --> CREDS{Credentials OK?}
  CREDS -->|No| ERR2[Invalid email or password] --> FILL
  CREDS -->|Yes| GUARD[authGuard + roleGuard on next navigation]

  GUARD --> ROLE{Role from user record}
  ROLE -->|Admin| ADASH["/admin/dashboard"]
  ROLE -->|Staff| SDASH["/staff/dashboard"]
  ROLE -->|Resident| RDASH["/resident/dashboard"]

  LOGIN --> FP[Link: Forgot password]
  FP --> FORGOT["/forgot-password"]
  LOGIN --> CONTACT["/contact"]

  classDef gate fill:#1e293b,stroke:#0f172a,color:#fff
  classDef ok fill:#16a34a,stroke:#15803d,color:#fff
  classDef err fill:#dc2626,stroke:#991b1b,color:#fff

  class GUARD gate
  class ADASH,SDASH,RDASH ok
  class ERR1,ERR2 err
```

### 1.2 Forgot / reset password

```mermaid
flowchart TB
  FORGOT[Forgot password page] --> EMAIL[Enter registered email]
  EMAIL --> V1{Valid email?}
  V1 -->|No| E1[Validation error] --> EMAIL
  V1 -->|Yes| API{Backend apiBaseUrl configured?}
  API -->|No| E2[Backend not configured error]
  API -->|Yes| GEN[AuthService.forgotPassword → reset token + link]

  GEN --> FOUND{User exists?}
  FOUND -->|No| E3[Generic failure message]
  FOUND -->|Yes| SEND[EmailService → backend SMTP/Resend]
  SEND --> OK[Success: check email]
  OK --> RESET_LINK[User opens link → /reset-password]
  RESET_LINK --> NEW[Enter new password + confirm]
  NEW --> V2{Passwords match + rules?}
  V2 -->|No| E4[Validation error] --> NEW
  V2 -->|Yes| SAVE[Update password hash in Firestore]
  SAVE --> LOGIN[Redirect to /login]
```

### 1.3 Route protection (every protected page)

```mermaid
flowchart LR
  NAV[Navigate to /admin, /staff, or /resident] --> AG{authGuard: logged in?}
  AG -->|No| LOGIN["/login"]
  AG -->|Yes| RG{roleGuard: role matches area?}

  RG -->|/admin + not Admin| STAFF_REDIRECT["/staff"]
  RG -->|/staff + not Admin/Staff| RES_REDIRECT["/resident"]
  RG -->|/resident + not Resident| STAFF_REDIRECT2["/staff"]
  RG -->|Match| PAGE[Load page component]

  NOTE[Admin may use /staff routes — full staff features there too]
```

---

## §2 Admin portal (`/admin`) — detailed

### 2.1 Admin navigation map

```mermaid
flowchart TB
  AD[Dashboard] --> CORE
  AD --> GOV
  AD --> TOOLS

  subgraph CORE["Core operations — shared with Staff"]
    R[Residents list / add / profile]
    H[Households list / add / edit / detail / map]
    REQ[Requests list / detail]
    REP[Reports — charts & PDF export]
    QR[QR Scanner]
    PROF[My Profile]
  end

  subgraph GOV["Admin only"]
    UR[Users & Roles]
    SMS[SMS broadcast]
    EM[Email broadcast]
    AUD[Audit log]
    ARC[Archives — 4 tabs]
    SET[System settings]
  end

  subgraph TOOLS["From dashboard"]
    D1[Summary cards: residents, households, seniors, etc.]
    D2[Recent activity → deep links]
  end
```

### 2.2 Admin — Users & Roles

```mermaid
flowchart TB
  UR[Users & Roles] --> TAB{View}
  TAB --> USERS[Users tab]
  TAB --> ROLES[Roles tab]

  USERS --> LIST[Active Admin/Staff/Resident accounts — excludes archived]
  LIST --> FILTER[Search · filter by role · status]

  LIST --> ADD[Add user — Admin or Staff only]
  ADD --> V1{First/last name, email, role, password valid?}
  V1 -->|No| E1[Show error] --> ADD
  V1 -->|Yes| SAVE[data.addUser → Firestore + audit log]

  LIST --> EDIT[Edit user / toggle Active·Inactive]
  LIST --> ROLE_CHG[Change role → updateUserRole + role userCount]
  LIST --> ARCH_U[Archive user — Admin/Staff only]
  ARCH_U --> CONF1{Confirm?} -->|Yes| ARC[data.archiveUser] --> ARC_TAB[Visible in Archives → Users]

  ROLES --> ROLE_CARD[Per role: Admin · Staff · Resident]
  ROLE_CARD --> EDIT_R[Edit description + permissions list]
  EDIT_R --> SAVE_R[data.updateRole → Firestore]
```

### 2.3 Admin — Archives (restore)

```mermaid
flowchart TB
  ARC[Archives module] --> TABS{Active tab}

  TABS --> TR[Archived residents]
  TABS --> TH[Archived households]
  TABS --> TQ[Archived requests]
  TABS --> TU[Archived Admin/Staff users]

  TR --> FR[Filter: search · purok · date range]
  FR --> RR[Restore → unarchiveResident]
  RR --> RL[Back on Residents list]

  TH --> FH[Filter: search · purok]
  FH --> RH[Restore → archived: false]

  TQ --> FQ[Filter: search · status · date range]
  FQ --> RQ[Restore → unarchiveRequest]
  RQ --> RQL[Back on Requests list]

  TU --> FU[Filter: search · role]
  FU --> RU[Restore → unarchiveUser]

  TR & TH & TQ & TU --> VIEW[Open archived record detail read-only]
```

### 2.4 Admin — SMS & email broadcast

```mermaid
flowchart LR
  SMS[SMS broadcast page] --> PICK_S[Select recipients / message]
  PICK_S --> API_S[POST backend /sms or /sms/bulk]
  API_S --> TW[Twilio or demo provider]

  EM[Email broadcast page] --> PICK_E[Select recipients / subject / body]
  PICK_E --> API_E[POST backend /email or /email/bulk]
  API_E --> SMTP[SMTP / Resend or demo provider]

  API_S & API_E --> LOG[In-app notification + optional audit trail]
```

### 2.5 Admin — exclusive archive actions (from live lists)

| Source page | Action | Who | Result |
|-------------|--------|-----|--------|
| Residents list | Archive resident (single/bulk) | Admin only | Hidden from main list → Archives tab |
| Households list | Archive household (bulk) | Admin only | Same |
| Requests list | Archive request (single/bulk) | Admin only | Warns if not Approved/Rejected |
| Users & Roles | Archive Admin/Staff account | Admin only | Archives → Users tab |

Staff **cannot** archive; Staff **cannot** open Archives, Users & Roles, SMS/Email, Audit Log, or system Settings.

---

## §3 Staff portal (`/staff`) — detailed

### 3.1 Staff vs Admin (same core, different ceiling)

```mermaid
flowchart TB
  SD[Staff dashboard] --> ALLOWED
  SD --> BLOCKED

  subgraph ALLOWED["Staff CAN access"]
    A1[Dashboard stats & recent requests]
    A2[Residents — list · add · edit profile]
    A3[Households — list · map · add · edit · detail]
    A4[Requests — view · approve · reject · download cert]
    A5[Reports — population & request analytics]
    A6[QR Scanner — resident / request / URL]
    A7[My Profile + Staff settings]
  end

  subgraph BLOCKED["Staff CANNOT access — Admin only"]
    B1[Users & Roles]
    B2[SMS / Email broadcast]
    B3[Audit log]
    B4[Archives]
    B5[System settings]
    B6[Archive residents, households, requests, users]
  end

  ADMIN_NOTE[Admin user visiting /staff gets same ALLOWED set — admin-only routes stay under /admin]
```

### 3.2 Staff daily loop (typical)

```mermaid
flowchart LR
  LOGIN[Login → /staff/dashboard] --> DASH[Review pending requests card]
  DASH --> REQ[Requests queue — active only, not archived]
  REQ --> DET[Request detail]
  DET --> DEC{Pending or For Review?}
  DEC -->|Approve| APP[status = Approved · record approver + timestamp]
  DEC -->|Reject| REJ[Enter reason → status = Rejected]
  APP --> CERT[Download PDF/PNG certificate · show QR]
  DASH --> RES[Residents / households as needed]
  RES --> QR[Optional: QR scan to open profile or request]
```

---

## §4 Resident portal (`/resident`) — detailed

### 4.1 Resident navigation & data scope

```mermaid
flowchart TB
  RD[Resident dashboard] --> PAGES

  subgraph PAGES["All data scoped to logged-in resident"]
    MP[My Profile — view personal + household info]
    RC[Request Certificate]
    MR[My Requests — list + filters + detail]
    RR[Resident Reports — own request stats]
    SET[Settings — profile preferences]
  end

  RD --> QUICK[Quick actions: Profile · Request · My Requests]
  RD --> RECENT[Recent own requests on dashboard]
```

### 4.2 Resident — request certificate (step by step)

```mermaid
flowchart TB
  RC[Request Certificate page] --> TYPE[Select document type e.g. Barangay Clearance, Residency, Indigency]
  TYPE --> PURPOSE[Enter purpose — optional, defaults if empty]
  PURPOSE --> SUBMIT[Submit]

  SUBMIT --> AUTH{Logged in as Resident?}
  AUTH -->|No| STOP[No action]
  AUTH -->|Yes| RES{Resident record linked to user.id?}
  RES -->|No| STOP
  RES -->|Yes| CREATE[data.addRequest]

  CREATE --> FIELDS["id (auto) · type · purpose · status: Pending · date · residentId"]
  FIELDS --> DONE[Success state on page · form reset]
  DONE --> TRACK[Resident tracks in My Requests / dashboard]

  TRACK --> STAT{Status updates from staff}
  STAT -->|Pending| WAIT[Wait / filter Pending]
  STAT -->|For Review| REV[In review — staff queue]
  STAT -->|Approved| OK[Can view detail · approved metadata]
  STAT -->|Rejected| NO[View rejection reason on detail]
```

### 4.3 Resident — My Requests detail

```mermaid
flowchart LR
  MR[My Requests list] --> FILT[Filter: all · Pending · For Review · Approved · Rejected]
  FILT --> SORT[Sort by date · type · status]
  SORT --> OPEN[Open /resident/requests/:id]
  OPEN --> VIEW[Read-only: type, purpose, status, dates, approver/rejector if set]
  VIEW --> BADGE[Status badge color by outcome]
```

Residents **cannot** approve, archive, edit other residents, or access staff/admin routes (roleGuard redirects to `/staff` if they try).

---

## §5 Certificate request lifecycle (full detail)

### 5.1 End-to-end (all roles)

```mermaid
flowchart TB
  subgraph RESIDENT_SIDE["RESIDENT"]
    R1[Request Certificate] --> R2[addRequest status = Pending]
    R2 --> R3[My Requests / Dashboard shows Pending]
  end

  subgraph STAFF_SIDE["ADMIN or STAFF"]
    S1[Requests list — non-archived only] --> S2[Search · filter · open detail]
    S2 --> S3{status Pending or For Review?}
    S3 -->|Yes| ACT[Approve or Reject buttons visible]
    S3 -->|No| VIEW[View only — already final]

    ACT -->|Approve| S4["updateRequest: Approved + approvedBy* + approvedAt"]
    ACT -->|Reject| S5["Modal: reason required → Rejected + rejectedBy* + rejectedReason"]

    S4 --> S6[Generate/download certificate PDF or PNG]
    S4 --> S7[Request QR code — toggle · download PNG]
    S4 --> S8[Staff can also create request from Resident profile]
  end

  subgraph ADMIN_EXTRA["ADMIN ONLY"]
    A1{Archive from Requests list?}
    A1 -->|Approved or Rejected| A2[Confirm → archiveRequest]
    A1 -->|Still Pending/For Review| A3[Warn: archive anyway?]
    A2 --> A4[Hidden from main Requests · in Archives]
    A4 --> A5[Restore → unarchiveRequest → back on Requests list]
  end

  R2 --> S1
  S4 --> R3
  S5 --> R3
  S4 --> A1

  classDef pending fill:#f59e0b,stroke:#b45309,color:#1f2937
  classDef ok fill:#16a34a,stroke:#15803d,color:#fff
  classDef bad fill:#dc2626,stroke:#991b1b,color:#fff

  class R2,S3 pending
  class S4 ok
  class S5 bad
```

### 5.2 Request status state machine

```mermaid
stateDiagram-v2
  [*] --> Pending: Resident submits
  Pending --> ForReview: Optional / seed data
  ForReview --> Approved: Staff/Admin approves
  ForReview --> Rejected: Staff/Admin rejects with reason
  Pending --> Approved: Staff/Admin approves
  Pending --> Rejected: Staff/Admin rejects
  Approved --> Archived: Admin archives from list
  Rejected --> Archived: Admin archives from list
  Archived --> Pending: Admin restores (unarchive) — keeps prior status
  note right of Approved
    Resident sees Approved
    Staff can download certificate
  end note
  note right of Rejected
    rejectedReason stored
    Resident sees reason on detail
  end note
```

---

## §6 Resident records (Admin & Staff)

```mermaid
flowchart TB
  RL[Residents list] --> SEARCH[Search · filter gender · age · purok]
  SEARCH --> ROW{Action}

  ROW -->|Add| ADD["/residents/add"]
  ADD --> FORM[First/last name · age · gender · purok required]
  FORM --> CREDS[Email + password required for portal login]
  CREDS --> DUP{Duplicate name+birthdate or BC#?}
  DUP -->|Yes| ERR[Block save]
  DUP -->|No| GEN[Generate BRGY-#### residentId]
  GEN --> SAVE[data.addResident + Firestore user if applicable]
  SAVE --> BACK[Redirect to residents list]

  ROW -->|Open row| PROF["/residents/:id — Resident profile"]
  PROF --> EDIT[Edit demographics · contact · household link]
  PROF --> HIST[View request history for this resident]
  PROF --> STAFF_REQ[Staff/Admin: submit certificate request on behalf]
  PROF --> QR_GEN[Generate resident QR JSON type resident]

  ROW -->|Archive| ARCH{Is Admin?}
  ARCH -->|No| DENY[Action hidden]
  ARCH -->|Yes| CONF[Confirm] --> ARC[data.archiveResident] --> ARCHIVES
```

---

## §7 Household records (Admin & Staff)

```mermaid
flowchart TB
  HL[Households list] --> F[Search · filter purok · status]
  HL --> MAP[Household map — Leaflet · filter by status/risk]
  HL --> ADD["/households/add"]
  ADD --> SAVE_H[data.addHousehold]
  HL --> DET["/households/:id"]
  DET --> EDIT["/households/:id/edit"]
  EDIT --> UPD[data.updateHousehold]
  DET --> MEM[View linked residents]

  HL --> ARCH_H{Admin bulk archive?}
  ARCH_H -->|Yes| ARC_H[archived: true] --> ARCH_TAB[Archives → Households]
  ARCH_H -->|Staff| NO_ARCH[No archive on households for Staff]
```

---

## §8 QR Scanner (Admin & Staff)

```mermaid
flowchart TB
  QR[QR Scanner page] --> CAM[Request camera permission]
  CAM --> PERM{Granted?}
  PERM -->|No| ERR[Show permission / device error · Retry]
  PERM -->|Yes| SCAN[ZXing scan QR_CODE format]

  SCAN --> PARSE{Parse payload}
  PARSE -->|JSON type resident| RES["Open /admin|staff/residents/:id in new tab"]
  PARSE -->|JSON type request or certificate| REQ["Open /admin|staff/requests/:id in new tab"]
  PARSE -->|URL http(s)| EXT[Open URL in new tab]
  PARSE -->|REQ- prefix or raw id| REQ
  PARSE -->|Known resident id| RES
  PARSE -->|Unknown format| FAIL[Unrecognized QR error]

  SCAN --> AGAIN[Reset scanner → scan next code]
```

---

## §9 Reports (Admin & Staff vs Resident)

```mermaid
flowchart LR
  subgraph STAFF_REP["/admin|staff/reports"]
    SR1[Load active non-archived residents & households]
    SR2[Request stats: Pending · For Review · Approved · Rejected]
    SR3[Charts: Chart.js — age/sex, purok, request types]
    SR4[Export PDF reports]
  end

  subgraph RES_REP["/resident/reports"]
    RR1[Only current resident's requests]
    RR2[Counts by status · simple charts]
  end
```

---

## §10 Notifications (cross-cutting)

```mermaid
flowchart LR
  BELL[Notification bell — top bar] --> PANEL[Slide-out panel]
  PANEL --> READ[Mark one read · Mark all read]

  EVT[System events] --> LOCAL[In-app NotificationService]
  EVT --> FS[Firestore portalNotifications — cross-device for staff/resident]

  HIDE[Hidden on: login · forgot/reset password · settings · QR scanner · household map fullscreen · some detail pages]
```

---

## §11 Permission matrix (detailed)

| Action | Admin | Staff | Resident |
|--------|:-----:|:-----:|:--------:|
| Login to own portal | ✓ `/admin` | ✓ `/staff` | ✓ `/resident` |
| Dashboard & profile | ✓ | ✓ | ✓ |
| List/add/edit residents | ✓ | ✓ | — |
| Archive residents | ✓ | — | — |
| List/add/edit households & map | ✓ | ✓ | — |
| Archive households | ✓ | — | — |
| View/process certificate requests | ✓ | ✓ | — |
| Approve / reject requests | ✓ | ✓ | — |
| Archive requests | ✓ | — | — |
| Download certificate / request QR | ✓ | ✓ | — (own view only on resident detail) |
| QR scanner | ✓ | ✓ | — |
| Staff reports & PDF export | ✓ | ✓ | — |
| Request certificate (self) | — | — | ✓ |
| View own requests & resident reports | — | — | ✓ |
| Manage users & roles | ✓ | — | — |
| SMS / email broadcast | ✓ | — | — |
| Audit log | ✓ | — | — |
| Archives & restore | ✓ | — | — |
| System settings | ✓ | — | — |
| Staff settings | ✓ | ✓ | ✓ (resident settings) |

---

## Route quick reference

| Area | Base path | Auth |
|------|-----------|------|
| Login | `/login` | Public |
| Forgot / reset | `/forgot-password`, `/reset-password` | Public |
| Admin | `/admin/*` | Admin only |
| Staff | `/staff/*` | Admin or Staff |
| Resident | `/resident/*` | Resident only |

*Generated from `app.routes.ts`, guards, and page components in the BRIMS codebase.*

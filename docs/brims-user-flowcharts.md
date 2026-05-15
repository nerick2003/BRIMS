# BRIMS – User Flowcharts (by Role)

End-to-end navigation and action flows for each user role in the **Barangay Resident Information Management System (BRIMS)**.

| Role | Source | PNG |
|------|--------|-----|
| Resident | [`brims-flow-resident.mmd`](./brims-flow-resident.mmd) | [`brims-flow-resident.png`](./brims-flow-resident.png) |
| Staff | [`brims-flow-staff.mmd`](./brims-flow-staff.mmd) | [`brims-flow-staff.png`](./brims-flow-staff.png) |
| Admin | [`brims-flow-admin.mmd`](./brims-flow-admin.mmd) | [`brims-flow-admin.png`](./brims-flow-admin.png) |

**Legend**

- 🟢 **Green stadium** = Start of flow
- 🔴 **Red stadium** = Logout / end of flow
- 🔵 **Blue box** = App page / screen
- 🟣 **Purple box** = Admin-only feature
- 🟠 **Orange cylinder** = External system action (Firestore write, Twilio, SMTP)
- ◇ **Diamond** = Decision point

---

## 1. Resident Flow

A logged-in resident's journey: profile, certificate requests, tracking, reports, and settings.

![Resident flowchart](./brims-flow-resident.png)

```mermaid
flowchart TD
  Start([Resident opens app]):::start --> Login["Login Page"]
  Login -->|Forgot password| Forgot["Forgot Password"]
  Forgot --> Reset["Reset Password<br/>(via email link)"]
  Reset --> Login
  Login -->|Invalid credentials| Login
  Login -->|Valid resident login| Dash["Resident Dashboard<br/>(welcome + quick actions)"]:::page

  Dash --> Profile["My Profile<br/>(view personal + household info)"]:::page
  Dash --> ReqCertStart["Request Certificate"]:::page
  Dash --> MyReqList["My Requests<br/>(track statuses)"]:::page
  Dash --> ResRep["Resident Reports"]:::page
  Dash --> Settings["Settings<br/>(update profile / preferences)"]:::page
  Dash --> Notif["Notifications Bell<br/>(view / mark as read)"]:::page
  Dash --> Logout([Logout]):::stop

  ReqCertStart --> FillForm["Fill out form<br/>(certificate type, purpose)"]
  FillForm --> Submit{Submit?}
  Submit -->|No| ReqCertStart
  Submit -->|Yes| SaveReq[("Save request<br/>(Firestore)")]:::ext
  SaveReq --> NotifyStaff["Notify staff<br/>(in-app + optional SMS/Email)"]:::ext
  NotifyStaff --> MyReqList

  MyReqList --> ReqDetail["Request Detail<br/>(status, history, QR)"]:::page
  ReqDetail --> MyReqList

  classDef start fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20;
  classDef stop fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#b71c1c;
  classDef page fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
  classDef ext fill:#fff3e0,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
```

---

## 2. Staff Flow

Day-to-day barangay staff operations: residents, households, requests, reports, and the QR scanner.

![Staff flowchart](./brims-flow-staff.png)

```mermaid
flowchart TD
  Start([Staff opens app]):::start --> Login["Login Page"]
  Login -->|Forgot password| Forgot["Forgot Password"]
  Forgot --> Reset["Reset Password"]
  Reset --> Login
  Login -->|Valid staff login| Dash["Staff Dashboard<br/>(summary cards + recent activity)"]:::page

  Dash --> Profile["My Profile<br/>(staff account info)"]:::page
  Dash --> QR["QR Scanner<br/>(scan resident / request QR)"]:::page
  Dash --> ResidentsList["Residents List<br/>(search, filter by purok/gender/age)"]:::page
  Dash --> HouseholdsList["Households List"]:::page
  Dash --> ReportsView["Reports<br/>(population, demographics)"]:::page
  Dash --> RequestsList["Requests List<br/>(active, non-archived)"]:::page
  Dash --> Notif["Notifications Bell"]:::page
  Dash --> Logout([Logout]):::stop

  QR --> ScanResult{What did QR encode?}
  ScanResult -->|Resident| ResidentProfile["Resident Profile"]:::page
  ScanResult -->|Request| RequestDetail
  ScanResult -->|Certificate| RequestDetail

  ResidentsList --> AddResident["Add Resident<br/>(form)"]:::page
  AddResident --> SaveRes[("Save to Firestore")]:::ext
  SaveRes --> ResidentsList
  ResidentsList --> ResidentProfile
  ResidentProfile --> EditRes["Edit Resident"]:::page
  EditRes --> SaveRes
  ResidentProfile --> GenCert["Generate Certificate<br/>(residency / indigency)"]:::page

  HouseholdsList --> AddHH["Add Household"]:::page
  HouseholdsList --> MapHH["Household Map<br/>(Leaflet)"]:::page
  HouseholdsList --> HHDetail["Household Detail"]:::page
  AddHH --> SaveHH[("Save to Firestore")]:::ext
  SaveHH --> HouseholdsList
  HHDetail --> EditHH["Edit Household"]:::page
  EditHH --> SaveHH

  RequestsList --> RequestDetail["Request Detail"]:::page
  RequestDetail --> Process{Action?}
  Process -->|Process / Update status| UpdateReq[("Update request<br/>(Firestore)")]:::ext
  Process -->|Generate certificate| GenCert
  UpdateReq --> NotifyRes["Notify resident<br/>(in-app + optional SMS/Email)"]:::ext
  GenCert --> NotifyRes
  NotifyRes --> RequestsList

  classDef start fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20;
  classDef stop fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#b71c1c;
  classDef page fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
  classDef ext fill:#fff3e0,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
```

---

## 3. Admin Flow

Admin inherits all Staff capabilities plus admin-only features: Users & Roles, broadcasts, audit log, archives, approvals, and system settings.

![Admin flowchart](./brims-flow-admin.png)

```mermaid
flowchart TD
  Start([Admin opens app]):::start --> Login["Login Page"]
  Login -->|Forgot password| Forgot["Forgot Password"]
  Forgot --> Reset["Reset Password"]
  Reset --> Login
  Login -->|Valid admin login| Dash["Admin Dashboard<br/>(full access)"]:::page

  Dash --> StaffOps["Staff Operations<br/>(Residents, Households, Requests,<br/>Reports, QR Scanner, Profile)"]:::shared

  Dash --> Users["Users & Roles"]:::admin
  Dash --> SMS["SMS Broadcast"]:::admin
  Dash --> Email["Email Broadcast"]:::admin
  Dash --> Audit["Audit Log"]:::admin
  Dash --> Archives["Archives"]:::admin
  Dash --> SysSettings["System Settings"]:::admin
  Dash --> Notif["Notifications Bell"]:::page
  Dash --> Logout([Logout]):::stop

  StaffOps --> ReqDetail["Request Detail"]:::page
  ReqDetail --> Decide{Admin decision}
  Decide -->|Approve| Approve[("Mark approved<br/>+ generate certificate")]:::ext
  Decide -->|Reject| Reject[("Mark rejected")]:::ext
  Decide -->|Archive| ArchiveReq[("Move to Archives")]:::ext
  Approve --> NotifyRes["Notify resident<br/>(in-app + SMS / Email)"]:::ext
  Reject --> NotifyRes
  ArchiveReq --> Archives

  Users --> AddUser["Add Admin / Staff account"]:::page
  Users --> EditRole["Edit role description<br/>+ permissions"]:::page
  Users --> ToggleUser["Activate / Deactivate user"]:::page
  Users --> ArchiveUser["Archive user account"]:::page
  AddUser --> SaveUser[("Save user<br/>(Firestore)")]:::ext
  EditRole --> SaveUser
  ToggleUser --> SaveUser
  ArchiveUser --> Archives

  SMS --> ComposeSMS["Compose SMS<br/>(select recipients)"]
  ComposeSMS --> SendSMS[("Send via backend<br/>→ Twilio")]:::ext
  SendSMS --> Audit

  Email --> ComposeEmail["Compose Email<br/>(select recipients)"]
  ComposeEmail --> SendEmail[("Send via backend<br/>→ SMTP / Nodemailer")]:::ext
  SendEmail --> Audit

  Archives --> BrowseArc["Browse archived<br/>(residents / households /<br/>requests / users)"]:::page
  BrowseArc --> RestoreItem{Restore?}
  RestoreItem -->|Yes| DoRestore[("Restore to active<br/>(Firestore)")]:::ext
  RestoreItem -->|No| BrowseArc

  classDef start fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20;
  classDef stop fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#b71c1c;
  classDef page fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
  classDef admin fill:#f3e5f5,stroke:#6a1b9a,stroke-width:1.5px,color:#4a148c;
  classDef shared fill:#ede7f6,stroke:#4527a0,stroke-width:1.5px,color:#311b92;
  classDef ext fill:#fff3e0,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
```

---

## Re-rendering

To regenerate the PNGs after editing the `.mmd` source files:

```bash
npx -p @mermaid-js/mermaid-cli mmdc -i docs/brims-flow-resident.mmd -o docs/brims-flow-resident.png -b white -w 1800 -H 2400 --scale 2
npx -p @mermaid-js/mermaid-cli mmdc -i docs/brims-flow-staff.mmd    -o docs/brims-flow-staff.png    -b white -w 2400 -H 2400 --scale 2
npx -p @mermaid-js/mermaid-cli mmdc -i docs/brims-flow-admin.mmd    -o docs/brims-flow-admin.png    -b white -w 2400 -H 2400 --scale 2
```

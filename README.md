# GovernanceAI - GST WhatsApp Reminder System

This project is a professional administrative tool for managing GST clients and automated WhatsApp reminders. It consists of a **Next.js 14** frontend and a **FastAPI (Python)** backend.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Lucide Icons, React Hot Toast.
- **Backend**: FastAPI (Python 3.11+), Uvicorn.
- **Database/Auth**: Supabase (PostgreSQL).
- **Messaging**: Meta WhatsApp Business API.

---

## 🚀 Getting Started

### 1. Database Setup (Supabase)
1. Go to your **Supabase Dashboard > SQL Editor**.
2. Copy the content of `supabase_schema.sql` from this project.
3. Paste and **Run** the script. This sets up all tables, security policies, and initial config.

### 2. Environment Variables (`.env.local`)
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
```

### 3. Frontend Installation
```bash
npm install
npm run dev
```
Open [http://localhost:3000/admin](http://localhost:3000/admin).

### 4. Backend Installation
```bash
# It is recommended to use a virtual environment
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r backend/requirements.txt

# Run the server
python backend/main.py
```
The backend will run on `http://127.0.0.1:8000`.

---

## 🧩 Project Structure & Features

### Frontend (`app/` and `components/`)
- **`app/admin/page.tsx`**: The core layout for the Admin Portal. Handles sidebar navigation between Overview, Clients, and Control Panel.
- **`components/Admin.tsx`**: Contains all Admin UI logic:
  - `UserManagementTable`: CRUD operations for clients.
  - `AdminSettings`: The **Control Panel** where you add WhatsApp API keys.
  - `AdminLogs`: Real-time view of sent reminders.
- **`lib/actions.ts`**: Contains "Server Actions" that bridge the Frontend to both Supabase and the Python Backend.
- **`components/UI.tsx`**: Reusable professional UI components (Buttons, Inputs, Cards).

### Backend (`backend/`)
- **`backend/main.py`**: The "engine" of the system:
  - **GST Logic**: Automatically derives PAN from GSTIN during registration.
  - **WhatsApp Logic**: Dynamically fetches your Meta API keys from the database and triggers the message transmission.

---

## 📱 WhatsApp API Integration
1. Log in to the Admin Dashboard and go to the **Control Panel**.
2. Enter your **Meta Business Phone ID** and **Access Token**.
3. Click **Save API Credentials**.
4. The system is now live! Manual sends in the "Clients" table will now use these keys.

---

## 🤝 Instructions for Collaboration
- **Always keep the Backend running**: The frontend relies on the Python API for GST validation and WhatsApp triggers.
- **Database Changes**: If you add new features requiring new columns, update `supabase_schema.sql` accordingly.
- **Styling**: We use **Tailwind CSS**. Avoid writing custom CSS in `globals.css` if possible.
- **Notifications**: Use `toast.success()` or `toast.error()` from `react-hot-toast` for user feedback.

---

## 💡 System Features
- [x] **Client Management**: Full CRUD for GST entities.
- [x] **Smart GSTIN**: Automatic PAN extraction via Python.
- [x] **Manual Triggers**: One-click reminder sending from the table.
- [x] **Control Panel**: Dynamic Management of Meta API credentials.
- [x] **Live Logs**: Track the status of every reminder sent.
- [x] **Responsive Admin UI**: Mobile-ready professional dashboard.

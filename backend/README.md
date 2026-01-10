# GovernanceAI Backend Engine (FastAPI)

This is the core processing engine for the GovernanceAI system.

## 🚀 Setup
1. Ensure you have Python 3.11+ installed.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python main.py
   ```

## 🛠️ Key Endpoints
- **GET `/health`**: Check system and database status.
- **POST `/api/gst/upsert`**: Handles client registration and derives PAN from GSTIN.
- **POST `/api/admin/send-whatsapp`**: Triggers WhatsApp reminders. It dynamically pulls Meta API credentials from the `system_settings` table in Supabase.

## 📁 File Role
- `main.py`: Contains all logic for GST processing and WhatsApp integration. No further files are needed for the core API logic, keeping it clean and easy for team collaboration.

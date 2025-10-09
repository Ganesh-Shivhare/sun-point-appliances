# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/266095a4-a106-4dbb-9b90-c5ee7bec5f92

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/266095a4-a106-4dbb-9b90-c5ee7bec5f92) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/266095a4-a106-4dbb-9b90-c5ee7bec5f92) and click on Share -> Publish.

## Environment Variables for Production

For production deployment, you need to set the following environment variables:

### Frontend Environment Variables (VITE_*)
- `VITE_API_URL`: Your production API server URL (e.g., `http://192.168.29.72:3002` or `https://your-api-domain.com`)

### Backend Environment Variables (for server.js)
- `VITE_SMTP_SERVER`: Your SMTP server hostname
- `VITE_SMTP_PORT`: SMTP server port (usually 587)
- `VITE_SMTP_LOGIN`: Your SMTP username/email
- `VITE_SMTP_PASSWORD`: Your SMTP password
- `VITE_FROM_EMAIL`: Email address to send from
- `VITE_TO_EMAIL`: Email address to receive inquiries

### Example .env file:
```
VITE_API_URL=http://192.168.29.72:3002
VITE_SMTP_SERVER=smtp.gmail.com
VITE_SMTP_PORT=587
VITE_SMTP_LOGIN=your-email@gmail.com
VITE_SMTP_PASSWORD=your-app-password
VITE_FROM_EMAIL=your-email@gmail.com
VITE_TO_EMAIL=store-owner@domain.com
```

## Port Configuration

**Important**: The server runs on port 3002 by default. If port 3001 is already in use (by another application), the server will need to be started on a different port:

```bash
# Start server on port 3002
PORT=3001 node server.js

# Or start on any other available port
PORT=3003 node server.js
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

CRM Frontend with Next.js, React, and Shadcn UI

This project is a frontend application for a Customer Relationship Management (CRM) tool, inspired by parts of Twenty.com. It is built using Next.js, React, and Shadcn UI components. The application includes features like side navigation, a command bar, a people management page, settings, and task management.

Table of Contents

- Features
- Tech Stack
- Installation
- Running the Project
- Deployment
- Folder Structure
- Usage
- Screenshots
- Contributing
- License

Features

- Side Navigation: Easy access to different sections like Prospects, Companies, Tasks, Notifications, and Settings.
- Command Bar: Quickly navigate and perform actions using Command + K.
- People Page: Manage prospects with an interactive table. Add, edit, and delete prospects.
- Settings Page: Configure user profile, appearance themes, and other settings.
- Tasks Management: Manage tasks and associate them with prospects.

Tech Stack

- Framework: Next.js
- Library: React
- UI Components: Shadcn UI
- HTTP Client: Axios
- Styling: Tailwind CSS

Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/crm-nextjs.git
    cd crm-nextjs
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

Running the Project

1. Compile and build the project:
    ```bash
    npx tsc
    npm run build
    ```

2. Run the development server:
    ```bash
    npm run dev
    ```

3. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

Deployment

Deploy your application to Vercel:

1. Sign up for a free Vercel account if you don't have one.
2. Install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```
3. Deploy the project:
    ```bash
    vercel
    ```
4. Follow the instructions to complete the deployment.

Folder Structure

```
.
├── components
│   ├── CommandBar.tsx
│   ├── Sidebar.tsx
│   └── Tasks.tsx
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── prospects.tsx
│   └── settings
│       ├── [section].tsx
│       └── index.tsx
├── services
│   └── api.js
├── styles
│   └── globals.css
├── public
│   └── ...
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── tsconfig.json
```

Usage

Authentication

To authenticate and fetch data, make sure to use the provided demo account credentials:
- Email: xxxxx
- Password: xxxxx

Customizing Sidebar

Modify `components/Sidebar.tsx` to add or remove navigation items.

Command Bar

The command bar is implemented in `components/CommandBar.tsx` and can be extended to add more actions or search capabilities.

Managing Prospects

Prospects are managed on the `pages/prospects.tsx` page. Add, edit, and delete operations can be performed, and the data is stored in memory.

Settings

Settings are handled in `pages/settings/[section].tsx`. The appearance settings allow switching between Light, Dark, Purple Light, and Purple Dark themes.

Screenshots

Side Navigation
![Side Navigation](screenshots/sidebar.png)

Command Bar
![Command Bar](screenshots/command-bar.png)

People Page
![People Page](screenshots/people-page.png)

Settings Page
![Settings Page](screenshots/settings-page.png)

Tasks Management
![Tasks Management](screenshots/tasks.png)

Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

This version removes the hashtags for a more plain text format. Adjust the content as needed to fit your specific project requirements.

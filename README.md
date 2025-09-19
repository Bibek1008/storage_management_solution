# 📁 Store It - Cloud Storage Management Solution

A modern, full-featured cloud storage management application built with Next.js 15, Appwrite, and NextAuth. Store It provides a seamless file management experience with support for multiple authentication methods, file sharing, and comprehensive file operations.

## 🚀 Live Demo

**Production Deployment:** [https://storage-management-solution-dusky-ten.vercel.app](https://storage-management-solution-dusky-ten.vercel.app)

## ✨ Features

- **🔐 Multi-Authentication Support**: Email/password, Google OAuth, and GitHub OAuth
- **📤 File Upload & Management**: Drag-and-drop file uploads with progress tracking
- **🔍 Advanced Search**: Search files by name, type, and content
- **📊 Storage Analytics**: Visual charts showing storage usage and file type distribution
- **🔗 File Sharing**: Generate shareable links for files and folders
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful interface built with Tailwind CSS and Radix UI
- **⚡ Real-time Updates**: Live file operations and storage updates
- **🗂️ File Organization**: Create folders, move files, and organize your storage

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 with React 19 RC
- **Backend**: Appwrite (Database, Authentication, Storage)
- **Authentication**: NextAuth.js with multiple providers
- **Styling**: Tailwind CSS with Radix UI components
- **Charts**: Recharts for analytics visualization
- **Form Handling**: React Hook Form with Zod validation
- **File Upload**: React Dropzone
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- An Appwrite account and project
- Google OAuth credentials (optional)
- GitHub OAuth credentials (optional)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd storage_management_solution-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add your environment variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your_project_id"
NEXT_PUBLIC_APPWRITE_DATABASE="your_database_id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your_users_collection_id"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your_files_collection_id"
NEXT_PUBLIC_APPWRITE_BUCKET="your_bucket_id"
NEXT_APPWRITE_KEY="your_api_key"

# NextAuth Configuration
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
```

### 4. Appwrite Setup

1. Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
2. Create a database and collections for users and files
3. Set up a storage bucket for file uploads
4. Configure authentication providers
5. Update the environment variables with your Appwrite credentials

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, inputs, etc.)
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── appwrite/         # Appwrite configuration
│   └── utils.ts          # Utility functions
├── constants/            # Application constants
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🌐 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Manual Deployment with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔒 Security Features

- **Secure Authentication**: Multiple authentication providers with NextAuth.js
- **File Access Control**: User-specific file access and permissions
- **Input Validation**: Comprehensive form validation with Zod
- **CSRF Protection**: Built-in CSRF protection with NextAuth.js
- **Secure File Upload**: File type validation and size limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Appwrite](https://appwrite.io/) for the backend-as-a-service platform
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for the accessible UI components
- [Vercel](https://vercel.com/) for the deployment platform

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ using Next.js and Appwrite**
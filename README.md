# 📁 Store It - Cloud Storage Management Solution

A modern, full-featured cloud storage management application built with Next.js 15, Appwrite, and NextAuth. Store It provides a seamless file management experience with support for multiple authentication methods, file sharing, and comprehensive file operations.

## ✨ Features

### 🔐 Authentication
- **Dual Authentication System**: Support for both Google OAuth (NextAuth) and Email OTP (Appwrite)
- **Unified User Management**: Seamless switching between authentication methods
- **Secure Session Management**: Protected routes and secure file operations

### 📂 File Management
- **File Upload**: Drag-and-drop file upload with progress tracking
- **File Organization**: Categorized file browsing (Documents, Images, Media, Others)
- **File Operations**: Rename, delete, download, and share files
- **File Details**: View comprehensive file information and metadata
- **Search & Sort**: Advanced search functionality with multiple sorting options

### 👥 Collaboration
- **File Sharing**: Share files with other users via email
- **Access Control**: Manage user permissions and file access
- **Shared File Management**: View and manage files shared with you

### 📊 Dashboard
- **Storage Analytics**: Visual charts showing storage usage by file type
- **Recent Files**: Quick access to recently uploaded files
- **Storage Overview**: Total storage usage and file count statistics

### 🎨 User Experience
- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Dark Theme**: Professional dark theme interface
- **Mobile Responsive**: Optimized for all device sizes
- **Real-time Updates**: Instant UI updates after file operations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with React 19 RC
- **Styling**: Tailwind CSS with Radix UI components
- **Authentication**: NextAuth.js + Appwrite Auth
- **Backend**: Appwrite (Database, Storage, Authentication)
- **File Upload**: React Dropzone
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for analytics visualization
- **Icons**: Lucide React icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Appwrite account and project
- Google OAuth credentials (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd storage_management_solution-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:
   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
   NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
   NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your-users-collection-id"
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your-files-collection-id"
   NEXT_PUBLIC_APPWRITE_BUCKET="your-bucket-id"
   NEXT_APPWRITE_KEY="your-api-key"

   # NextAuth Configuration (Optional - for Google OAuth)
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up Appwrite**
   
   Create the following in your Appwrite project:
   
   **Database Collections:**
   - **Users Collection** with attributes:
     - `fullName` (string)
     - `email` (string, required)
     - `avatar` (string)
     - `accountId` (string)
   
   - **Files Collection** with attributes:
     - `type` (string)
     - `name` (string, required)
     - `url` (string)
     - `extension` (string)
     - `size` (integer)
     - `owner` (string, required)
     - `accountId` (string)
     - `users` (string array)
     - `bucketField` (string)

   **Storage Bucket:**
   - Create a storage bucket for file uploads
   - Configure appropriate permissions

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

### Authentication
1. **Sign Up/Sign In**: Use either Google OAuth or email OTP
2. **Account Creation**: New users are automatically created in the database
3. **Session Management**: Secure session handling across authentication methods

### File Operations
1. **Upload Files**: Drag and drop files or click the upload button
2. **Browse Files**: Navigate through different file categories
3. **File Actions**: Use the dropdown menu for rename, share, download, delete
4. **Search**: Use the search bar to find specific files
5. **Sort**: Sort files by date, name, or size

### Sharing Files
1. **Share**: Click the share option in the file dropdown
2. **Add Users**: Enter email addresses of users to share with
3. **Manage Access**: Remove users from shared files
4. **Access Shared Files**: View files shared with you

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── oauth/             # OAuth callback handling
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── ActionDropdown.tsx # File action menu
│   ├── FileUploader.tsx   # File upload component
│   ├── Header.tsx         # Application header
│   └── ...
├── lib/                   # Utility libraries
│   ├── actions/           # Server actions
│   ├── appwrite/          # Appwrite configuration
│   ├── auth.ts            # NextAuth configuration
│   └── utils.ts           # Utility functions
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## 🔧 Configuration

### Appwrite Setup
1. Create a new Appwrite project
2. Set up authentication providers (Email/Password, Google OAuth)
3. Create database collections with the specified schema
4. Configure storage bucket with appropriate permissions
5. Generate API keys with necessary permissions

### NextAuth Setup (Optional)
1. Configure Google OAuth in Google Cloud Console
2. Add authorized redirect URIs
3. Set up environment variables for Google OAuth

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure all environment variables are properly set in your production environment, especially:
- Update `NEXTAUTH_URL` to your production domain
- Use production Appwrite endpoint if different
- Secure your API keys and secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Appwrite](https://appwrite.io/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Store It** - Making file management simple and secure! 🚀
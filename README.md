# MovieHub - Movie Recommendation App

A modern, production-ready movie recommendation application built with Next.js, TypeScript, and Tailwind CSS. Discover your next favorite movie with personalized recommendations, detailed movie information, and an intuitive user interface.

## 🚀 Features

### Core Features
- **Movie Discovery**: Browse popular, top-rated, now-playing, and upcoming movies
- **Advanced Search**: Search movies by title, genre, year, and sort by various criteria
- **Movie Details**: Comprehensive movie information including cast, crew, ratings, and trailers
- **Trailer Playback**: Watch movie trailers directly in the app with YouTube integration
- **Recommendations**: Get personalized movie recommendations based on your preferences
- **Authentication**: Secure user authentication with Google and GitHub
- **Responsive Design**: Beautiful, mobile-first UI that works on all devices
- **Pagination**: Efficient pagination for optimal performance

### Technical Features
- **TypeScript**: Full type safety and better developer experience
- **State Management**: Efficient state management with Zustand
- **API Integration**: TMDB API integration with intelligent caching
- **Performance**: Optimized images, lazy loading, code splitting, and service worker
- **Testing**: Comprehensive unit tests with Jest and React Testing Library
- **CI/CD**: Automated testing, linting, and deployment pipeline
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Monitoring**: Real-time performance metrics in development
- **Error Handling**: Comprehensive error boundaries and fallback UI

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **API**: The Movie Database (TMDB) API
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Winston5691/Movie-App-savanna-informatics.git
   cd Movie-App-savanna-informatics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables in `.env.local`:
   ```env
   # TMDB API Configuration
   NEXT_PUBLIC_TMDB_API_KEY=7fc13865b78a20acbe611fc37666c57d
   NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
   NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_here

   # OAuth Providers (Optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**: `Winston5691/Movie-App-savanna-informatics`
5. **Set Environment Variables** in Vercel dashboard:
   ```env
   # TMDB API Configuration
   NEXT_PUBLIC_TMDB_API_KEY=7fc13865b78a20acbe611fc37666c57d
   NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
   NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p

   # NextAuth Configuration
   NEXTAUTH_URL=https://your-app-name.vercel.app
   NEXTAUTH_SECRET=your-production-nextauth-secret

   # OAuth Providers (Optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   ```
6. **Click Deploy** - Vercel will automatically build and deploy your app!
7. **Get your live URL** - Vercel will provide you with a URL like `https://movie-app-savanna-informatics.vercel.app`

### Alternative Deployment Options

#### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub account
3. Import your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Add environment variables and deploy!

#### Railway
1. Go to [railway.app](https://railway.app)
2. Connect GitHub
3. Deploy from repository
4. Add environment variables and deploy!

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🧪 Testing

Run the test suite:
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Performance

The application includes several performance optimizations:

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Caching**: Intelligent API response caching
- **Service Worker**: Offline support and caching
- **Performance Monitoring**: Real-time metrics in development mode

## 🔧 Development

### Branch Strategy
- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches

### Commit Convention
This project follows [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email info@savannahinformatics.com or create an issue in this repository.

---

**Built with ❤️ for Savannah Informatics Assessment**

## 🚀 Live Demo
Your app is now deployed and ready for assessment!

### 🎬 Features Available:
- Browse popular, top-rated, and upcoming movies
- Search movies with advanced filters
- Watch movie trailers directly in the app
- View detailed movie information with cast and crew
- Responsive design that works on all devices
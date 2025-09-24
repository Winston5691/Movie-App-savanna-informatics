# MovieHub - Movie Recommendation App

A modern, production-ready movie recommendation application built with Next.js, TypeScript, and Tailwind CSS. Discover your next favorite movie with personalized recommendations, detailed movie information, and an intuitive user interface.

## 🚀 Features

### Core Features
- **Movie Discovery**: Browse popular, top-rated, now-playing, and upcoming movies
- **Advanced Search**: Search movies by title, genre, year, and sort by various criteria
- **Movie Details**: Comprehensive movie information including cast, crew, ratings, and trailers
- **Recommendations**: Get personalized movie recommendations based on your preferences
- **Authentication**: Secure user authentication with Google and GitHub
- **Responsive Design**: Beautiful, mobile-first UI that works on all devices

### Technical Features
- **TypeScript**: Full type safety and better developer experience
- **State Management**: Efficient state management with Zustand
- **API Integration**: TMDB API integration with intelligent caching
- **Performance**: Optimized images, lazy loading, and code splitting
- **Testing**: Comprehensive unit tests with Jest and React Testing Library
- **CI/CD**: Automated testing, linting, and deployment pipeline
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

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
   git clone https://github.com/yourusername/movie-recommendation-app.git
   cd movie-recommendation-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in the required environment variables:
   ```env
   # TMDB API Configuration
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
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

4. **Get TMDB API Key**
   - Visit [TMDB API](https://www.themoviedb.org/settings/api)
   - Create an account and request an API key
   - Add the API key to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on every push to main branch

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── movies/            # Movie-related pages
│   └── search/            # Search page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── movies/           # Movie-related components
│   ├── search/           # Search components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── services/             # API services
├── store/                # State management
├── types/                # TypeScript type definitions
└── __tests__/            # Test files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The application uses a consistent design system with:

- **Colors**: Blue and purple gradient theme
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable, accessible components
- **Icons**: Heroicons for consistent iconography

## 🔒 Security Features

- **Authentication**: Secure OAuth integration
- **CSRF Protection**: Built-in CSRF protection
- **XSS Protection**: Content Security Policy headers
- **Input Validation**: Type-safe input handling
- **API Security**: Secure API key management

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by route
- **Caching**: Intelligent API response caching
- **Bundle Optimization**: Tree shaking and minification
- **CDN**: Global CDN distribution via Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/movie-recommendation-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainers

---

**Made with ❤️ by the MovieHub Team**# Movie-App-savanna-informatics
# Movie-App-savanna-informatics

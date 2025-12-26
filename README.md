# CoderCodes

> A curated collection of optimized KTU BTech CS lab programs.

**CoderCodes** is a modern, high-performance web application designed to help Computer Science students explore, learn, and implement core algorithms and system programs. Built with the cutting-edge **Next.js 16** stack, it prioritizes speed, aesthetics, and developer experience.

![Project Preview](/screenshot.png)

## 🚀 Key Features

- **⚡ Blazing Fast**: Powered by Next.js 16 (App Router) & Turbopack.
- **🎨 Modern UI**: Styled with Tailwind CSS v4, featuring glassmorphism, smooth gradients, and micro-interactions.
- **� Native MDX**: Content is managed via a filesystem-based MDX layer—no databases, zero latency.
- **📱 Optimised for Mobile**: Responsive design that adapts perfectly from desktops to foldables.
- **🔍 SEO Ready**: Automatic metadata generation, sitemaps, and optimized open graph tags.
- **🌑 Dark Mode**: A carefully crafted dark theme for late-night coding sessions.

## �️ Tech Stack

- **Framework**: Next.js 16.1.1 (React 19)
- **Styling**: Tailwind CSS v4 (Alpha/Beta engine)
- **Icons**: Lucide React
- **Content**: MDX + Gray Matter
- **Typography**: Geist Sans & Geist Mono
- **Tooling**: pnpm, ESLint, Prettier

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ (LTS Recommended)
- pnpm (v9+ recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AdithyanA2005/CoderCodes.git
   cd CoderCodes
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   > Note: We use `pnpm` for efficient package management.

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```bash
src/
├── app/               # Next.js App Router pages
│   ├── library/       # Program listing & details
│   ├── categories/    # Category browsing
│   └── layout.tsx     # Root layout & fonts
├── components/        # React components
│   ├── landing/       # Homepage sections
│   ├── library/       # Library-specific UI
│   └── ...
├── content/           # MDX Source Files (The Database)
│   └── posts/         # Individual program files
└── lib/               # Utilities (MDX parsing, helpers)
```

## 🤝 Contributing

Contributions are welcome! If you have a better version of a program or want to fix a bug:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingOptimization`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [Adithyan](https://github.com/AdithyanA2005)

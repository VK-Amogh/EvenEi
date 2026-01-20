import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: [
      'three',
      'ogl',
      'lucide-react',
      'recharts',
      'gsap',
      'motion',
      '@react-three/fiber',
      '@react-three/drei',
      'postprocessing',
    ],
  },
  server: {
    warmup: {
      clientFiles: [
        './app/routes/home.tsx',
        './app/components/faulty-terminal/faulty-terminal.tsx',
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-3d': ['three', 'ogl', '@react-three/fiber', '@react-three/drei'],
          'vendor-animation': ['gsap', 'motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
});

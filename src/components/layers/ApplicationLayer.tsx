import React from 'react';
import { motion } from 'motion/react';
import { ComponentNode } from '../ComponentNode';
import { 
  Map, 
  Database, 
  Wand2, 
  Network, 
  Code2, 
  FileCode 
} from 'lucide-react';

interface ApplicationLayerProps {
  selectedNode: string | null;
  setSelectedNode: (node: string | null) => void;
}

export function ApplicationLayer({ selectedNode, setSelectedNode }: ApplicationLayerProps) {
  const appComponents = [
    { 
      id: 'routing', 
      icon: Map, 
      label: 'Next.js Router', 
      color: 'pink',
      description: 'App Router with nested layouts'
    },
    { 
      id: 'state', 
      icon: Database, 
      label: 'State Manager', 
      color: 'pink',
      description: 'Redux Toolkit / Zustand'
    },
    { 
      id: 'animation', 
      icon: Wand2, 
      label: 'Animation Engine', 
      color: 'pink',
      description: 'Framer Motion + GSAP'
    },
    { 
      id: 'api', 
      icon: Network, 
      label: 'API Layer', 
      color: 'pink',
      description: 'Data fetching stub'
    },
    { 
      id: '3d', 
      icon: Code2, 
      label: '3D / WebGL', 
      color: 'pink',
      description: 'Three.js + Shaders'
    },
    { 
      id: 'effects', 
      icon: FileCode, 
      label: 'Lottie Animations', 
      color: 'pink',
      description: 'Vector animations'
    },
  ];

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-8 left-0 text-sm text-pink-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Application Layer
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {appComponents.map((component, index) => (
          <ComponentNode
            key={component.id}
            id={component.id}
            icon={component.icon}
            label={component.label}
            color={component.color}
            description={component.description}
            isSelected={selectedNode === component.id}
            onClick={() => setSelectedNode(selectedNode === component.id ? null : component.id)}
            delay={0.9 + index * 0.05}
          />
        ))}
      </div>

      {/* Deployment Info */}
      <motion.div 
        className="mt-6 p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-pink-300 mb-1">Deployment</p>
            <p className="text-xs text-pink-200/60">Vercel / Firebase Hosting · CDN Edge Optimized</p>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded bg-pink-600/30 border border-pink-500/30 text-pink-200">
              SSR + CSR Hybrid
            </span>
            <span className="px-2 py-1 text-xs rounded bg-pink-600/30 border border-pink-500/30 text-pink-200">
              Code Splitting
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

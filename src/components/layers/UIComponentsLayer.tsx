import React from 'react';
import { motion } from 'motion/react';
import { ComponentNode } from '../ComponentNode';
import { 
  Sparkles, 
  Info, 
  Award, 
  Users, 
  Route, 
  MessageCircle, 
  Mail, 
  Footprints 
} from 'lucide-react';

interface UIComponentsLayerProps {
  selectedNode: string | null;
  setSelectedNode: (node: string | null) => void;
}

export function UIComponentsLayer({ selectedNode, setSelectedNode }: UIComponentsLayerProps) {
  const uiComponents = [
    { id: 'hero', icon: Sparkles, label: 'Hero Section', color: 'purple', description: 'Cinematic particle background' },
    { id: 'about', icon: Info, label: 'About Section', color: 'purple', description: 'Parallax scrolling' },
    { id: 'achievers', icon: Award, label: 'Achievers Showcase', color: 'purple', description: 'Dynamic cards' },
    { id: 'mentorship', icon: Users, label: 'Mentorship Features', color: 'purple', description: 'Interactive carousel' },
    { id: 'journey', icon: Route, label: 'Student Journey', color: 'purple', description: 'Timeline animation' },
    { id: 'testimonials', icon: MessageCircle, label: 'Testimonials', color: 'purple', description: 'Animated counters' },
    { id: 'newsletter', icon: Mail, label: 'Newsletter Form', color: 'purple', description: 'Live validation' },
    { id: 'footer', icon: Footprints, label: 'Footer', color: 'purple', description: 'Glassmorphism' },
  ];

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-8 left-0 text-sm text-purple-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        UI Components Layer
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {uiComponents.map((component, index) => (
          <ComponentNode
            key={component.id}
            id={component.id}
            icon={component.icon}
            label={component.label}
            color={component.color}
            description={component.description}
            isSelected={selectedNode === component.id}
            onClick={() => setSelectedNode(selectedNode === component.id ? null : component.id)}
            delay={0.6 + index * 0.05}
          />
        ))}
      </div>

      {/* Visual Features Badge */}
      <motion.div 
        className="mt-6 flex justify-center gap-2 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
          Framer Motion Transitions
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
          WCAG Accessible
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
          Lazy Loading
        </span>
      </motion.div>
    </div>
  );
}

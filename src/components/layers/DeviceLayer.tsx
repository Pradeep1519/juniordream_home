import React from 'react';
import { motion } from 'motion/react';
import { ComponentNode } from '../ComponentNode';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

interface DeviceLayerProps {
  selectedNode: string | null;
  setSelectedNode: (node: string | null) => void;
}

export function DeviceLayer({ selectedNode, setSelectedNode }: DeviceLayerProps) {
  const devices = [
    { id: 'browser', icon: Monitor, label: 'Desktop Browser', color: 'cyan' },
    { id: 'tablet', icon: Tablet, label: 'Tablet Web', color: 'cyan' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile Web', color: 'cyan' },
  ];

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-8 left-0 text-sm text-cyan-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        User Device Layer
      </motion.div>
      
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {devices.map((device, index) => (
          <ComponentNode
            key={device.id}
            id={device.id}
            icon={device.icon}
            label={device.label}
            color={device.color}
            isSelected={selectedNode === device.id}
            onClick={() => setSelectedNode(selectedNode === device.id ? null : device.id)}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>

      {/* Responsive Design Badge */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
          Responsive Design: Mobile → 4K Screens
        </span>
      </motion.div>
    </div>
  );
}

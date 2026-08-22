export type ToolsIconKey = 'Wrench';

export interface ToolItem {
  name: string;
  description: string;
  features: string[];
  website: string;
  difficulty: string;
  color: string;
}

export interface ToolCategory {
  category: string;
  icon: ToolsIconKey;
  items: ToolItem[];
}

export const rfTools: ToolCategory[] = [
  {
    category: 'RF Security Tools',
    icon: 'Wrench',
    items: [
      {
        name: 'SigDigger',
        description:
          'A lightweight SDR signal analyzer for realtime spectrum inspection, modulation analysis, and RF threat hunting.',
        features: [
          'Realtime waterfall and FFT analysis',
          'Modulation inspection and signal visualization',
          'Cross-platform support for common SDR workflows',
          'Useful for RF investigations and threat hunting',
        ],
        website: 'https://batchdrake.github.io/SigDigger/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'GNU Radio',
        description:
          'An open-source signal processing toolkit for building SDR pipelines, experiments, and custom RF workflows.',
        features: [
          'Programmable SDR flowgraphs',
          'Modular signal processing blocks',
          'Extensive community examples',
          'Ideal for RF prototyping and research',
        ],
        website: 'https://www.gnuradio.org/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-purple-500 to-indigo-500',
      },
      {
        name: 'SoapySDR',
        description:
          'A vendor-neutral SDR hardware abstraction layer that helps applications work with many radio devices through one API.',
        features: [
          'Unified hardware abstraction interface',
          'Supports multiple SDR devices and drivers',
          'Simplifies cross-platform SDR development',
          'Common integration layer for RF tools',
        ],
        website: 'https://github.com/pothosware/SoapySDR',
        difficulty: 'Intermediate',
        color: 'from-teal-500 to-cyan-500',
      },
      {
        name: 'Universal Radio Hacker',
        description:
          'A tool for analyzing, decoding, and reverse engineering wireless protocols from captured RF recordings.',
        features: [
          'Protocol reverse engineering workflows',
          'Signal decoding and analysis',
          'Support for offline IQ investigation',
          'Useful companion to SDR capture tools',
        ],
        website: 'https://github.com/jopohl/urh',
        difficulty: 'Intermediate to Advanced',
        color: 'from-emerald-500 to-green-500',
      },
    ],
  },
];
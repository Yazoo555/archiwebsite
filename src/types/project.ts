export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  location: string
  year: number
  tags?: string[]
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'yakscape',
    title: 'YakScape',
    category: 'Cultural / Thesis',
    description:
      'A multifunctional cultural hub in Khahare, Ramechhap — combining a heritage museum, yak cheese production, tasting spaces, Sherpa restaurant, and visitor accommodation to create a closed-loop livelihood ecosystem.',
    image: '/images/yakscape.jpeg',
    location: 'Ramechhap, Nepal',
    year: 2024,
    tags: ['Cultural', 'Sustainable', 'Stone & Timber', 'Thesis'],
    featured: true,
  },
  {
    id: 'riverside-pavilion',
    title: 'Riverside Pavilion',
    category: 'Cultural',
    description:
      'A transparent, light-filled pavilion that dialogues with the river landscape through cantilevered glass planes and raw concrete volumes.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    location: 'Portland, Oregon',
    year: 2024,
    tags: ['Cultural', 'Concrete', 'Glass'],
    featured: true,
  },
  {
    id: 'terra-hills-residence',
    title: 'Terra Hills Residence',
    category: 'Residential',
    description:
      'A hillside home carved into the terrain, using rammed earth walls and deep overhangs to blend shelter with landscape.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    location: 'Sonoma, California',
    year: 2023,
    tags: ['Residential', 'Rammed Earth', 'Landscape'],
    featured: true,
  },
  {
    id: 'metro-bridge',
    title: 'Metro Bridge',
    category: 'Infrastructure',
    description:
      'A pedestrian bridge that arcs across urban infrastructure, weaving steel tension cables with warm timber decking.',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
    location: 'Rotterdam, Netherlands',
    year: 2024,
    tags: ['Infrastructure', 'Steel', 'Timber'],
  },
  {
    id: 'atelier-gallery',
    title: 'Atelier Gallery',
    category: 'Commercial',
    description:
      'A converted industrial space reimagined as an art gallery, preserving brick patina while inserting minimalist steel galleries.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    location: 'Berlin, Germany',
    year: 2023,
    tags: ['Commercial', 'Adaptive Reuse', 'Steel'],
  },
  {
    id: 'highland-community-centre',
    title: 'Highland Community Centre',
    category: 'Community',
    description:
      'A gathering space for a remote highland village, designed around natural ventilation, local stone construction, and communal outdoor terraces.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    location: 'Pokhara, Nepal',
    year: 2023,
    tags: ['Community', 'Stone', 'Low-Tech'],
  },
]

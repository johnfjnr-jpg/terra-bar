export interface Bar {
  id: string
  slug: string
  name: string
  region: string
  village: string
  pairing: string
  cacao: number
  accent: string
  accentHex: string
  accentName: string
  notes: string[]
  farmer: string
  harvest: string
  distance: string
  elev: string
  filmUrl?: string
  priceGBP: number
}

export const BARS: Bar[] = [
  {
    id: 'png',
    slug: 'highlands-dark',
    name: 'Highlands Dark',
    region: 'Papua New Guinea',
    village: 'Karkar Island, Madang',
    pairing: 'Wild mountain pepper',
    cacao: 72,
    accent: 'var(--tb-png)',
    accentHex: '#2D4A2D',
    accentName: 'Deep Forest Green',
    notes: ['Pepper-bright top', 'Cedar', 'Black tea finish'],
    farmer: 'Joseph Tani',
    harvest: 'July 2025',
    distance: '38 km',
    elev: '420 m',
    priceGBP: 6.50,
  },
  {
    id: 'madagascar',
    slug: 'red-island',
    name: 'Red Island',
    region: 'Madagascar',
    village: 'Sambirano Valley',
    pairing: 'Dried pink peppercorn & vanilla',
    cacao: 68,
    accent: 'var(--tb-madagascar)',
    accentHex: '#B14A2C',
    accentName: 'Red Clay',
    notes: ['Red fruit', 'Pink pepper heat', 'Long vanilla'],
    farmer: 'Hanitra Razafy',
    harvest: 'May 2025',
    distance: '22 km',
    elev: '180 m',
    priceGBP: 6.50,
  },
  {
    id: 'vietnam',
    slug: 'mekong-70',
    name: 'Mekong 70%',
    region: 'Vietnam',
    village: 'Bến Tre, Mekong Delta',
    pairing: 'Toasted sesame & fleur de sel',
    cacao: 70,
    accent: 'var(--tb-vietnam)',
    accentHex: '#8A8A2C',
    accentName: 'Olive Gold',
    notes: ['Toasted sesame', 'Stone fruit', 'Mineral salt'],
    farmer: 'Trần Văn Bình',
    harvest: 'March 2025',
    distance: '14 km',
    elev: '6 m',
    priceGBP: 6.50,
  },
  {
    id: 'indonesia',
    slug: 'sulawesi-smoke',
    name: 'Sulawesi Smoke',
    region: 'Indonesia',
    village: 'Polewali, West Sulawesi',
    pairing: 'Coconut sugar & smoked coconut',
    cacao: 65,
    accent: 'var(--tb-indonesia)',
    accentHex: '#6B4423',
    accentName: 'Warm Brown',
    notes: ['Smoke', 'Burnt sugar', 'Coconut cream'],
    farmer: 'Andi Maulana',
    harvest: 'August 2025',
    distance: '47 km',
    elev: '240 m',
    priceGBP: 6.50,
  },
]

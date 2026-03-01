import { Destination, CaseStudy, Review } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'hunza',
    name: 'Hunza Valley',
    description: 'Experience the breathtaking peaks of Rakaposhi and the ancient Altit and Baltit forts.',
    images: [
      'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626440875200-819287adadca?auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '5-7 Days',
    location: 'Gilgit-Baltistan',
    price: 'Rs. 45,000',
    packages: [
      { name: 'Standard', price: 'Rs. 45,000', features: ['Transport', 'Hotel Stay', 'Breakfast', 'Guide'] },
      { name: 'Premium', price: 'Rs. 65,000', features: ['Luxury Transport', '4-Star Hotel', 'All Meals', 'Photography'] }
    ]
  },
  {
    id: 'skardu',
    name: 'Skardu',
    description: 'The gateway to the world\'s highest peaks, featuring the stunning Shangrila Resort and Cold Desert.',
    images: [
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800'
    ],
    duration: '6-8 Days',
    location: 'Gilgit-Baltistan',
    price: 'Rs. 55,000',
    packages: [
      { name: 'Standard', price: 'Rs. 55,000', features: ['Transport', 'Hotel Stay', 'Breakfast'] }
    ]
  },
  {
    id: 'swat',
    name: 'Swat & Kalam',
    description: 'The Switzerland of the East. Lush green valleys, Mahodand Lake, and Malam Jabba skiing.',
    images: [
      'https://images.unsplash.com/photo-1649279585660-b29ab13b93a8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1708657580282-ed9cfe2391ce?auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '3-5 Days',
    location: 'Khyber Pakhtunkhwa',
    price: 'Rs. 25,000',
    packages: [
      { name: 'Standard', price: 'Rs. 25,000', features: ['Transport', 'Hotel Stay', 'Breakfast'] }
    ]
  },
  {
    id: 'kashmir',
    name: 'Neelum Valley, Kashmir',
    description: 'Heaven on Earth. Sharda, Kel, and Arang Kel are waiting for you.',
    images: [
      'https://images.unsplash.com/photo-1613536172231-55195267a033?auto=format&fit=crop&w=1200&q=80',
      'https://plus.unsplash.com/premium_photo-1663945116431-ada7184b4124?auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '4-6 Days',
    location: 'Azad Kashmir',
    price: 'Rs. 30,000',
    packages: [
      { name: 'Standard', price: 'Rs. 30,000', features: ['Transport', 'Hotel Stay', 'Breakfast'] }
    ]
  },
  {
    id: 'malam-jabba',
    name: 'Malam Jabba',
    description: 'The premier ski resort in Pakistan. Perfect for winter sports and summer sightseeing.',
    images: [
      'https://images.unsplash.com/photo-1609675123793-9098950bf76e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538297172453-e2be02f62945?auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '2-3 Days',
    location: 'Swat',
    price: 'Rs. 18,000',
    packages: [
      { name: 'Standard', price: 'Rs. 18,000', features: ['Transport', 'Hotel Stay', 'Breakfast'] }
    ]
  },
  {
    id: 'murree',
    name: 'Murree & Galiyat',
    description: 'The most popular hill station. Enjoy the Mall Road, Pindi Point, and the lush green Galiyat.',
    images: [
      'https://images.unsplash.com/photo-1583781794690-512938cc57bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1623261216813-fbbe4fb7df44?auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '2-3 Days',
    location: 'Punjab',
    price: 'Rs. 15,000',
    packages: [
      { name: 'Standard', price: 'Rs. 15,000', features: ['Transport', 'Hotel Stay', 'Breakfast'] }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Corporate Retreat: Tech Solutions',
    description: 'A 50-person corporate trip to Hunza focusing on team building and relaxation.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    stats: '100% Satisfaction Rate'
  },
  {
    id: '2',
    title: 'Honeymoon Special: Skardu',
    description: 'A curated luxury experience for a couple exploring the serene beauty of Shangrila.',
    image: 'https://images.pexels.com/photos/19442074/pexels-photo-19442074.jpeg?_gl=1*1w8y9pv*_ga*MTU0NzM4MjIyMy4xNzcyMzc2OTAy*_ga_8JE65Q40S6*czE3NzIzNzY5MDEkbzEkZzEkdDE3NzIzNzc1MDkkajIzJGwwJGgw',
    stats: '5-Star Experience'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'Ahmed Hassan',
    rating: 5,
    comment: 'Hamnawa Travels made our Hunza trip unforgettable. The management was top-notch!',
    location: 'Lahore'
  },
  {
    id: '2',
    user: 'Sara Khan',
    rating: 5,
    comment: 'Best experience in Swat. Highly recommended for family trips.',
    location: 'Karachi'
  }
];

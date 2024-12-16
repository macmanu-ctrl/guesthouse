import { Room } from '../types/room';

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious room with mountain view and private balcony',
    price: 299,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    amenities: ['King bed', 'Mountain view', 'Private balcony', 'En-suite bathroom']
  },
  {
    id: 2,
    name: 'Garden Room',
    description: 'Cozy room with garden access and natural lighting',
    price: 199,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    amenities: ['Queen bed', 'Garden access', 'Workspace', 'En-suite bathroom']
  },
  {
    id: 3,
    name: 'Family Suite',
    description: 'Perfect for families with separate living area',
    price: 399,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    amenities: ['2 Queen beds', 'Living area', 'Kitchenette', '2 Bathrooms']
  }
];
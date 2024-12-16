import Database from 'better-sqlite3';

const db = new Database('guesthouse.db');

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create rooms table
db.exec(`
  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT NOT NULL,
    maxGuests INTEGER NOT NULL,
    available BOOLEAN DEFAULT true
  )
`);

// Create bookings table
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    roomId INTEGER NOT NULL,
    checkIn TEXT NOT NULL,
    checkOut TEXT NOT NULL,
    guestName TEXT NOT NULL,
    guestEmail TEXT NOT NULL,
    guestPhone TEXT NOT NULL,
    numberOfGuests INTEGER NOT NULL,
    totalPrice REAL NOT NULL,
    status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roomId) REFERENCES rooms (id)
  )
`);

// Insert initial room data
const rooms = [
  {
    name: 'Deluxe Suite',
    description: 'Spacious room with mountain view and private balcony',
    price: 299,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    maxGuests: 2
  },
  {
    name: 'Garden Room',
    description: 'Cozy room with garden access and natural lighting',
    price: 199,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    maxGuests: 2
  },
  {
    name: 'Family Suite',
    description: 'Perfect for families with separate living area',
    price: 399,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    maxGuests: 4
  }
];

const insertRoom = db.prepare(`
  INSERT OR IGNORE INTO rooms (name, description, price, image, maxGuests)
  VALUES (@name, @description, @price, @image, @maxGuests)
`);

rooms.forEach(room => insertRoom.run(room));

console.log('Database setup completed successfully!');
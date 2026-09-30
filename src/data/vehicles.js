const vehicles = [
  {
    id: 1,
    type: "Car",
    brand: "Toyota",
    model: "Innova Crysta",
    variant: "2.4 ZX",
    year: 2021,
    registrationYear: 2021,
    price: 1550000,
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: 42000,
    owners: 1,
    condition: "Excellent",
    color: "White",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Well-maintained Toyota Innova Crysta with excellent condition, comfortable interiors and smooth automatic transmission.",
    seller: {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      phone: "9876543210",
      email: "rajesh@example.com"
    }
  },

  {
    id: 2,
    type: "SUV",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX Petrol",
    year: 2022,
    registrationYear: 2022,
    price: 1400000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 30000,
    owners: 1,
    condition: "Excellent",
    color: "Blue",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Stylish Hyundai Creta in excellent condition with low kilometers and a feature-rich interior.",
    seller: {
      name: "Anil Reddy",
      location: "Bangalore",
      phone: "9876543211",
      email: "anil@example.com"
    }
  },

  {
    id: 3,
    type: "Sedan",
    brand: "Honda",
    model: "City",
    variant: "ZX CVT",
    year: 2023,
    registrationYear: 2023,
    price: 1250000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 18500,
    owners: 1,
    condition: "Like New",
    color: "Red",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Honda City with very low kilometers, clean interiors and excellent overall condition.",
    seller: {
      name: "Suresh Rao",
      location: "Hyderabad",
      phone: "9876543212",
      email: "suresh@example.com"
    }
  },

  {
    id: 4,
    type: "SUV",
    brand: "Tata",
    model: "Nexon",
    variant: "XZ Plus",
    year: 2024,
    registrationYear: 2024,
    price: 1020000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 12000,
    owners: 1,
    condition: "Like New",
    color: "Grey",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Nearly new Tata Nexon with low kilometers and modern safety features.",
    seller: {
      name: "Vikram Singh",
      location: "Hyderabad",
      phone: "9876543213",
      email: "vikram@example.com"
    }
  },

  {
    id: 5,
    type: "Hatchback",
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "ZXI",
    year: 2022,
    registrationYear: 2022,
    price: 710000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 28000,
    owners: 1,
    condition: "Good",
    color: "White",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Bluetooth"
    ],
    description:
      "Reliable Maruti Suzuki Swift with good mileage and well-maintained interiors.",
    seller: {
      name: "Karthik S",
      location: "Chennai",
      phone: "9876543214",
      email: "karthik@example.com"
    }
  },

  {
    id: 6,
    type: "SUV",
    brand: "Mahindra",
    model: "XUV700",
    variant: "AX5 Diesel",
    year: 2021,
    registrationYear: 2021,
    price: 1780000,
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: 35000,
    owners: 1,
    condition: "Excellent",
    color: "Black",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Powerful Mahindra XUV700 with premium features and automatic transmission.",
    seller: {
      name: "Arjun Mehta",
      location: "Bangalore",
      phone: "9876543215",
      email: "arjun@example.com"
    }
  },

  {
    id: 7,
    type: "Car",
    brand: "Toyota",
    model: "Fortuner",
    variant: "4x2 Diesel",
    year: 2020,
    registrationYear: 2020,
    price: 2850000,
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: 52000,
    owners: 2,
    condition: "Good",
    color: "White",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Toyota Fortuner with powerful diesel engine and spacious premium interiors.",
    seller: {
      name: "Amit Shah",
      location: "Mumbai",
      phone: "9876543216",
      email: "amit@example.com"
    }
  },

  {
    id: 8,
    type: "Sedan",
    brand: "Hyundai",
    model: "Verna",
    variant: "SX Turbo",
    year: 2023,
    registrationYear: 2023,
    price: 1180000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 16000,
    owners: 1,
    condition: "Like New",
    color: "Black",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Sporty Hyundai Verna with turbo petrol engine and premium features.",
    seller: {
      name: "Neeraj Joshi",
      location: "Pune",
      phone: "9876543217",
      email: "neeraj@example.com"
    }
  },

  {
    id: 9,
    type: "Hatchback",
    brand: "Tata",
    model: "Altroz",
    variant: "XZ Petrol",
    year: 2022,
    registrationYear: 2022,
    price: 680000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 24000,
    owners: 1,
    condition: "Good",
    color: "Blue",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Safe and practical Tata Altroz with comfortable interiors.",
    seller: {
      name: "Rohit Verma",
      location: "Delhi",
      phone: "9876543218",
      email: "rohit@example.com"
    }
  },

  {
    id: 10,
    type: "Car",
    brand: "Honda",
    model: "Amaze",
    variant: "VX Diesel",
    year: 2021,
    registrationYear: 2021,
    price: 760000,
    fuel: "Diesel",
    transmission: "Manual",
    kilometers: 41000,
    owners: 1,
    condition: "Good",
    color: "Silver",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Bluetooth"
    ],
    description:
      "Comfortable Honda Amaze with efficient diesel engine.",
    seller: {
      name: "Manoj Kumar",
      location: "Chennai",
      phone: "9876543219",
      email: "manoj@example.com"
    }
  },

  {
    id: 11,
    type: "SUV",
    brand: "Kia",
    model: "Seltos",
    variant: "HTX",
    year: 2022,
    registrationYear: 2022,
    price: 1350000,
    fuel: "Diesel",
    transmission: "Automatic",
    kilometers: 27000,
    owners: 1,
    condition: "Excellent",
    color: "Grey",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Premium Kia Seltos with excellent features and comfortable interiors.",
    seller: {
      name: "Ramesh Babu",
      location: "Hyderabad",
      phone: "9876543220",
      email: "ramesh@example.com"
    }
  },

  {
    id: 12,
    type: "Hatchback",
    brand: "Maruti Suzuki",
    model: "Baleno",
    variant: "Alpha",
    year: 2023,
    registrationYear: 2023,
    price: 820000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 14000,
    owners: 1,
    condition: "Like New",
    color: "Red",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Low-kilometer Maruti Baleno with automatic transmission.",
    seller: {
      name: "Sanjay Patil",
      location: "Pune",
      phone: "9876543221",
      email: "sanjay@example.com"
    }
  },

  {
    id: 13,
    type: "Car",
    brand: "Mahindra",
    model: "Thar",
    variant: "LX Diesel",
    year: 2022,
    registrationYear: 2022,
    price: 1550000,
    fuel: "Diesel",
    transmission: "Manual",
    kilometers: 22000,
    owners: 1,
    condition: "Excellent",
    color: "Black",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Bluetooth",
      "Touchscreen"
    ],
    description:
      "Adventure-ready Mahindra Thar with low kilometers.",
    seller: {
      name: "Vivek Singh",
      location: "Delhi",
      phone: "9876543222",
      email: "vivek@example.com"
    }
  },

  {
    id: 14,
    type: "Sedan",
    brand: "Toyota",
    model: "Camry",
    variant: "Hybrid",
    year: 2020,
    registrationYear: 2020,
    price: 2950000,
    fuel: "Hybrid",
    transmission: "Automatic",
    kilometers: 39000,
    owners: 1,
    condition: "Excellent",
    color: "Silver",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Premium Toyota Camry Hybrid with luxurious interiors.",
    seller: {
      name: "Nitin Kapoor",
      location: "Mumbai",
      phone: "9876543223",
      email: "nitin@example.com"
    }
  },

  {
    id: 15,
    type: "SUV",
    brand: "MG",
    model: "Hector",
    variant: "Sharp",
    year: 2021,
    registrationYear: 2021,
    price: 1450000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 33000,
    owners: 1,
    condition: "Good",
    color: "White",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Spacious MG Hector with premium features and comfortable seating.",
    seller: {
      name: "Deepak Rao",
      location: "Bangalore",
      phone: "9876543224",
      email: "deepak@example.com"
    }
  },

  {
    id: 16,
    type: "Bike",
    brand: "Royal Enfield",
    model: "Classic 350",
    variant: "Signals",
    year: 2023,
    registrationYear: 2023,
    price: 185000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 8500,
    owners: 1,
    condition: "Excellent",
    color: "Black",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    features: [
      "ABS",
      "Bluetooth"
    ],
    description:
      "Royal Enfield Classic 350 in excellent condition with very low kilometers.",
    seller: {
      name: "Aditya Rao",
      location: "Hyderabad",
      phone: "9876543225",
      email: "aditya@example.com"
    }
  },

  {
    id: 17,
    type: "Bike",
    brand: "Yamaha",
    model: "MT-15",
    variant: "V2",
    year: 2022,
    registrationYear: 2022,
    price: 145000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 11000,
    owners: 1,
    condition: "Good",
    color: "Blue",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1558980394-0c7b8d6f3e8d?auto=format&fit=crop&w=900&q=80",
    features: [
      "ABS",
      "Bluetooth"
    ],
    description:
      "Sporty Yamaha MT-15 with low kilometers and excellent handling.",
    seller: {
      name: "Harish Kumar",
      location: "Chennai",
      phone: "9876543226",
      email: "harish@example.com"
    }
  },

  {
    id: 18,
    type: "Bike",
    brand: "Honda",
    model: "Activa 6G",
    variant: "Deluxe",
    year: 2023,
    registrationYear: 2023,
    price: 85000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 6500,
    owners: 1,
    condition: "Like New",
    color: "White",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1558980664-10ea7a6d0d9c?auto=format&fit=crop&w=900&q=80",
    features: [
      "Bluetooth"
    ],
    description:
      "Honda Activa 6G in excellent condition with very low usage.",
    seller: {
      name: "Pavan Kumar",
      location: "Hyderabad",
      phone: "9876543227",
      email: "pavan@example.com"
    }
  },

  {
    id: 19,
    type: "Car",
    brand: "Tata",
    model: "Punch",
    variant: "Creative",
    year: 2024,
    registrationYear: 2024,
    price: 890000,
    fuel: "Petrol",
    transmission: "Manual",
    kilometers: 7000,
    owners: 1,
    condition: "Like New",
    color: "Blue",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Rear Camera",
      "Bluetooth"
    ],
    description:
      "Nearly new Tata Punch with very low kilometers.",
    seller: {
      name: "Akash Joshi",
      location: "Pune",
      phone: "9876543228",
      email: "akash@example.com"
    }
  },

  {
    id: 20,
    type: "SUV",
    brand: "Kia",
    model: "Sonet",
    variant: "GTX Plus",
    year: 2023,
    registrationYear: 2023,
    price: 1120000,
    fuel: "Petrol",
    transmission: "Automatic",
    kilometers: 13500,
    owners: 1,
    condition: "Excellent",
    color: "Red",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Power Windows",
      "ABS",
      "Airbags",
      "Parking Sensors",
      "Rear Camera",
      "Bluetooth",
      "Touchscreen",
      "Sunroof"
    ],
    description:
      "Premium Kia Sonet with automatic transmission and excellent features.",
    seller: {
      name: "Varun Malhotra",
      location: "Delhi",
      phone: "9876543229",
      email: "varun@example.com"
    }
  }
];

export default vehicles;
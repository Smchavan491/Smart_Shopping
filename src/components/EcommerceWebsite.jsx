
import React, { useState } from 'react';
import { Search, ShoppingCart, Plus, Minus, X, Sparkles, Star, Filter, Heart, Eye, TrendingUp, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

const EcommerceWebsite = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewedProducts, setViewedProducts] = useState([]);
  const [currentUser] = useState({ name: 'Alex Smith', location: 'New York, NY', preferences: ['electronics', 'fitness'] });

  // Comprehensive product database
  const productDatabase = {
    'birthday party': [
      { id: 1, name: 'Premium Birthday Cake Candles (50 pack)', price: 12.99, originalPrice: 16.99, image: '🕯️', rating: 4.8, reviews: 324, category: 'Party Supplies', brand: 'PartyPro', inStock: true, trending: true, discount: 24 },
      { id: 2, name: 'Helium Quality Balloon Bouquet', price: 18.99, image: '🎈', rating: 4.6, reviews: 156, category: 'Decorations', brand: 'BalloonMaster', inStock: true, trending: false, discount: 0 },
      { id: 3, name: 'Deluxe Party Hat Collection (12 pack)', price: 14.99, image: '🎉', rating: 4.5, reviews: 89, category: 'Party Supplies', brand: 'FestiveWear', inStock: true, trending: true, discount: 0 },
      { id: 4, name: 'Biodegradable Party Tableware Set', price: 22.99, originalPrice: 28.99, image: '🥤', rating: 4.7, reviews: 203, category: 'Tableware', brand: 'EcoParty', inStock: true, trending: false, discount: 21 },
      { id: 5, name: 'LED Light-Up Birthday Banner', price: 24.99, image: '🎊', rating: 4.9, reviews: 412, category: 'Decorations', brand: 'LightShow', inStock: true, trending: true, discount: 0 },
      { id: 6, name: 'Luxury Gift Wrap Collection', price: 19.99, image: '🎁', rating: 4.3, reviews: 78, category: 'Gift Supplies', brand: 'WrapArt', inStock: true, trending: false, discount: 0 },
      { id: 7, name: 'Photo Booth Props Kit (30 pieces)', price: 16.99, image: '📸', rating: 4.6, reviews: 267, category: 'Entertainment', brand: 'PhotoFun', inStock: true, trending: true, discount: 0 },
      { id: 8, name: 'Confetti Cannon Set (6 pack)', price: 13.99, image: '🎆', rating: 4.4, reviews: 145, category: 'Party Supplies', brand: 'BoomTime', inStock: false, trending: false, discount: 0 }
    ],
    'trip': [
      { id: 9, name: 'UV Protection Safari Hat', price: 32.99, originalPrice: 42.99, image: '👒', rating: 4.8, reviews: 892, category: 'Clothing', brand: 'SunGuard', inStock: true, trending: true, discount: 23 },
      { id: 10, name: 'Microfiber Quick-Dry Travel Towel', price: 24.99, image: '🏖️', rating: 4.7, reviews: 543, category: 'Travel Gear', brand: 'TravelPro', inStock: true, trending: false, discount: 0 },
      { id: 11, name: 'Reef-Safe SPF 50+ Sunscreen', price: 18.99, image: '🧴', rating: 4.9, reviews: 1205, category: 'Health & Beauty', brand: 'OceanSafe', inStock: true, trending: true, discount: 0 },
      { id: 12, name: 'Insulated Travel Water Bottle 32oz', price: 29.99, image: '💧', rating: 4.6, reviews: 678, category: 'Travel Gear', brand: 'HydroMax', inStock: true, trending: false, discount: 0 },
      { id: 13, name: 'Anti-Theft Travel Backpack 45L', price: 89.99, originalPrice: 119.99, image: '🎒', rating: 4.5, reviews: 456, category: 'Luggage', brand: 'SecurePack', inStock: true, trending: true, discount: 25 },
      { id: 14, name: 'Solar Power Bank 20000mAh', price: 39.99, image: '🔋', rating: 4.4, reviews: 234, category: 'Electronics', brand: 'SolarTech', inStock: true, trending: false, discount: 0 },
      { id: 15, name: 'Travel First Aid Kit Complete', price: 26.99, image: '🩹', rating: 4.8, reviews: 189, category: 'Health & Safety', brand: 'MediTravel', inStock: true, trending: false, discount: 0 },
      { id: 16, name: 'Waterproof Phone Case Universal', price: 12.99, image: '📱', rating: 4.3, reviews: 567, category: 'Electronics', brand: 'AquaShield', inStock: true, trending: true, discount: 0 }
    ],
    'cooking': [
      { id: 17, name: 'Professional Non-Stick Pan Set', price: 79.99, originalPrice: 99.99, image: '🍳', rating: 4.8, reviews: 1024, category: 'Cookware', brand: 'ChefMaster', inStock: true, trending: true, discount: 20 },
      { id: 18, name: 'German Steel Chef Knife Set', price: 149.99, image: '🔪', rating: 4.9, reviews: 789, category: 'Cutlery', brand: 'BladeForge', inStock: true, trending: false, discount: 0 },
      { id: 19, name: 'Stainless Steel Mixing Bowl Set', price: 34.99, image: '🥣', rating: 4.6, reviews: 345, category: 'Bakeware', brand: 'KitchenPro', inStock: true, trending: false, discount: 0 },
      { id: 20, name: 'Extra Virgin Olive Oil 500ml', price: 22.99, image: '🫒', rating: 4.5, reviews: 234, category: 'Ingredients', brand: 'MediterraneanGold', inStock: true, trending: false, discount: 0 },
      { id: 21, name: 'Organic Spice Collection (25 spices)', price: 68.99, originalPrice: 89.99, image: '🌶️', rating: 4.8, reviews: 567, category: 'Seasonings', brand: 'SpiceWorld', inStock: true, trending: true, discount: 23 },
      { id: 22, name: 'Smart Digital Kitchen Scale', price: 45.99, image: '⚖️', rating: 4.7, reviews: 456, category: 'Tools', brand: 'PrecisionWeigh', inStock: true, trending: true, discount: 0 },
      { id: 23, name: 'Silicone Cooking Utensil Set', price: 24.99, image: '🥄', rating: 4.4, reviews: 289, category: 'Tools', brand: 'FlexiCook', inStock: true, trending: false, discount: 0 },
      { id: 24, name: 'Cast Iron Dutch Oven 6Qt', price: 89.99, image: '🍲', rating: 4.9, reviews: 678, category: 'Cookware', brand: 'IronChef', inStock: true, trending: false, discount: 0 }
    ],
    'workout': [
      { id: 25, name: 'Premium Yoga Mat with Alignment', price: 49.99, originalPrice: 69.99, image: '🧘', rating: 4.8, reviews: 1456, category: 'Exercise Equipment', brand: 'ZenFit', inStock: true, trending: true, discount: 29 },
      { id: 26, name: 'Resistance Bands Pro Set (5 levels)', price: 32.99, image: '💪', rating: 4.7, reviews: 892, category: 'Fitness Accessories', brand: 'PowerFlex', inStock: true, trending: false, discount: 0 },
      { id: 27, name: 'Protein Shaker with Mixer Ball', price: 16.99, image: '🥤', rating: 4.6, reviews: 567, category: 'Hydration', brand: 'MixMaster', inStock: true, trending: false, discount: 0 },
      { id: 28, name: 'Noise-Cancelling Workout Earbuds', price: 119.99, originalPrice: 159.99, image: '🎧', rating: 4.5, reviews: 1234, category: 'Audio', brand: 'SoundFit', inStock: true, trending: true, discount: 25 },
      { id: 29, name: 'Antibacterial Gym Towel Set', price: 18.99, image: '🏃', rating: 4.4, reviews: 234, category: 'Accessories', brand: 'CleanSweat', inStock: true, trending: false, discount: 0 },
      { id: 30, name: 'Adjustable Dumbbells 5-50lbs', price: 299.99, image: '🏋️', rating: 4.9, reviews: 456, category: 'Weights', brand: 'FlexWeight', inStock: true, trending: true, discount: 0 },
      { id: 31, name: 'Foam Roller for Recovery', price: 29.99, image: '🔄', rating: 4.7, reviews: 389, category: 'Recovery', brand: 'RecoverPro', inStock: true, trending: false, discount: 0 },
      { id: 32, name: 'Heart Rate Monitor Chest Strap', price: 59.99, image: '❤️', rating: 4.6, reviews: 278, category: 'Monitoring', brand: 'CardioTrack', inStock: true, trending: true, discount: 0 }
    ],
    'study': [
      { id: 33, name: 'LED Desk Lamp with Wireless Charging', price: 79.99, originalPrice: 99.99, image: '💡', rating: 4.8, reviews: 567, category: 'Lighting', brand: 'StudyBright', inStock: true, trending: true, discount: 20 },
      { id: 34, name: 'Eco-Friendly Notebook Set (10 pack)', price: 24.99, image: '📓', rating: 4.6, reviews: 234, category: 'Stationery', brand: 'GreenWrite', inStock: true, trending: false, discount: 0 },
      { id: 35, name: 'Ergonomic Gel Pen Collection', price: 16.99, image: '✒️', rating: 4.5, reviews: 156, category: 'Writing Tools', brand: 'ComfortWrite', inStock: true, trending: false, discount: 0 },
      { id: 36, name: 'Bamboo Desktop Organizer Deluxe', price: 39.99, image: '📚', rating: 4.7, reviews: 345, category: 'Organization', brand: 'ZenDesk', inStock: true, trending: false, discount: 0 },
      { id: 37, name: 'Mechanical Gaming Keyboard & Mouse', price: 129.99, originalPrice: 159.99, image: '🖱️', rating: 4.4, reviews: 789, category: 'Computer Accessories', brand: 'GamePro', inStock: true, trending: true, discount: 19 },
      { id: 38, name: 'Blue Light Glasses Premium', price: 34.99, image: '👓', rating: 4.3, reviews: 267, category: 'Health', brand: 'EyeGuard', inStock: true, trending: true, discount: 0 },
      { id: 39, name: 'Noise-Cancelling Headphones', price: 89.99, image: '🎧', rating: 4.8, reviews: 892, category: 'Audio', brand: 'QuietStudy', inStock: true, trending: false, discount: 0 },
      { id: 40, name: 'Ergonomic Laptop Stand Adjustable', price: 45.99, image: '💻', rating: 4.6, reviews: 456, category: 'Computer Accessories', brand: 'ErgoLift', inStock: true, trending: true, discount: 0 }
    ],
    'gaming': [
      { id: 41, name: 'RGB Gaming Mouse Pro', price: 79.99, image: '🖱️', rating: 4.8, reviews: 1234, category: 'Gaming Accessories', brand: 'GameForce', inStock: true, trending: true, discount: 0 },
      { id: 42, name: 'Mechanical Gaming Keyboard RGB', price: 149.99, originalPrice: 189.99, image: '⌨️', rating: 4.7, reviews: 892, category: 'Gaming Accessories', brand: 'KeyStrike', inStock: true, trending: true, discount: 21 },
      { id: 43, name: 'Gaming Headset 7.1 Surround', price: 99.99, image: '🎧', rating: 4.6, reviews: 678, category: 'Audio', brand: 'SoundGame', inStock: true, trending: false, discount: 0 },
      { id: 44, name: 'Gaming Chair Ergonomic Pro', price: 299.99, image: '🪑', rating: 4.9, reviews: 456, category: 'Furniture', brand: 'ComfortGame', inStock: true, trending: true, discount: 0 }
    ],
    'home decor': [
      { id: 45, name: 'Smart LED Strip Lights 32ft', price: 34.99, image: '💡', rating: 4.7, reviews: 567, category: 'Lighting', brand: 'SmartGlow', inStock: true, trending: true, discount: 0 },
      { id: 46, name: 'Minimalist Wall Art Set', price: 49.99, image: '🖼️', rating: 4.5, reviews: 234, category: 'Wall Decor', brand: 'ModernArt', inStock: true, trending: false, discount: 0 },
      { id: 47, name: 'Aromatherapy Essential Oil Diffuser', price: 39.99, originalPrice: 54.99, image: '🌸', rating: 4.8, reviews: 789, category: 'Wellness', brand: 'ZenAroma', inStock: true, trending: true, discount: 27 },
      { id: 48, name: 'Decorative Throw Pillow Set', price: 29.99, image: '🛋️', rating: 4.4, reviews: 345, category: 'Textiles', brand: 'CozyHome', inStock: true, trending: false, discount: 0 }
    ]
  };

  // Advanced AI matching with multiple keywords and synonyms
  const findRelevantProducts = (userPrompt) => {
    const prompt = userPrompt.toLowerCase();
    let matchedProducts = [];
    let confidence = 0;

    const categoryMappings = {
      'birthday party': {
        keywords: ['birthday', 'party', 'celebration', 'anniversary', 'festive', 'cake', 'candle'],
        products: productDatabase['birthday party']
      },
      'trip': {
        keywords: ['trip', 'travel', 'vacation', 'beach', 'holiday', 'journey', 'adventure', 'tour'],
        products: productDatabase['trip']
      },
      'cooking': {
        keywords: ['cook', 'kitchen', 'recipe', 'meal', 'food', 'chef', 'bake', 'culinary'],
        products: productDatabase['cooking']
      },
      'workout': {
        keywords: ['workout', 'exercise', 'gym', 'fitness', 'training', 'sport', 'health', 'muscle'],
        products: productDatabase['workout']
      },
      'study': {
        keywords: ['study', 'work', 'office', 'school', 'learn', 'desk', 'productivity', 'education'],
        products: productDatabase['study']
      },
      'gaming': {
        keywords: ['gaming', 'game', 'play', 'console', 'pc', 'esports', 'stream'],
        products: productDatabase['gaming']
      },
      'home decor': {
        keywords: ['home', 'decor', 'decoration', 'interior', 'design', 'room', 'house', 'furniture'],
        products: productDatabase['home decor']
      }
    };

    // Find best matching category
    let bestMatch = null;
    let maxMatches = 0;

    Object.entries(categoryMappings).forEach(([category, data]) => {
      const matches = data.keywords.filter(keyword => prompt.includes(keyword)).length;
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = category;
        confidence = Math.min(matches * 20, 100);
      }
    });

    if (bestMatch) {
      matchedProducts = categoryMappings[bestMatch].products;
    } else {
      // Fallback to trending products from multiple categories
      matchedProducts = [
        ...productDatabase['birthday party'].slice(0, 2),
        ...productDatabase['trip'].slice(0, 2),
        ...productDatabase['cooking'].slice(0, 2),
        ...productDatabase['workout'].slice(0, 2)
      ];
      confidence = 50;
    }

    return { products: matchedProducts, confidence, category: bestMatch };
  };

  const handleSearch = () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    // Add to search history
    if (!searchHistory.includes(prompt)) {
      setSearchHistory([prompt, ...searchHistory.slice(0, 4)]);
    }
    
    setTimeout(() => {
      const result = findRelevantProducts(prompt);
      setSuggestedProducts(result.products);
      setIsLoading(false);
    }, 1200);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Analytics simulation
    console.log(`Product added to cart: ${product.name}`);
  };

  const toggleWishlist = (product) => {
    const isWishlisted = wishlist.find(item => item.id === product.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const viewProduct = (product) => {
    if (!viewedProducts.find(p => p.id === product.id)) {
      setViewedProducts([product, ...viewedProducts.slice(0, 9)]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalSavings = () => {
    return cart.reduce((total, item) => {
      const savings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
      return total + savings;
    }, 0).toFixed(2);
  };

  const filteredProducts = suggestedProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'reviews': return b.reviews - a.reviews;
      case 'trending': return b.trending ? 1 : -1;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-indigo-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SmartShop AI</h1>
                <p className="text-xs text-gray-500">Powered by Advanced ML</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{currentUser.location}</span>
              </div>
              
              <button
                onClick={() => setShowCart(true)}
                className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* AI Prompt Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              AI Shopping Assistant
            </h2>
            <p className="text-gray-600 text-lg">Describe what you need and watch AI magic happen!</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="e.g., I'm planning a birthday party for kids, going on a beach vacation, starting a home gym..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white px-10 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Search className="w-6 h-6" />
              <span>{isLoading ? 'AI Thinking...' : 'Get Smart Suggestions'}</span>
            </button>
          </div>

          {/* Enhanced Example prompts */}
          <div className="mt-8">
            <p className="text-center text-gray-500 mb-4">Try these popular searches:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                '🎂 Kids birthday party', 
                '🏖️ Beach vacation essentials', 
                '👨‍🍳 Learn to cook Italian', 
                '💪 Home gym setup',
                '📚 Study from home',
                '🎮 Gaming setup upgrade',
                '🏠 Modern home decor'
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => setPrompt(example.split(' ').slice(1).join(' '))}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-700 rounded-full transition-all border border-gray-200 hover:border-indigo-200 text-sm font-medium"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Recent searches:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(search)}
                    className="px-3 py-1 bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-full text-sm border border-gray-200 hover:border-indigo-200 transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Loading State with Better Animation */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-2 bg-indigo-50 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-indigo-600 animate-pulse" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI is analyzing your request...</h3>
            <p className="text-gray-600">Finding the perfect products just for you</p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        )}

        {/* Filters and Controls */}
        {suggestedProducts.length > 0 && !isLoading && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>{filteredProducts.length} products found</span>
              </div>
            </div>

            {/* Advanced Filters Panel */}
            {showFilters && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="all">All Categories</option>
                      <option value="party supplies">Party Supplies</option>
                      <option value="travel gear">Travel Gear</option>
                      <option value="cookware">Cookware</option>
                      <option value="fitness">Fitness</option>
                      <option value="electronics">Electronics</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">In Stock</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Show All</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Product Suggestions with Enhanced Design */}
        {sortedProducts.length > 0 && !isLoading && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Perfect Matches For You</h3>
                <p className="text-gray-600">AI-curated selection based on your needs</p>
              </div>
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-medium">AI Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 bg-white relative overflow-hidden">
                  {/* Product Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.trending && (
                      <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        -{product.discount}%
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                      wishlist.find(item => item.id === product.id)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist.find(item => item.id === product.id) ? 'fill-current' : ''}`} />
                  </button>

                  <div className="text-center mt-8 mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
                      {product.category}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">{product.brand}</p>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-indigo-600">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <p className="text-sm text-green-600 font-medium">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium ${
                        product.inStock
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                    
                    <button
                      onClick={() => viewProduct(product)}
                      className="w-full py-2 px-4 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 rounded-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {viewedProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-gray-600" />
              Recently Viewed
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {viewedProducts.slice(0, 6).map((product) => (
                <div key={product.id} className="flex-shrink-0 w-32 text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="text-2xl mb-1">{product.image}</div>
                  <p className="text-xs text-gray-600 truncate">{product.name}</p>
                  <p className="text-sm font-semibold text-indigo-600">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Enhanced Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[85vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Shopping Cart</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {getTotalItems()} items • ${getTotalPrice()} total
                  </p>
                </div>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h4>
                  <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                        <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-indigo-600 font-bold">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                    <span className="font-semibold">${getTotalPrice()}</span>
                  </div>
                  {parseFloat(getTotalSavings()) > 0 && (
                    <div className="flex items-center justify-between text-green-600">
                      <span>Total Savings</span>
                      <span className="font-semibold">-${getTotalSavings()}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-indigo-600">${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
                  Proceed to Checkout
                </button>
                
                <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Free Returns</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EcommerceWebsite;
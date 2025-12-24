```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduShare Hub - High School Biology Resources for Teachers</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'edu-blue': '#1e3a8a',
                        'edu-green': '#059669',
                        'edu-orange': '#ea580c'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-microscope text-edu-blue text-2xl"></i>
                    <h1 class="text-2xl font-bold text-edu-blue">EduShare Hub</h1>
                </div>
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#resources" class="text-gray-700 hover:text-edu-blue transition">Browse Resources</a>
                    <a href="#pricing" class="text-gray-700 hover:text-edu-blue transition">Pricing</a>
                    <a href="#sellers" class="text-gray-700 hover:text-edu-blue transition">Become a Seller</a>
                    <button class="bg-edu-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">Sign In</button>
                    <button class="bg-edu-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Sign Up</button>
                </div>
                <button class="md:hidden text-gray-700" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                <div class="flex flex-col space-y-4">
                    <a href="#resources" class="text-gray-700 hover:text-edu-blue transition">Browse Resources</a>
                    <a href="#pricing" class="text-gray-700 hover:text-edu-blue transition">Pricing</a>
                    <a href="#sellers" class="text-gray-700 hover:text-edu-blue transition">Become a Seller</a>
                    <button class="bg-edu-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-left">Sign In</button>
                    <button class="bg-edu-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-left">Sign Up</button>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-edu-blue to-blue-600 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl md:text-6xl font-bold mb-6">High School Biology Resources Made by Teachers, for Teachers</h2>
                <p class="text-xl md:text-2xl mb-8 opacity-90">Premium lab activities, lesson plans, and assessment tools created by experienced biology educators</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-edu-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
                        <i class="fas fa-search mr-2"></i>Browse Resources
                    </button>
                    <button class="bg-white text-edu-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                        <i class="fas fa-upload mr-2"></i>Start Selling
                    </button>
                </div>
                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-3xl font-bold">200+</div>
                        <div class="text-lg opacity-90">Quality Resources</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold">150+</div>
                        <div class="text-lg opacity-90">Teacher Contributors</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold">$3-8</div>
                        <div class="text-lg opacity-90">Per Resource</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-col md:flex-row gap-4 items-center">
                    <div class="flex-1">
                        <input type="text" placeholder="Search biology resources..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue">
                    </div>
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue">
                        <option>All Topics</option>
                        <option>Cell Biology</option>
                        <option>Genetics</option>
                        <option>Ecology</option>
                        <option>Human Biology</option>
                        <option>Evolution</option>
                    </select>
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue">
                        <option>All Types</option>
                        <option>Lab Activities</option>
                        <option>Lesson Plans</option>
                        <option>Assessments</option>
                        <option>PowerPoints</option>
                        <option>Worksheets</option>
                    </select>
                    <button class="bg-edu-blue text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Resources -->
    <section id="resources" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">Featured Biology Resources</h3>
                <p class="text-xl text-gray-600">Hand-picked premium content from our top educators</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Resource Card 1 -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-edu-blue text-white px-3 py-1 rounded-full text-sm">Lab Activity</span>
                        <span class="text-edu-green font-bold text-lg">$5.99</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">DNA Extraction Lab</h4>
                    <p class="text-gray-600 text-sm mb-4">Complete lab guide with student worksheets and teacher notes for strawberry DNA extraction</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="text-gray-500 text-sm ml-2">(24 reviews)</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 text-sm">By Ms. Johnson</span>
                        <button class="bg-edu-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            <i class="fas fa-cart-plus mr-1"></i>Add to Cart
                        </button>
                    </div>
                </div>

                <!-- Resource Card 2 -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-edu-orange text-white px-3 py-1 rounded-full text-sm">PowerPoint</span>
                        <span class="text-edu-green font-bold text-lg">$4.50</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">Photosynthesis & Respiration</h4>
                    <p class="text-gray-600 text-sm mb-4">Interactive presentation with animations and embedded videos covering cellular processes</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="text-gray-500 text-sm ml-2">(18 reviews)</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 text-sm">By Mr. Davis</span>
                        <button class="bg-edu-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            <i class="fas fa-cart-plus mr-1"></i>Add to Cart
                        </button>
                    </div>
                </div>

                <!-- Resource Card 3 -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Assessment</span>
                        <span class="text-edu-green font-bold text-lg">$3.99</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">Genetics Unit Test</h4>
                    <p class="text-gray-600 text-sm mb-4">Comprehensive test with multiple choice, short answer, and problem-solving questions</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <span class="text-gray-500 text-sm ml-2">(31 reviews)</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 text-sm">By Dr. Rodriguez</span>
                        <button class="bg-edu-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            <i class="fas fa-cart-plus mr-1"></i>Add to Cart
                        </button>
                    </div>
                </div>

                <!-- Resource Card 4 -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Lesson Plan</span>
                        <span class="text-edu-green font-bold text-lg">$6.99</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">Ecosystem Food Webs</h4>
                    <p class="text-gray-600 text-sm mb-4">5-day lesson sequence with activities, handouts, and differentiated materials</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="text-gray-500 text-sm ml-2">(15 reviews)</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500 text-sm">By Ms. Chen</span>
                        <button class="bg-edu-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            <i class="fas fa-cart-plus mr-1"></i>Add to Cart
                        </button>
                    </div>
                </div>

                <!-- Resource Card 5 -->
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="bg-edu-blue text-white px-3 py-1 rounded-full text-sm">Lab Activity</span>
                        <span class="text-edu-green font-bold text-lg">$7.50</span>
                    </div>
                    <h4 class="font-bold text-lg mb-2">Enzyme Activity Lab</h4>
                    <p class="text-gray-600 text-sm mb-4">Catalase investigation with data analysis and graphing components</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="text-gray-500 text-sm ml-2">(29 reviews)</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-
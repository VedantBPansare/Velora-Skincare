const products = [
    // =========================
    // CLEANSERS
    // =========================

    {
        id: 1,
        name: "Gentle Daily Cleanser",
        category: "Cleansers",
        price: 499,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900",
        description:
            "A gentle everyday cleanser that removes daily buildup while leaving the skin feeling fresh and comfortable.",
        ingredients:
            "Aloe Vera, Glycerin, Green Tea Extract",
        benefits:
            "Gentle cleansing, refreshing feel, everyday use",
        howToUse:
            "Massage onto damp skin for 30 seconds and rinse thoroughly.",
        rating: 4.7,
        size: "100 ml"
    },

    {
        id: 2,
        name: "Creamy Barrier Cleanser",
        category: "Cleansers",
        price: 549,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900",
        description:
            "A creamy facial cleanser designed for a comfortable cleansing experience without leaving the skin feeling tight.",
        ingredients:
            "Ceramides, Oat Extract, Glycerin",
        benefits:
            "Comforting cleanse, moisture support, soft finish",
        howToUse:
            "Apply to damp skin, gently massage, and rinse with water.",
        rating: 4.8,
        size: "120 ml"
    },

    {
        id: 3,
        name: "Fresh Gel Face Wash",
        category: "Cleansers",
        price: 449,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900",
        description:
            "A lightweight gel cleanser created for a fresh and clean feeling as part of a simple daily routine.",
        ingredients:
            "Cucumber Extract, Panthenol, Glycerin",
        benefits:
            "Fresh feel, lightweight formula, daily cleansing",
        howToUse:
            "Apply a small amount to wet skin and rinse gently.",
        rating: 4.6,
        size: "100 ml"
    },

    // =========================
    // SERUMS
    // =========================

    {
        id: 4,
        name: "Hydrating Face Serum",
        category: "Serums",
        price: 699,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900",
        description:
            "A lightweight hydration-focused serum created to add a fresh and comfortable feel to everyday skincare.",
        ingredients:
            "Hyaluronic Acid, Aloe Vera, Panthenol",
        benefits:
            "Hydration, smooth feel, lightweight finish",
        howToUse:
            "Apply 2–3 drops to clean skin before moisturizer.",
        rating: 4.9,
        size: "30 ml"
    },

    {
        id: 5,
        name: "Daily Glow Serum",
        category: "Serums",
        price: 749,
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900",
        description:
            "A brightening-inspired daily serum that adds a fresh-looking finish to your skincare routine.",
        ingredients:
            "Vitamin C, Licorice Extract, Vitamin E",
        benefits:
            "Fresh-looking skin, lightweight hydration, glow",
        howToUse:
            "Apply a few drops after cleansing and before moisturizer.",
        rating: 4.8,
        size: "30 ml"
    },

    {
        id: 6,
        name: "Calm Skin Serum",
        category: "Serums",
        price: 779,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900",
        description:
            "A soothing serum designed to complement simple routines with a lightweight and comfortable feel.",
        ingredients:
            "Centella Extract, Panthenol, Green Tea",
        benefits:
            "Soothing feel, lightweight texture, daily care",
        howToUse:
            "Apply 2–3 drops to clean skin and gently press into the face.",
        rating: 4.7,
        size: "30 ml"
    },

    // =========================
    // MOISTURIZERS
    // =========================

    {
        id: 7,
        name: "Daily Glow Moisturizer",
        category: "Moisturizers",
        price: 599,
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=900",
        description:
            "A soft everyday moisturizer that helps keep the skin feeling hydrated and comfortable throughout the day.",
        ingredients:
            "Shea Butter, Squalane, Vitamin E",
        benefits:
            "Daily hydration, soft feel, smooth finish",
        howToUse:
            "Apply a small amount after serum and gently massage into skin.",
        rating: 4.8,
        size: "50 ml"
    },

    {
        id: 8,
        name: "Velvet Hydration Cream",
        category: "Moisturizers",
        price: 649,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900",
        description:
            "A richer moisturizer with a smooth texture for a comfortable and nourishing skincare step.",
        ingredients:
            "Squalane, Oat Extract, Shea Butter",
        benefits:
            "Nourishing feel, hydration support, smooth texture",
        howToUse:
            "Use after cleansing and serum, morning or evening.",
        rating: 4.7,
        size: "50 ml"
    },

    {
        id: 9,
        name: "Lightweight Water Cream",
        category: "Moisturizers",
        price: 629,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4abbd6f?w=900",
        description:
            "A lightweight water-cream texture made for a fresh finish and easy everyday layering.",
        ingredients:
            "Aloe Vera, Hyaluronic Acid, Cucumber Extract",
        benefits:
            "Lightweight hydration, fresh finish, easy layering",
        howToUse:
            "Apply evenly after serum and allow the product to absorb.",
        rating: 4.8,
        size: "50 ml"
    },

    // =========================
    // FACE CARE
    // =========================

    {
        id: 10,
        name: "Botanical Face Mist",
        category: "Face Care",
        price: 399,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900",
        description:
            "A refreshing facial mist designed to add a quick burst of freshness to your everyday routine.",
        ingredients:
            "Rose Water, Aloe Vera, Green Tea",
        benefits:
            "Refreshing feel, lightweight mist, easy to use",
        howToUse:
            "Mist lightly over the face whenever your skin needs a fresh feel.",
        rating: 4.6,
        size: "100 ml"
    },

    {
        id: 11,
        name: "Daily Face Essence",
        category: "Face Care",
        price: 579,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900",
        description:
            "A lightweight essence that adds a comfortable hydration step between cleansing and moisturizing.",
        ingredients:
            "Rice Extract, Panthenol, Green Tea",
        benefits:
            "Light hydration, smooth feel, easy layering",
        howToUse:
            "Apply a few drops with your hands after cleansing.",
        rating: 4.7,
        size: "100 ml"
    },

    {
        id: 12,
        name: "Overnight Recovery Mask",
        category: "Face Care",
        price: 799,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4abbd6f?w=900",
        description:
            "A comforting overnight face mask created as an occasional addition to a simple evening skincare routine.",
        ingredients:
            "Aloe Vera, Squalane, Oat Extract",
        benefits:
            "Comforting feel, overnight moisture, soft finish",
        howToUse:
            "Apply a thin layer as the final evening skincare step.",
        rating: 4.8,
        size: "75 ml"
    },

    // =========================
    // BODY CARE
    // =========================

    {
        id: 13,
        name: "Gentle Body Lotion",
        category: "Body Care",
        price: 549,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900",
        description:
            "A daily body lotion with a smooth texture for comfortable everyday moisturization.",
        ingredients:
            "Shea Butter, Glycerin, Oat Extract",
        benefits:
            "Daily moisture, smooth feel, easy application",
        howToUse:
            "Massage onto clean skin, especially after bathing.",
        rating: 4.7,
        size: "200 ml"
    },

    {
        id: 14,
        name: "Silk Body Cream",
        category: "Body Care",
        price: 649,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900",
        description:
            "A richer body cream designed to leave the skin feeling soft, comfortable, and cared for.",
        ingredients:
            "Cocoa Butter, Squalane, Vitamin E",
        benefits:
            "Rich moisture, soft texture, nourishing feel",
        howToUse:
            "Apply generously and massage until absorbed.",
        rating: 4.8,
        size: "200 ml"
    },

    {
        id: 15,
        name: "Nourishing Hand Cream",
        category: "Body Care",
        price: 349,
        image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=900",
        description:
            "A compact hand cream designed for everyday comfort and easy carry.",
        ingredients:
            "Shea Butter, Glycerin, Vitamin E",
        benefits:
            "Soft feel, daily care, quick application",
        howToUse:
            "Apply whenever hands feel dry and massage gently.",
        rating: 4.6,
        size: "60 ml"
    },

    // =========================
    // LIP CARE
    // =========================

    {
        id: 16,
        name: "Lip Care Balm",
        category: "Lip Care",
        price: 299,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900",
        description:
            "A simple nourishing lip balm designed for comfortable everyday lip care.",
        ingredients:
            "Shea Butter, Cocoa Butter, Vitamin E",
        benefits:
            "Comforting moisture, smooth feel, everyday use",
        howToUse:
            "Apply directly to the lips whenever needed.",
        rating: 4.7,
        size: "10 g"
    },

    {
        id: 17,
        name: "Soft Tint Lip Balm",
        category: "Lip Care",
        price: 329,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900",
        description:
            "A soft tinted balm combining everyday lip care with a subtle natural-looking finish.",
        ingredients:
            "Jojoba Oil, Shea Butter, Vitamin E",
        benefits:
            "Moisturizing feel, soft tint, easy application",
        howToUse:
            "Swipe directly onto lips and reapply as needed.",
        rating: 4.6,
        size: "10 g"
    },

    {
        id: 18,
        name: "Overnight Lip Mask",
        category: "Lip Care",
        price: 449,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900",
        description:
            "A rich overnight lip treatment created for a comforting evening care ritual.",
        ingredients:
            "Coconut Oil, Shea Butter, Squalane",
        benefits:
            "Rich moisture, overnight care, soft feel",
        howToUse:
            "Apply a generous layer before bedtime.",
        rating: 4.8,
        size: "15 g"
    },

    // =========================
    // SETS
    // =========================

    {
        id: 19,
        name: "Daily Skin Essentials Set",
        category: "Sets",
        price: 1199,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=900",
        description:
            "A curated everyday collection combining cleansing, hydration, and moisturizing essentials.",
        ingredients:
            "Cleanser, Serum, Moisturizer",
        benefits:
            "Simple routine, curated essentials, everyday care",
        howToUse:
            "Use the products in sequence as part of your regular routine.",
        rating: 4.9,
        size: "3 Products"
    },

    {
        id: 20,
        name: "Complete Self-Care Set",
        category: "Sets",
        price: 1499,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900",
        description:
            "A broader collection of skincare and body-care essentials designed for a complete self-care routine.",
        ingredients:
            "Cleanser, Serum, Moisturizer, Body Lotion, Lip Balm",
        benefits:
            "Complete routine, multiple essentials, gift-ready collection",
        howToUse:
            "Build your routine by using each product according to its purpose.",
        rating: 4.9,
        size: "5 Products"
    }
];

export default products;
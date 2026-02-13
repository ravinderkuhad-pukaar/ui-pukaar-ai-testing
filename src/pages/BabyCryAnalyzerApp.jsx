<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baby Cry Analyzer App | Pukaar.ai</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#9333EA'
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20">
        <div class="absolute inset-0 bg-gradient-to-b from-purple-200/60 via-purple-100/40 to-white">
            <div class="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-purple-300/40 to-transparent"></div>
            <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-300/40 to-transparent"></div>
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-8 md:p-12">
                    <div class="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md overflow-hidden">
                        <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a1 1 0 112 0v4a1 1 0 11-2 0v-4zm1-5a1 1 0 100 2 1 1 0 000-2z"/>
                        </svg>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-bold text-[#292929] mb-4">
                        Baby Cry Analyzer App
                    </h1>
                    <p class="text-[#666666] text-base md:text-lg">
                        A smarter way to respond to your baby's cries—powered by AI, built with pediatric input, and designed for real parents.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Hero Image Section -->
    <section class="py-8 md:py-12">
        <div class="container mx-auto px-6">
            <div class="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="Baby_Cry_Analyzer_App_for_Parents.jpg"
                    alt="Baby Cry Analyzer App Interface"
                    class="w-full h-auto object-cover"
                />
            </div>
        </div>
    </section>

    <!-- Key Benefits Section -->
    <section class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-32">
            <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-10 text-center">
                Why Parents Love This App
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-[#292929] mb-3">
                        Understand Cries Faster
                    </h3>
                    <p class="text-[#666666]">
                        Get AI-backed patterns and explanations so you can quickly identify whether your baby might be hungry, sleepy, or uncomfortable.
                    </p>
                </div>
                <div class="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-[#292929] mb-3">
                        Feel More Confident
                    </h3>
                    <p class="text-[#666666]">
                        Reduce guesswork with structured suggestions and checklists, instead of endlessly searching through conflicting advice online.
                    </p>
                </div>
                <div class="bg-[#F9F9F9] rounded-2xl p-6 md:p-8">
                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-[#292929] mb-3">
                        Built with Experts
                    </h3>
                    <p class="text-[#666666]">
                        Designed with doctors, product experts, and real parents so technology always supports, not replaces, your instincts.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-12 md:py-16 bg-[#F9F9F9]">
        <div class="container mx-auto px-6 md:px-32">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                        How the Baby Cry Analyzer App Works
                    </h2>
                    <p class="text-[#666666] mb-4">
                        The Pukaar.ai baby cry analyzer app uses advanced AI technology to help you understand what your baby might be trying to communicate through their cries.
                    </p>
                    <p class="text-[#666666] mb-4">
                        Simply record your baby's cry using the app, and within seconds, you'll receive insights about possible reasons—whether they're hungry, tired, uncomfortable, or need a diaper change.
                    </p>
                    <p class="text-[#666666]">
                        The app learns from patterns over time, helping you build confidence in understanding your baby's unique communication style.
                    </p>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="image_88.jpg"
                        alt="Mother using baby cry analyzer app"
                        class="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-32">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="image_96.jpg"
                        alt="India's first baby cry analyzer app"
                        class="w-full h-auto object-cover"
                    />
                </div>
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-6">
                        India's First AI-Powered Baby Cry Analyzer
                    </h2>
                    <p class="text-[#666666] mb-6">
                        Pukaar.ai brings cutting-edge AI technology to Indian parents, making baby care easier and more informed.
                    </p>
                    <div class="space-y-4">
                        <div class="flex gap-3 items-start">
                            <span class="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                            <p class="text-[#666666]"><strong>Real-time Analysis:</strong> Get instant insights about your baby's cries</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                            <p class="text-[#666666]"><strong>Doctor-Reviewed:</strong> All guidance backed by pediatric expertise</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                            <p class="text-[#666666]"><strong>Pattern Tracking:</strong> Understand your baby's unique communication patterns</p>
                        </div>
                        <div class="flex gap-3 items-start">
                            <span class="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                            <p class="text-[#666666]"><strong>Easy to Use:</strong> Simple interface designed for busy parents</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- What Makes It Different Section -->
    <section class="py-12 md:py-16 bg-[#F9F9F9]">
        <div class="container mx-auto px-6 md:px-32">
            <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                What Makes Pukaar.ai Different
            </h2>
            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-[#292929] mb-3">
                            🎯 Accurate AI Analysis
                        </h3>
                        <p class="text-[#666666]">
                            Our AI model is trained on thousands of baby cry samples, ensuring accurate pattern recognition and helpful insights.
                        </p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-[#292929] mb-3">
                            👨‍⚕️ Pediatric Guidance
                        </h3>
                        <p class="text-[#666666]">
                            Every suggestion is reviewed by qualified pediatricians to ensure safety and accuracy.
                        </p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-[#292929] mb-3">
                            📱 User-Friendly Design
                        </h3>
                        <p class="text-[#666666]">
                            Simple, intuitive interface that works even when you're sleep-deprived and stressed.
                        </p>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-[#292929] mb-3">
                            🔒 Privacy First
                        </h3>
                        <p class="text-[#666666]">
                            Your baby's data is encrypted and secure. We never share personal information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How Parents Use It Section -->
    <section class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-32">
            <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center">
                How Parents Use the App Daily
            </h2>
            <div class="max-w-3xl mx-auto space-y-6">
                <div class="bg-white border border-gray-200 rounded-xl p-6">
                    <div class="flex gap-4 items-start">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            1
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-[#292929] mb-2">Record the Cry</h3>
                            <p class="text-[#666666]">When your baby cries, open the app and tap the record button. The app needs just a few seconds of audio.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6">
                    <div class="flex gap-4 items-start">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            2
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-[#292929] mb-2">Get Instant Analysis</h3>
                            <p class="text-[#666666]">Our AI analyzes the cry pattern and provides possible reasons—hunger, tiredness, discomfort, or need for comfort.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6">
                    <div class="flex gap-4 items-start">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            3
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-[#292929] mb-2">Follow Suggestions</h3>
                            <p class="text-[#666666]">Get actionable next steps and tips from pediatricians on how to respond to your baby's needs.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-6">
                    <div class="flex gap-4 items-start">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                            4
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-[#292929] mb-2">Track Patterns</h3>
                            <p class="text-[#666666]">Over time, the app learns your baby's unique patterns and provides even more personalized insights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-[#292929] mb-4">
                    Ready to Understand Your Baby Better?
                </h2>
                <p class="text-[#666666] text-lg mb-8">
                    Download the Pukaar.ai baby cry analyzer app and join thousands of parents making baby care easier and more informed.
                </p>
                <button class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
                    Download Pukaar.ai App
                </button>
            </div>
        </div>
    </section>

    <footer class="py-8 bg-gray-50 text-center text-gray-600 text-sm">
        <p>© 2026 Pukaar.ai - Baby Cry Analyzer App</p>
    </footer>
</body>
</html>

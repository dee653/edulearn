/* ============================================
   MASTER JAVASCRIPT - EduLearn
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==========================================
    // 1. NAVIGATION & HAMBURGER
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================
    // 2. BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 3. HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 4. TESTIMONIAL SLIDER
    // ==========================================
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (prevBtn && nextBtn && testimonials.length) {
        prevBtn.addEventListener('click', prevTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);

        // Auto-slide
        let slideInterval = setInterval(nextTestimonial, 5000);

        // Pause on hover
        const slider = document.querySelector('.testimonials-slider');
        slider?.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider?.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextTestimonial, 5000);
        });
    }

    // ==========================================
    // 5. COURSE DATA & RENDERING
    // ==========================================
    const coursesData = [
        {
            id: 1,
            title: 'Full Stack Web Development (MERN + Next.js)',
            category: 'web',
            description: 'Comprehensive industry bootcamp: HTML5, CSS3, modern JavaScript, React 19, Node.js, Express, and MongoDB with AWS deployment.',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
            price: '₹3,499',
            originalPrice: '₹7,999',
            rating: 4.9,
            students: 2840,
            batch: 'Next Cohort: Starts 5th Dec',
            duration: '16 Weeks • 120 hrs',
            projects: '8 Projects'
        },
        {
            id: 2,
            title: 'Data Science & Applied Machine Learning',
            category: 'data',
            description: 'Hands-on curriculum: Python, Pandas, NumPy, Scikit-learn, TensorFlow, SQL databases, and end-to-end predictive modeling.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
            price: '₹4,999',
            originalPrice: '₹9,999',
            rating: 4.9,
            students: 1950,
            batch: 'Weekend Batch: 12th Dec',
            duration: '20 Weeks • 140 hrs',
            projects: '10 Case Studies'
        },
        {
            id: 3,
            title: 'UI/UX & Product Design Masterclass',
            category: 'design',
            description: 'Design systems, interactive prototypes in Figma, usability testing, mobile-first design, and building an interview-ready portfolio.',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
            price: '₹2,499',
            originalPrice: '₹5,499',
            rating: 4.8,
            students: 1420,
            batch: 'Starts 8th Dec',
            duration: '12 Weeks • 80 hrs',
            projects: '6 Case Studies'
        },
        {
            id: 4,
            title: 'Growth Marketing & Performance Analytics',
            category: 'marketing',
            description: 'CAC optimization, Meta & Google Ad campaigns, programmatic SEO, CRM lifecycle marketing, and Google Analytics 4 mastery.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
            price: '₹1,999',
            originalPrice: '₹4,499',
            rating: 4.7,
            students: 1180,
            batch: 'Starts 10th Dec',
            duration: '10 Weeks • 60 hrs',
            projects: '5 Live Audits'
        },
        {
            id: 5,
            title: 'Advanced JavaScript & TypeScript Architecture',
            category: 'web',
            description: 'Deep dive into event loop internals, TypeScript generics, state management patterns, WebSockets, and scalable frontend testing.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            price: '₹1,499',
            originalPrice: '₹3,499',
            rating: 4.9,
            students: 1670,
            batch: 'Weekend Batch',
            duration: '8 Weeks • 50 hrs',
            projects: '4 Production Apps'
        },
        {
            id: 6,
            title: 'Python for Developers & Automation',
            category: 'data',
            description: 'Structured programming from basics to object-oriented architecture, web scraping, REST APIs, and automated task scripting.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
            price: '₹999',
            originalPrice: '₹2,499',
            rating: 4.8,
            students: 4320,
            batch: 'Self-Paced + Doubt Sessions',
            duration: '6 Weeks • 40 hrs',
            projects: '6 Projects'
        }
    ];

    // Render courses function
    function renderCourses(courses, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (!courses || courses.length === 0) {
            container.innerHTML = '<p class="no-results">No courses found. Try adjusting your search.</p>';
            return;
        }

        container.innerHTML = courses.map(course => `
            <div class="course-card" data-category="${course.category}">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}" loading="lazy" />
                    <span class="course-badge">${course.rating} ★ (${course.students})</span>
                </div>
                <div class="course-body">
                    <span class="batch-pill"><i class="fas fa-calendar-check"></i> ${course.batch}</span>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                        <span><i class="fas fa-code-branch"></i> ${course.projects}</span>
                    </div>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-footer">
                        <div class="course-price">
                            ${course.price} <span>${course.originalPrice}</span>
                        </div>
                        <a href="contact.html" class="btn btn-primary btn-sm">Enroll Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render popular courses on home page
    const popularContainer = document.getElementById('popularCourses');
    if (popularContainer) {
        renderCourses(coursesData.slice(0, 3), 'popularCourses');
    }

    // Render all courses on courses page
    const allCoursesContainer = document.getElementById('allCourses');
    if (allCoursesContainer) {
        renderCourses(coursesData, 'allCourses');

        // ==========================================
        // 6. COURSE FILTERING
        // ==========================================
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('courseSearch');
        const searchBtn = document.getElementById('searchBtn');

        function filterCourses(filter, searchTerm = '') {
            let filtered = coursesData;

            if (filter !== 'all') {
                filtered = filtered.filter(course => course.category === filter);
            }

            if (searchTerm.trim()) {
                const term = searchTerm.toLowerCase().trim();
                filtered = filtered.filter(course => 
                    course.title.toLowerCase().includes(term) ||
                    course.description.toLowerCase().includes(term)
                );
            }

            renderCourses(filtered, 'allCourses');
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                const searchTerm = searchInput?.value || '';
                filterCourses(filter, searchTerm);
            });
        });

        function handleSearch() {
            const searchTerm = searchInput?.value || '';
            const activeFilter = document.querySelector('.filter-btn.active');
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
            filterCourses(filter, searchTerm);
        }

        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') handleSearch();
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }
    }

    // ==========================================
    // 7. TEAM DATA & RENDERING
    // ==========================================
    const teamData = [
        {
            name: 'Arjun Nambiar',
            role: 'Lead Architect & Engineering Mentor (Ex-Razorpay & Grab)',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        {
            name: 'Dr. Priyanka Deshmukh',
            role: 'Head of Data Science & AI (Ph.D. IISc Bengaluru)',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        {
            name: 'Rohan Verma',
            role: 'Director of Product Experience (Former Design Lead @ Swiggy)',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#', github: '#' }
        },
        {
            name: 'Kavita Raman',
            role: 'Growth Marketing & Analytics Strategist (Ex-Flipkart)',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#', github: '#' }
        }
    ];

    function renderTeam(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = teamData.map(member => `
            <div class="team-card">
                <img src="${member.image}" alt="${member.name}" loading="lazy" />
                <h4>${member.name}</h4>
                <span>${member.role}</span>
                <div class="team-social">
                    <a href="${member.social.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${member.social.twitter}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="${member.social.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                </div>
            </div>
        `).join('');
    }

    renderTeam('teamGrid');

    // ==========================================
    // 8. BLOG DATA & RENDERING
    // ==========================================
    const blogData = [
        {
            id: 1,
            title: 'How to Crack SDE-1 Frontend Interviews in Indian Tech Hubs',
            excerpt: 'A practical roadmap for machine coding rounds, DOM performance optimization, and system design expectations at top product startups.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
            date: 'Nov 14, 2026',
            author: 'Arjun Nambiar',
            category: 'Web Engineering'
        },
        {
            id: 2,
            title: 'Production MLOps: Moving Models from Jupyter to Scalable APIs',
            excerpt: 'Understanding Dockerized model packaging, FastAPI deployment, Prometheus monitoring, and data drift detection.',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
            date: 'Nov 08, 2026',
            author: 'Dr. Priyanka Deshmukh',
            category: 'AI & Data Science'
        },
        {
            id: 3,
            title: 'Building Design Systems for High-Growth Consumer Apps',
            excerpt: 'How we build scalable Figma token architectures, accessible vernacular UI components, and fluid micro-interactions.',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
            date: 'Oct 29, 2026',
            author: 'Rohan Verma',
            category: 'UI/UX Design'
        },
        {
            id: 4,
            title: 'Growth Marketing Playbook: Lowering CAC with Attribution Models',
            excerpt: 'A deep dive into first-party data tracking, conversion rate audits, and performance creative testing across channels.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
            date: 'Oct 20, 2026',
            author: 'Kavita Raman',
            category: 'Growth Marketing'
        },
        {
            id: 5,
            title: 'Deep Dive: Event Loop Internals and Browser Thread Optimization',
            excerpt: 'Mastering microtasks, requestAnimationFrame, and background web workers to keep 60fps responsiveness in JavaScript apps.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            date: 'Oct 12, 2026',
            author: 'Arjun Nambiar',
            category: 'Web Engineering'
        },
        {
            id: 6,
            title: 'SQL for High-Impact Data Analytics: 5 Real Startup Case Studies',
            excerpt: 'Master recursive CTEs, retention cohort funnels, and rolling window aggregations on PostgreSQL and Snowflake.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
            date: 'Sep 30, 2026',
            author: 'Dr. Priyanka Deshmukh',
            category: 'Data Science'
        }
    ];

    let blogCount = 3; // Initially show 3 posts

    function renderBlog(count) {
        const container = document.getElementById('blogGrid');
        if (!container) return;

        const posts = blogData.slice(0, count);
        container.innerHTML = posts.map(post => `
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}" loading="lazy" />
                <div class="blog-card-body">
                    <div class="blog-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="fas fa-user"></i> ${post.author}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `).join('');
    }

    renderBlog(blogCount);

    // Load more blog posts
    const loadMoreBtn = document.getElementById('loadMoreBlog');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            blogCount = Math.min(blogCount + 3, blogData.length);
            renderBlog(blogCount);
            if (blogCount >= blogData.length) {
                this.style.display = 'none';
            }
        });
    }

    // ==========================================
    // 9. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const contactFeedback = document.getElementById('contactFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('fullName')?.value.trim();
            const email = document.getElementById('emailAddress')?.value.trim();
            const subject = document.getElementById('subjectLine')?.value.trim();
            const message = document.getElementById('messageContent')?.value.trim();

            // Simple validation
            if (!name || !email || !subject || !message) {
                showFeedback(contactFeedback, 'Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(contactFeedback, 'Please enter a valid email address.', 'error');
                return;
            }

            // Simulate sending
            showFeedback(contactFeedback, 'Thank you! Your message has been sent successfully.', 'success');
            this.reset();

            // Clear feedback after 5 seconds
            setTimeout(() => {
                contactFeedback.style.display = 'none';
                contactFeedback.className = 'form-feedback';
            }, 5000);
        });
    }

    // ==========================================
    // 10. AUTH FORMS (Login/Signup)
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginFeedback = document.getElementById('loginFeedback');
    const signupFeedback = document.getElementById('signupFeedback');

    // Tab switching
    const authTabs = document.querySelectorAll('.auth-tab');
    if (authTabs.length) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                authTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const tabName = this.getAttribute('data-tab');
                document.querySelectorAll('.auth-form').forEach(form => {
                    form.classList.remove('active');
                });
                document.getElementById(tabName + 'Form')?.classList.add('active');
            });
        });
    }

    // Switch between login and signup
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.auth-tab[data-tab="signup"]')?.click();
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.auth-tab[data-tab="login"]')?.click();
        });
    }

    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail')?.value.trim();
            const password = document.getElementById('loginPassword')?.value.trim();

            if (!email || !password) {
                showFeedback(loginFeedback, 'Please enter both email and password.', 'error');
                return;
            }

            // Simulate login (store in localStorage)
            localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }));
            showFeedback(loginFeedback, 'Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // Signup form
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName')?.value.trim();
            const email = document.getElementById('signupEmail')?.value.trim();
            const password = document.getElementById('signupPassword')?.value;
            const confirm = document.getElementById('signupConfirm')?.value;

            if (!name || !email || !password || !confirm) {
                showFeedback(signupFeedback, 'Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(signupFeedback, 'Please enter a valid email address.', 'error');
                return;
            }

            if (password.length < 6) {
                showFeedback(signupFeedback, 'Password must be at least 6 characters.', 'error');
                return;
            }

            if (password !== confirm) {
                showFeedback(signupFeedback, 'Passwords do not match.', 'error');
                return;
            }

            // Simulate signup
            localStorage.setItem('user', JSON.stringify({ name, email, loggedIn: true }));
            showFeedback(signupFeedback, 'Account created successfully! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // ==========================================
    // 11. TOGGLE PASSWORD VISIBILITY
    // ==========================================
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (input) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            }
        });
    });

    // ==========================================
    // 12. NEWSLETTER FORM
    // ==========================================
    const newsletterForms = document.querySelectorAll('#newsletterForm');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value.trim()) {
                alert('Thank you for subscribing to our newsletter!');
                input.value = '';
            }
        });
    });

    // ==========================================
    // 13. UTILITY FUNCTIONS
    // ==========================================
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFeedback(element, message, type) {
        if (!element) return;
        element.textContent = message;
        element.className = 'form-feedback ' + type;
        element.style.display = 'block';
    }

    // ==========================================
    // 14. SCROLL ANIMATION (Intersection Observer)
    // ==========================================
    if ('IntersectionObserver' in window) {
        const animateElements = document.querySelectorAll('[data-aos]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // ==========================================
    // 15. CHECK LOGIN STATUS
    // ==========================================
    const userData = JSON.parse(localStorage.getItem('user'));
    const navMenuAuth = document.querySelector('.nav-menu');
    if (userData && userData.loggedIn) {
        // Add a logout option if logged in
        const loginLink = document.querySelector('.btn-nav');
        if (loginLink && loginLink.textContent.trim() === 'Login') {
            loginLink.textContent = 'Logout';
            loginLink.href = '#';
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('user');
                window.location.reload();
            });
        }
    }

    console.log('EduLearn Website Loaded Successfully! 🚀');
});
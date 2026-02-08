# Arthasya Communications Website - Project Structure

```
arthasya-website/
│
├── src/
│   ├── App.jsx                          # Main app component with routing
│   ├── index.jsx                        # Entry point
│   ├── index.css                        # Tailwind imports
│   │
│   ├── components/                      # Reusable components
│   │   │
│   │   ├── common/                      # Common components used across pages
│   │   │   ├── Navbar.jsx              # Fixed navigation bar
│   │   │   ├── Footer.jsx              # Multi-column footer
│   │   │   ├── BackToTop.jsx           # Back to top button
│   │   │   ├── Button.jsx              # Reusable button component
│   │   │   ├── SectionHeading.jsx      # Consistent section headings
│   │   │   ├── LoadingSpinner.jsx      # Loading state component
│   │   │   └── MobileMenu.jsx          # Mobile hamburger menu
│   │   │
│   │   ├── sections/                    # Page-specific sections
│   │   │   │
│   │   │   ├── home/                    # Home page sections
│   │   │   │   ├── HomeHero.jsx
│   │   │   │   ├── HomeAbout.jsx
│   │   │   │   ├── HomeServices.jsx
│   │   │   │   ├── HomeClients.jsx
│   │   │   │   ├── HomePartners.jsx
│   │   │   │   └── HomeWhyUs.jsx
│   │   │   │
│   │   │   ├── about/                   # About page sections
│   │   │   │   ├── AboutHero.jsx
│   │   │   │   ├── AboutKnowUs.jsx
│   │   │   │   └── AboutTeam.jsx
│   │   │   │
│   │   │   ├── services/                # Services page sections
│   │   │   │   ├── ServicesHero.jsx
│   │   │   │   ├── ServicesContent.jsx
│   │   │   │   └── ServicesCTA.jsx
│   │   │   │
│   │   │   ├── careers/                 # Careers page sections
│   │   │   │   ├── CareersHero.jsx
│   │   │   │   └── CareersForm.jsx
│   │   │   │
│   │   │   ├── freelancer/              # Freelancer page sections
│   │   │   │   ├── FreelancerHero.jsx
│   │   │   │   └── FreelancerForm.jsx
│   │   │   │
│   │   │   └── contact/                 # Contact page sections
│   │   │       ├── ContactHero.jsx
│   │   │       ├── ContactInfo.jsx
│   │   │       └── ContactForm.jsx
│   │   │
│   │   ├── cards/                       # Reusable card components
│   │   │   ├── ServiceCard.jsx         # Service item card
│   │   │   ├── StatCard.jsx            # Statistics card
│   │   │   ├── PartnerCard.jsx         # Partner card
│   │   │   ├── ClientLogo.jsx          # Client logo component
│   │   │   └── InfoCard.jsx            # General info card
│   │   │
│   │   ├── forms/                       # Form components
│   │   │   ├── FormInput.jsx           # Text input field
│   │   │   ├── FormTextarea.jsx        # Textarea field
│   │   │   ├── FormSelect.jsx          # Select dropdown
│   │   │   ├── FormFileUpload.jsx      # File upload field
│   │   │   └── FormButton.jsx          # Submit button
│   │   │
│   │   ├── layout/                      # Layout components
│   │   │   ├── TwoColumnLayout.jsx     # Two-column layout wrapper
│   │   │   ├── Container.jsx           # Content container wrapper
│   │   │   └── PageWrapper.jsx         # Page-level wrapper with transitions
│   │   │
│   │   └── ui/                          # UI utility components
│   │       ├── Carousel.jsx            # Carousel/slider component
│   │       ├── Modal.jsx               # Modal dialog
│   │       └── AnimatedSection.jsx     # Scroll-based animation wrapper
│   │
│   ├── pages/                           # Page components
│   │   ├── Home.jsx                    # Home page
│   │   ├── About.jsx                   # About page
│   │   ├── Services.jsx                # Services page
│   │   ├── Careers.jsx                 # Careers page
│   │   ├── Freelancer.jsx              # Freelancer page
│   │   └── Contact.jsx                 # Contact page
│   │
│   ├── hooks/                           # Custom React hooks
│   │   ├── useScrollAnimation.js       # Scroll-based animation hook
│   │   ├── useInView.js                # Intersection observer hook
│   │   ├── useFormValidation.js        # Form validation hook
│   │   └── useMobileMenu.js            # Mobile menu state hook
│   │
│   ├── utils/                           # Utility functions
│   │   ├── animations.js               # Framer Motion animation variants
│   │   ├── constants.js                # App constants (colors, breakpoints)
│   │   └── helpers.js                  # Helper functions
│   │
│   ├── data/                            # Static data/content
│   │   ├── services.js                 # Services data
│   │   ├── clients.js                  # Client logos data
│   │   ├── partners.js                 # Partners data
│   │   ├── stats.js                    # Statistics data
│   │   └── navigation.js               # Navigation menu items
│   │
│   └── styles/                          # Additional styles if needed
│       └── custom.css                  # Custom CSS beyond Tailwind
│
├── .gitignore
├── package.json
├── tailwind.config.js                   # Tailwind configuration
├── postcss.config.js                    # PostCSS configuration
└── README.md

```

## Component Hierarchy Overview

### Common Components (Used Across All Pages)
- **Navbar**: Fixed navigation with mobile menu
- **Footer**: Multi-column footer with back-to-top
- **Button**: Reusable CTA buttons
- **SectionHeading**: Consistent section titles
- **Container**: Content width wrapper
- **PageWrapper**: Page transitions

### Form Components (Reusable)
- **FormInput**: Text fields with validation
- **FormTextarea**: Message/description fields
- **FormSelect**: Dropdown selections
- **FormFileUpload**: Resume/portfolio upload
- **FormButton**: Submit buttons

### Card Components (Reusable)
- **ServiceCard**: Service items
- **StatCard**: Statistics display
- **PartnerCard**: Partner information
- **ClientLogo**: Client brand logos
- **InfoCard**: General content cards

### Layout Components
- **TwoColumnLayout**: Reusable 2-col grid
- **Container**: Max-width wrapper
- **PageWrapper**: Framer Motion page transitions

### UI Components
- **Carousel**: Services/partners slider
- **AnimatedSection**: Scroll animations
- **Modal**: Popup dialogs

## Key Architecture Decisions

1. **Modular Structure**: Each page section is its own component
2. **Reusability**: Common patterns extracted into shared components
3. **Data-Driven**: Content stored in data files for easy updates
4. **Animation Layer**: Centralized animation variants
5. **Custom Hooks**: Shared logic extracted into hooks
6. **Type Safety Ready**: Structure supports TypeScript migration
7. **Scalability**: Easy to add new pages/sections

## Component Naming Convention

- **Page components**: PascalCase (Home.jsx)
- **Section components**: PageNameSection.jsx (HomeHero.jsx)
- **Common components**: PascalCase (Navbar.jsx)
- **Hooks**: camelCase with 'use' prefix (useScrollAnimation.js)
- **Utils**: camelCase (animations.js)
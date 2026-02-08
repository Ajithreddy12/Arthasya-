import { useNavigate } from 'react-router-dom';
import { PageWrapper, Container, AnimatedSection } from '../components/layout';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-ivory to-white py-20">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative mb-8">
                <h1 className="text-[150px] md:text-[200px] font-bold text-sage-light/30 leading-none select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse">
                    <svg 
                      className="w-16 h-16 md:w-20 md:h-20 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Page Not Found
              </h2>
              
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Oops! The page you're looking for seems to have wandered off. 
                Let's get you back on track.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 min-w-[160px]"
                >
                  Go Back
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 min-w-[160px]"
                >
                  Go to Home
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-16 pt-8 border-t border-sage/30">
                <p className="text-sm text-charcoal/60 mb-4">
                  Or explore these pages:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Services', path: '/services' },
                    { name: 'Careers', path: '/careers' },
                    { name: 'Contact', path: '/contact' },
                  ].map((link) => (
                    <button
                      key={link.path}
                      onClick={() => navigate(link.path)}
                      className="px-4 py-2 text-sm bg-ivory hover:bg-sage-light/30 text-charcoal rounded-lg transition-colors duration-300 hover:text-primary"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/10 blur-2xl -z-10" />
              <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10" />
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageWrapper>
  );
};

export default NotFound;
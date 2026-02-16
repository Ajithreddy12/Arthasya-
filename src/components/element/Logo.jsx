import logoImg from '../../logo/logo.jpeg';

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center group ${className} select-none`}>
            <div className="relative flex items-center justify-center p-0">
                <img
                    src={logoImg}
                    alt="BingeWatch Logo"
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 mix-blend-screen"
                />
            </div>
        </div>
    );
};

export default Logo;

import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10" id="contact">
            <div className="container">
                <p className="text-lg">Want to collaborate or have questions?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="leading-none text-muted-foreground hover:text-white">
                    © 2025 UNTRUSTED — All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="d-flex bg-dark text-white">
            <div className="container p-4 pb-0 ">
                <section className="">
                    <a className="btn btn-outline-light btn-floating m-1" target={'_blank'} href="http://facebook.com" role="button">
                        <FaFacebook className="mb-1" />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" target={'_blank'} href="http://instagram.com" role="button">
                        <FaInstagram className="mb-1" />
                    </a>
                </section>
            </div>

            <div className="text-center p-4">
                © {new Date().getFullYear()} Getion De Stagiaire
            </div>
        </footer>
  );

}
export default Footer;
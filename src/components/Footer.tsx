function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl flex gap-4 m-auto justify-center align-baseline">
       
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex gap-3">
            <li>
            <a
              href="https://www.linkedin.com/in/itsamanyadav18"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
              >
               Linkedin
</a>
            </li>
            <li>
              <a
                href="mailto:itsamanyadav18@gmail.com"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Its-Aman-Yadav"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/its_aman_yadav"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@itsamanyadav"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-10">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Noida, India</p>
          <p>Email: itsamanyadav18@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

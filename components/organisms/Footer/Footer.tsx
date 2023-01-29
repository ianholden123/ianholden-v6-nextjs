export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-6 lg:px-8 flex justify-between bg-gray-100">
      <span>&copy; Ian Holden {currentYear}</span>
      <span>Socials</span>
    </footer>
  );
};

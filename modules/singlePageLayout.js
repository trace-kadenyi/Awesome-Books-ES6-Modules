const handleSinglePageNavigation = () => {
  const navItems = Array.from(document.querySelectorAll('.navItem'));
  const ListSection = document.querySelector('#ListSection');
  const AddNewSection = document.querySelector('#AddNewSection');
  const ContactSection = document.querySelector('#ContactSection');
  navItems.forEach((index) => {
    index.addEventListener('click', () => {
      switch (index.classList[1]) {
        case 'list':
          ListSection.classList.add('active');
          ListSection.classList.remove('close');
          AddNewSection.classList.add('close');
          ContactSection.classList.add('close');
          break;
        case 'AddNew':
          ListSection.classList.remove('active');
          ListSection.classList.add('close');
          AddNewSection.classList.add('active');
          AddNewSection.classList.remove('close');
          break;
        case 'contact':
          ListSection.classList.add('close');
          AddNewSection.classList.remove('active');
          AddNewSection.classList.add('close');
          ContactSection.classList.add('active');
          ContactSection.classList.remove('close');
          break;
        default:
      }
    });
  });
};

export default handleSinglePageNavigation;
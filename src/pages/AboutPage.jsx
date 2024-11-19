import React, { useEffect, useState } from 'react';

function AboutPage() {
  const [pageTitle, setPageTitle] = useState('About');

  // Modifier le titre de la page (document.title)
  useEffect(() => {
    document.title = pageTitle + ' | Marvel App';
  }, [pageTitle]);

  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a team of Marvel fans who love to create awesome apps!
      </p>
    </div>
  );
}

export default AboutPage;

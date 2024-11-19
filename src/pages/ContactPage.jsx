import React, { useEffect, useState } from 'react';

function ContactPage() {
  const [pageTitle, setPageTitle] = useState('Contactez-nous');

  // Modifier le titre de la page (document.title)
  useEffect(() => {
    document.title = pageTitle + ' | Marvel App';
  }, [pageTitle]);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
       Feel free to contact us at{' '}
        <a href="mailto:marvelapp@gmail.com">contact@example.com</a>
      </p>
    </div>
  );
}

export default ContactPage;

import React from 'react';
import '../page/screen/Home.scss';

function Main({children, className}) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

export default Main;
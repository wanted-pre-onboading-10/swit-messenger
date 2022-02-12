import { useState, useEffect } from 'react';

import ContactsSearchResult from 'components/sidebar/contacts/search-result';
import ContactsSearchInput from 'components/sidebar/contacts/search-input';

function Contacts() {
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(
    () => () => {
      setFilterTerm('');
    },
    [],
  );

  return (
    <div>
      <ContactsSearchInput
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
      />
      <ContactsSearchResult filterTerm={filterTerm} />
    </div>
  );
}

export default Contacts;

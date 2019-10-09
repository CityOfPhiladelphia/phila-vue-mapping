// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

import { faDotCircle } from '@fortawesome/free-regular-svg-icons/faDotCircle';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
library.add(faSearch, faTimes, faMapMarkerAlt, faDotCircle, faCaretLeft, faCaretRight);

export default library;

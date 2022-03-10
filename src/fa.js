// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

import { faDotCircle } from '@fortawesome/free-regular-svg-icons/faDotCircle';
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
library.add(faMagnifyingGlass, faTimes, faXmark, faLocationDot, faDotCircle, faCaretLeft, faCaretRight, faCaretDown, faCaretUp, faExternalLinkAlt);

export default library;

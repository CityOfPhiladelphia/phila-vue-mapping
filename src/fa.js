// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

import { faCircleDot } from '@fortawesome/free-regular-svg-icons/faCircleDot';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
library.add(faMagnifyingGlass, faXmark, faLocationDot, faCircleDot, faCaretLeft, faCaretRight, faCaretDown, faCaretUp, faArrowUpRightFromSquare);

export default library;

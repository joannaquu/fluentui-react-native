export const presenceIconPaths = {
  available: `<path d="M8.86133 16C13.2796 16 16.8613 12.4183 16.8613 8C16.8613 3.58172 13.2796 0 8.86133 0C4.44305 0 0.861328 3.58172 0.861328 8C0.861328 12.4183 4.44305 16 8.86133 16ZM12.5682 6.70739L8.56494 10.7074C8.37728 10.8949 8.1228 11.0002 7.85752 11C7.59223 10.9998 7.33788 10.8943 7.15045 10.7065L5.15365 8.70654C4.76344 8.3157 4.76395 7.68254 5.15479 7.29233C5.54563 6.90212 6.17879 6.90262 6.569 7.29346L7.85898 8.58551L11.1545 5.29261C11.5452 4.90224 12.1784 4.9025 12.5688 5.29318C12.9591 5.68386 12.9589 6.31703 12.5682 6.70739Z" fill="#13A10E"/>`,
  away: `<path d="M8.86133 16C13.2796 16 16.8613 12.4183 16.8613 8C16.8613 3.58172 13.2796 0 8.86133 0C4.44305 0 0.861328 3.58172 0.861328 8C0.861328 12.4183 4.44305 16 8.86133 16ZM9.36133 4.5V7.51937L11.486 9.21913C11.9173 9.56414 11.9872 10.1934 11.6422 10.6247C11.2972 11.056 10.6679 11.1259 10.2366 10.7809L7.73663 8.78087C7.49942 8.5911 7.36133 8.30378 7.36133 8V4.5C7.36133 3.94772 7.80904 3.5 8.36133 3.5C8.91361 3.5 9.36133 3.94772 9.36133 4.5Z" fill="#EAA300"/>`,
  busy: `<path d="M16.8613 8C16.8613 12.4183 13.2796 16 8.86133 16C4.44305 16 0.861328 12.4183 0.861328 8C0.861328 3.58172 4.44305 0 8.86133 0C13.2796 0 16.8613 3.58172 16.8613 8Z" fill="#D13438"/>`,
  busyOutOfOffice: `<path d="M8.86133 2C5.54762 2 2.86133 4.68629 2.86133 8C2.86133 11.3137 5.54762 14 8.86133 14C12.175 14 14.8613 11.3137 14.8613 8C14.8613 4.68629 12.175 2 8.86133 2ZM0.861328 8C0.861328 3.58172 4.44305 0 8.86133 0C13.2796 0 16.8613 3.58172 16.8613 8C16.8613 12.4183 13.2796 16 8.86133 16C4.44305 16 0.861328 12.4183 0.861328 8Z" fill="#D13438"/>`,
  doNotDisturb: `<path d="M8.86133 16C13.2796 16 16.8613 12.4183 16.8613 8C16.8613 3.58172 13.2796 0 8.86133 0C4.44305 0 0.861328 3.58172 0.861328 8C0.861328 12.4183 4.44305 16 8.86133 16ZM6.11035 7H11.6113C12.1636 7 12.6113 7.44772 12.6113 8C12.6113 8.55229 12.1636 9 11.6113 9H6.11035C5.55807 9 5.11035 8.55229 5.11035 8C5.11035 7.44772 5.55807 7 6.11035 7Z" fill="#D13438"/>`,
  offline: `<path d="M11.5684 5.29289C11.959 5.68342 11.959 6.31658 11.5684 6.70711L10.2755 8L11.5684 9.29289C11.959 9.68342 11.959 10.3166 11.5684 10.7071C11.1779 11.0976 10.5447 11.0976 10.1542 10.7071L8.86133 9.41421L7.56843 10.7071C7.17791 11.0976 6.54475 11.0976 6.15422 10.7071C5.7637 10.3166 5.7637 9.68342 6.15422 9.29289L7.44711 8L6.15422 6.70711C5.7637 6.31658 5.7637 5.68342 6.15422 5.29289C6.54475 4.90237 7.17791 4.90237 7.56843 5.29289L8.86133 6.58579L10.1542 5.29289C10.5447 4.90237 11.1779 4.90237 11.5684 5.29289ZM0.861328 8C0.861328 3.58172 4.44305 0 8.86133 0C13.2796 0 16.8613 3.58172 16.8613 8C16.8613 12.4183 13.2796 16 8.86133 16C4.44305 16 0.861328 12.4183 0.861328 8ZM8.86133 2C5.54762 2 2.86133 4.68629 2.86133 8C2.86133 11.3137 5.54762 14 8.86133 14C12.175 14 14.8613 11.3137 14.8613 8C14.8613 4.68629 12.175 2 8.86133 2Z" fill="#616161"/>`,
  outOfOffice: `<path d="M9.06842 6.20736C9.45895 5.81684 9.45896 5.18368 9.06845 4.79315C8.67793 4.40262 8.04476 4.40261 7.65423 4.79313L5.15423 7.29304C4.96669 7.48058 4.86133 7.73493 4.86133 8.00015C4.86133 8.26537 4.96668 8.51973 5.15422 8.70727L7.65422 11.2073C8.04475 11.5978 8.67791 11.5978 9.06843 11.2073C9.45896 10.8167 9.45896 10.1836 9.06843 9.79305L8.27554 9.00016H11.8613C12.4136 9.00016 12.8613 8.55244 12.8613 8.00016C12.8613 7.44788 12.4136 7.00016 11.8613 7.00016H8.2756L9.06842 6.20736ZM8.86133 0C4.44305 0 0.861328 3.58172 0.861328 8C0.861328 12.4183 4.44305 16 8.86133 16C13.2796 16 16.8613 12.4183 16.8613 8C16.8613 3.58172 13.2796 0 8.86133 0ZM2.86133 8C2.86133 4.68629 5.54762 2 8.86133 2C12.175 2 14.8613 4.68629 14.8613 8C14.8613 11.3137 12.175 14 8.86133 14C5.54762 14 2.86133 11.3137 2.86133 8Z" fill="#C239B3"/>`,
  doNotDisturbOutOfOffice: `<path d="M6.11133 7C5.55904 7 5.11133 7.44772 5.11133 8C5.11133 8.55228 5.55904 9 6.11133 9H11.6113C12.1636 9 12.6113 8.55228 12.6113 8C12.6113 7.44772 12.1636 7 11.6113 7H6.11133ZM0.861328 8C0.861328 3.58172 4.44305 0 8.86133 0C13.2796 0 16.8613 3.58172 16.8613 8C16.8613 12.4183 13.2796 16 8.86133 16C4.44305 16 0.861328 12.4183 0.861328 8ZM8.86133 2C5.54762 2 2.86133 4.68629 2.86133 8C2.86133 11.3137 5.54762 14 8.86133 14C12.175 14 14.8613 11.3137 14.8613 8C14.8613 4.68629 12.175 2 8.86133 2Z" fill="#D13438"/>`,
  availableOutOfOffice: `<path d="M12.5684 6.70711C12.959 6.31658 12.959 5.68342 12.5684 5.29289C12.1779 4.90237 11.5447 4.90237 11.1542 5.29289L7.86133 8.58579L6.56843 7.29289C6.17791 6.90237 5.54475 6.90237 5.15422 7.29289C4.7637 7.68342 4.7637 8.31658 5.15422 8.70711L7.15422 10.7071C7.54475 11.0976 8.17791 11.0976 8.56843 10.7071L12.5684 6.70711ZM0.861328 8C0.861328 3.58172 4.44305 0 8.86133 0C13.2796 0 16.8613 3.58172 16.8613 8C16.8613 12.4183 13.2796 16 8.86133 16C4.44305 16 0.861328 12.4183 0.861328 8ZM8.86133 2C5.54762 2 2.86133 4.68629 2.86133 8C2.86133 11.3137 5.54762 14 8.86133 14C12.175 14 14.8613 11.3137 14.8613 8C14.8613 4.68629 12.175 2 8.86133 2Z" fill="#13A10E"/>`,
};
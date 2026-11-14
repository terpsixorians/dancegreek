const additionalPhotos = [
  [
    {
      "src": "dg02.webp",
      "alt": "1994 - 2004 archive photo 2"
    },
    {
      "src": "dg03.webp",
      "alt": "1994 - 2004 archive photo 3"
    },
    {
      "src": "dg04.webp",
      "alt": "1994 - 2004 archive photo 4"
    },
    {
      "src": "dg05.webp",
      "alt": "1994 - 2004 archive photo 5"
    },
    {
      "src": "dg06.webp",
      "alt": "1994 - 2004 archive photo 6"
    },
    {
      "src": "dg07.webp",
      "alt": "1994 - 2004 archive photo 7"
    },
    {
      "src": "dg08.webp",
      "alt": "1994 - 2004 archive photo 8"
    },
    {
      "src": "dg09.webp",
      "alt": "1994 - 2004 archive photo 9"
    },
    {
      "src": "dg10.webp",
      "alt": "1994 - 2004 archive photo 10"
    },
    {
      "src": "dg11.webp",
      "alt": "1994 - 2004 archive photo 11"
    },
    {
      "src": "dg12.webp",
      "alt": "1994 - 2004 archive photo 12"
    },
    {
      "src": "dg13.webp",
      "alt": "1994 - 2004 archive photo 13"
    },
    {
      "src": "dg14.webp",
      "alt": "1994 - 2004 archive photo 14"
    },
    {
      "src": "dg15.webp",
      "alt": "1994 - 2004 archive photo 15"
    },
    {
      "src": "dg16.webp",
      "alt": "1994 - 2004 archive photo 16"
    },
    {
      "src": "dg17.webp",
      "alt": "1994 - 2004 archive photo 17"
    },
    {
      "src": "dg18.webp",
      "alt": "1994 - 2004 archive photo 18"
    },
    {
      "src": "dg19.webp",
      "alt": "1994 - 2004 archive photo 19"
    },
    {
      "src": "dg20.webp",
      "alt": "1994 - 2004 archive photo 20"
    },
    {
      "src": "dg21.webp",
      "alt": "1994 - 2004 archive photo 21"
    },
    {
      "src": "dg22.webp",
      "alt": "1994 - 2004 archive photo 22"
    },
    {
      "src": "dg23.webp",
      "alt": "1994 - 2004 archive photo 23"
    }
  ],
  [
    {
      "src": "dg25.webp",
      "alt": "2005-2014 archive photo 2"
    },
    {
      "src": "dg26.webp",
      "alt": "2005-2014 archive photo 3"
    },
    {
      "src": "dg27.webp",
      "alt": "2005-2014 archive photo 4"
    },
    {
      "src": "dg28.webp",
      "alt": "2005-2014 archive photo 5"
    },
    {
      "src": "dg29.webp",
      "alt": "2005-2014 archive photo 6"
    },
    {
      "src": "dg30.webp",
      "alt": "2005-2014 archive photo 7"
    },
    {
      "src": "dg31.webp",
      "alt": "2005-2014 archive photo 8"
    }
  ],
  [
    {
      "src": "dg33.webp",
      "alt": "2015- archive photo 2"
    },
    {
      "src": "dg34.webp",
      "alt": "2015- archive photo 3"
    },
    {
      "src": "dg35.webp",
      "alt": "2015- archive photo 4"
    },
    {
      "src": "dg36.webp",
      "alt": "2015- archive photo 5"
    },
    {
      "src": "dg37.webp",
      "alt": "2015- archive photo 6"
    },
    {
      "src": "dg38.webp",
      "alt": "2015- archive photo 7"
    },
    {
      "src": "dg39.webp",
      "alt": "2015- archive photo 8"
    },
    {
      "src": "dg40.webp",
      "alt": "2015- archive photo 9"
    },
    {
      "src": "dg41.webp",
      "alt": "2015- archive photo 10"
    },
    {
      "src": "dg42.webp",
      "alt": "2015- archive photo 11"
    },
    {
      "src": "dg43.webp",
      "alt": "2015- archive photo 12"
    },
    {
      "src": "dg44.webp",
      "alt": "2015- archive photo 13"
    },
    {
      "src": "dg45.webp",
      "alt": "2015- archive photo 14"
    }
  ],
  [
    {
      "src": "dg47.webp",
      "alt": "Misc archive photo 2"
    },
    {
      "src": "dg48.webp",
      "alt": "Misc archive photo 3"
    },
    {
      "src": "dg49.webp",
      "alt": "Misc archive photo 4"
    },
    {
      "src": "dg50.webp",
      "alt": "Misc archive photo 5"
    }
  ],
  [
    {
      "src": "dg52.webp",
      "alt": "Studio Photos archive photo 2"
    },
    {
      "src": "dg53.webp",
      "alt": "Studio Photos archive photo 3"
    },
    {
      "src": "dg54.webp",
      "alt": "Studio Photos archive photo 4"
    },
    {
      "src": "dg55.webp",
      "alt": "Studio Photos archive photo 5"
    }
  ],
  [
    {
      "src": "dg57.webp",
      "alt": "Workshops archive photo 2"
    },
    {
      "src": "dg58.webp",
      "alt": "Workshops archive photo 3"
    },
    {
      "src": "dg59.webp",
      "alt": "Workshops archive photo 4"
    }
  ]
];

const cards = [...document.querySelectorAll('.gallery-card')].map((link, index) => {
  const image = link.querySelector('img');
  const photos = [{ src: link.getAttribute('href'), alt: image.alt }, ...additionalPhotos[index]];
  return { link, image, photos, title: link.querySelector('figcaption').textContent, preview: 0 };
});

const dialog = document.querySelector('.photo-dialog');
const albumPhoto = dialog.querySelector('.album-photo');
const albumTitle = dialog.querySelector('#album-title');
const albumCount = dialog.querySelector('.album-count');
const thumbnails = dialog.querySelector('.album-thumbnails');
const toggle = document.querySelector('.archive-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
let activeAlbum;
let activePhoto = 0;

function showPhoto(index) {
  activePhoto = (index + activeAlbum.photos.length) % activeAlbum.photos.length;
  const photo = activeAlbum.photos[activePhoto];
  albumPhoto.src = photo.src;
  albumPhoto.alt = photo.alt;
  albumCount.textContent = `Photo ${activePhoto + 1} of ${activeAlbum.photos.length}`;
  [...thumbnails.children].forEach((button, position) => {
    button.setAttribute('aria-current', String(position === activePhoto));
  });
}

for (const card of cards) {
  card.link.setAttribute('aria-label', `Open ${card.title} gallery`);
  card.link.setAttribute('aria-haspopup', 'dialog');
  card.link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activeAlbum = card;
    albumTitle.textContent = card.title;
    thumbnails.replaceChildren(...card.photos.map((photo, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show photo ${index + 1}: ${photo.alt}`);
      const image = document.createElement('img');
      image.src = photo.src;
      image.loading = 'lazy';
      image.alt = '';
      button.append(image);
      button.addEventListener('click', () => showPhoto(index));
      return button;
    }));
    showPhoto(card.preview);
    dialog.showModal();
  });
}

dialog.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => showPhoto(activePhoto + Number(button.dataset.step)));
});
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(activePhoto + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

function updateToggle() {
  toggle.textContent = paused ? 'Play previews' : 'Pause previews';
}

toggle.hidden = false;
updateToggle();
toggle.addEventListener('click', () => {
  paused = !paused;
  updateToggle();
});
reducedMotion.addEventListener('change', event => {
  paused = event.matches;
  updateToggle();
});

let nextCard = 0;
setInterval(() => {
  if (paused || dialog.open || document.hidden) return;
  const card = cards[nextCard];
  nextCard = (nextCard + 1) % cards.length;
  card.preview = (card.preview + 1) % card.photos.length;
  const photo = card.photos[card.preview];
  card.image.src = photo.src;
  card.image.alt = photo.alt;
}, 1100);

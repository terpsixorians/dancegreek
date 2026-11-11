const additionalPhotos = [
  [
    {
      "src": "archive-7.webp",
      "alt": "Dancers performing on an outdoor stage"
    },
    {
      "src": "archive-11.webp",
      "alt": "Two dancers performing outdoors"
    }
  ],
  [
    {
      "src": "archive-9.webp",
      "alt": "Dancers performing on a lit stage"
    },
    {
      "src": "archive-24.webp",
      "alt": "A dancer leaping on stage"
    }
  ],
  [
    {
      "src": "archive-0.webp",
      "alt": "Dancers wearing patterned traditional dress"
    },
    {
      "src": "archive-38.webp",
      "alt": "Two dancers in embroidered clothing and headscarves"
    }
  ],
  [
    {
      "src": "archive-35.webp",
      "alt": "A line of dancers holding hands indoors"
    },
    {
      "src": "archive-30.webp",
      "alt": "Dancers moving together across a stage"
    }
  ],
  [
    {
      "src": "archive-45.webp",
      "alt": "The ensemble gathered in traditional dress"
    },
    {
      "src": "archive-70.webp",
      "alt": "A TerpsiXorians group portrait outdoors"
    }
  ],
  [
    {
      "src": "archive-17.webp",
      "alt": "A dancer performing before a seated audience"
    },
    {
      "src": "archive-55.webp",
      "alt": "Dancers performing a lift in a gymnasium"
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

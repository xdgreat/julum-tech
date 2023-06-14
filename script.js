const container = document.getElementById("navigation");
const d = [
  {
    name: "iPhone 12",
    color: "Red",
    description:
      "Sleek design, Super Retina XDR display, A14 Bionic chip, 5G connectivity, advanced dual-camera system.",
    image: "./media/12-red.jfif",
    imageClose: "./media/12-red-close.jfif",
  },
  {
    name: "iPhone 12",
    color: "Blue",
    description:
      "Sleek design, Super Retina XDR display, A14 Bionic chip, 5G connectivity, advanced dual-camera system.",
    image: "./media/12-blue.jfif",
    imageClose: "./media/12-blue-close.jfif",
  },
  {
    name: "iPhone 13",
    color: "Pink",
    description:
      "Refined design, enhanced display, A15 Bionic chip, advanced camera features, extended battery life.",
    image: "./media/13-pink.jfif",
    imageClose: "./media/13-pink-close.jfif",
  },
  {
    name: "iPhone 13",
    color: "Red",
    description:
      "Refined design, enhanced display, A15 Bionic chip, advanced camera features, extended battery life.",
    image: "./media/13-red.jfif",
    imageClose: "./media/13-red-close.jfif",
  },
  {
    name: "iPhone 14",
    color: "Black",
    description:
      "Redesigned, edge-to-edge ProMotion display, A16 Bionic chip, improved camera, larger battery, advanced privacy features, 5G support.",
    image: "./media/14-black.jfif",
    imageClose: "./media/14-black-close.jfif",
  },
  {
    name: "iPhone 14",
    color: "Red",
    description:
      "Redesigned, edge-to-edge ProMotion display, A16 Bionic chip, improved camera, larger battery, advanced privacy features, 5G support.",
    image: "./media/14-red.jfif",
    imageClose: "./media/14-red-close.jfif",
  },
];

// const createEl = (element, elClass, container, text) => {
//   const body = document.body;

//   const el = document.createElement(`${element}`);

//   el.textContent = text;
//   container.append(el);
//   body.append(container);
//   el.classList.add(`${elClass}`);
// };
// const createImage = (elClass, container, src) => {
//   const body = document.body;
//   const img = document.createElement("img");
//   img.src = src;
//   img.classList.add(`${elClass}`);
//   container.append(img);
//   body.append(container);
// };
const create = (tag = "div", options = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), options);
  if (children.length) node.append(...children);
  return node;
};

document.querySelector("#test").append(
  ...d.map((el) =>
    create("li", {}, [
      create("h3", {
        textContent: el.name,
      }),
      ...["description"].flatMap((field) => [
        create("span", {
          textContent: el[field],
        }),
      ]),
    ])
  )
);

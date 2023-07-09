const data = [
  {
    name: "iPhone 12",
    color: "Red",
    price: "$2599.99",
    description:
      "Sleek design, Super Retina XDR display, A14 Bionic chip, 5G connectivity, advanced dual-camera system.",
    image: "./media/12-red.png",
    imageClose: "./media/12-red-close.jpg",
    heroImage: "./media/hero-one.jpg",
  },
  {
    name: "iPhone 12 Pro",
    color: "Blue",
    price: "$2999.99",
    description:
      "Sleek design, Super Retina XDR display, A14 Bionic chip, 5G connectivity, advanced dual-camera system.",
    image: "./media/12-blue.png",
    imageClose: "./media/12-blue-close.jpg",
    heroImage: "./media/hero-two.jpg",
  },
  {
    name: "iPhone 13",
    color: "Pink",
    price: "$3599.99",
    description:
      "Refined design, enhanced display, A15 Bionic chip, advanced camera features, extended battery life.",
    image: "./media/13-pink.png",
    imageClose: "./media/13-pink-close.jpg",
    heroImage: "./media/hero-three.jpg",
  },
  {
    name: "iPhone 13 Pro",
    color: "Red",
    price: "$3999.99",
    description:
      "Refined design, enhanced display, A15 Bionic chip, advanced camera features, extended battery life.",
    image: "./media/13-red.png",
    imageClose: "./media/13-red-close.jpg",
    heroImage: "./media/hero-four.jpg",
  },
  {
    name: "iPhone 14",
    color: "Black",
    price: "$4599.99",
    description:
      "Redesigned, edge-to-edge ProMotion display, A16 Bionic chip, improved camera, larger battery, advanced privacy features, 5G support.",
    image: "./media/14-black.png",
    imageClose: "./media/14-black-close.jpg",
    heroImage: "./media/hero-five.jpg",
  },
  {
    name: "iPhone 14 Pro",
    color: "Red",
    price: "$4999.99",
    description:
      "Redesigned, edge-to-edge ProMotion display, A16 Bionic chip, improved camera, larger battery, advanced privacy features, 5G support.",
    image: "./media/14-red.png",
    imageClose: "./media/14-red-close.jpg",
    heroImage: "./media/hero-six.jpg",
  },
];

const create = (tag = "div", options = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), options);
  if (children.length) node.append(...children);
  return node;
};

document.querySelector("#product-section").append(
  ...data.map((img) =>
    create(
      "div",
      {
        className: "product-container",
      },
      [
        create("img", {
          src: img.image,
          className: "product-image",
        }),
        create("h1", {
          textContent: img.name,
        }),
        create("h2", {
          textContent: img.price,
        }),
        create(
          "div",
          {
            className: "add-to-cart",
          },
          [
            create("p", {
              className: "add-to-cart-content",
              textContent: "Add To Cart",
            }),
          ]
        ),
        create("a", {
          className: "details",
          textContent: "Details",
          href: "#",
        }),
      ]
    )
  )
);



  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    details.addEventListener("click", () => {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute("open");
        }
      });
    });
  });
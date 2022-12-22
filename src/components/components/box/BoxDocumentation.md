How to use box component:

PROPS:
  variant=""
  overlay=""
  logoWidth=""
  links={nomeArray}
  boxImage=""
  boxLogo=""

<!--  -->
Logo animation:
  default variant = no animation
  <EABox variant="up" /> logo will go up on hover
  <EABox variant="scale" /> logo will scale bigger on hover

<!--  -->
Background overlay:
  default overlay = transparent
  overlay accept any css color values
  example:
    <EABox overlay="red" />
    <EABox overlay="#000" />
  Homepage gradient:
  <EABox overlay="linear-gradient(90deg, #001c9d, #ff4747)" />

<!--  -->
Logo width:
  default width = 130px
  Change:
  <EABox logoWidth="120px" />

<!--  -->
Links inside the box: 
  default = no links
  <EABox links={nomeArray} />
  Create an array of obects for the links.

  example:
    const nomeArray = [
      {
        title: "Sito ufficiale",
        link: "#"
      },
      {
        title: "Aiuto",
        link: "#"
      },
      {
        title: "Forum",
        link: "#"
      }
    ]

<!--  -->
Images:
  <EABox boxImage="path" /> image for box background
  <EABox boxLogo="path" /> image for the logo
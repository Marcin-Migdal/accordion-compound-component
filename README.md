# Accordion compound component

In this project, I wanted to create an accordion component using compound component pattern.

### To check it out:

-   You just need to download zip package or clone this project in to your machine using `git clone https://github.com/Marcin-Migdal/accordion-compound-component.git` command.
-   Go in to the project folder and use `npm i` command, it shouldn't take long, I didn't use any external library besides `react-icons`.
-   When it finish installing use `npm start` command

### Project consist of three examples:

-   Simple accordion. This example just shows basic component functionality.
-   Custom accordion. This example has textarea when it expands, It was simple to make thanks to compound component pattern features.
    <br/>
    This example also consist of an number input, which determines how many items there is in accordion. It was made to show that performance was also in my mind while creating this component.
-   Side menu accordion. This example expandable content expands to the side, not downward. It is a build in component feature, NOT any additional logic possible thanks to compound component pattern features.

### Accordion props:

-   autoClose: `boolean`, when set to `true` it is possible to expand only one accordion item. Its default setting is `"false"`
-   type: `"normal" | "side-menu`, when set to `"normal"` expandable content expand downwards, while when to set to `"side-menu"` expandable content expand to the right side of the accordion item. Its default setting is `"normal"`

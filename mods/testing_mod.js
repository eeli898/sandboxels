elements.mustard = {
    color: "#ffff00",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 60000,
}

elements.water.color = "#ff0000";
elements.water.behavior = behaviors.WALL;

delete elements.ketchup;

elements.blue_sand = {
    color: "#0000ff",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1|M2"
    ],
    category: "land",
    state: "solid"
}

elements.mud.tick = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y+1)) {
        console.log("Moved!");
    }
    else {
        console.log("Couldn't move!")
    }
};

elements.sand_explorer = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};

elements.sugar_stick = {
    color: "#ffffff",
    behavior: behaviors.STURDYPOWDER,
    reactions: {
        "water": { elem1:null, elem2:"sugar_water", chance:0.1 },
        "salt_water": { elem1:null, elem2:"sugar_water", chance:0.1 }
    },
    state: "solid",
    density: 1580
}

if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mustard = { "elem1":null, "elem2":"mustard_water" };
elements.water.reactions.soap = { "elem1":null, "elem2":"soapy_water" };

elements.ball.renderer = function(pixel,ctx) {
    drawSquare(ctx,"#00ff00",pixel.x-1,pixel.y);
    drawSquare(ctx,"#00ff00",pixel.x,pixel.y);
    drawSquare(ctx,"#00ff00",pixel.x+1,pixel.y);
};
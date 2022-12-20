var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;

/*
    Credit:
    *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
    *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely 
*/
var scrabbleTiles = [];
scrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "./Images/tiles/Scrabble_Tile_A.jpg" };
scrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_B.jpg" };
scrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_C.jpg" };
scrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "./Images/tiles/Scrabble_Tile_D.jpg" };
scrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "./Images/tiles/Scrabble_Tile_E.jpg" };
scrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_F.jpg" };
scrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "./Images/tiles/Scrabble_Tile_G.jpg" };
scrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_H.jpg" };
scrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "./Images/tiles/Scrabble_Tile_I.jpg" };
scrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "./Images/tiles/Scrabble_Tile_J.jpg" };
scrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "./Images/tiles/Scrabble_Tile_K.jpg" };
scrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "./Images/tiles/Scrabble_Tile_L.jpg" };
scrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_M.jpg" };
scrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "./Images/tiles/Scrabble_Tile_N.jpg" };
scrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "./Images/tiles/Scrabble_Tile_O.jpg" };
scrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_P.jpg" };
scrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "./Images/tiles/Scrabble_Tile_Q.jpg" };
scrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "./Images/tiles/Scrabble_Tile_R.jpg" };
scrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "./Images/tiles/Scrabble_Tile_S.jpg" };
scrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "./Images/tiles/Scrabble_Tile_T.jpg" };
scrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "./Images/tiles/Scrabble_Tile_U.jpg" };
scrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_V.jpg" };
scrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_W.jpg" };
scrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "./Images/tiles/Scrabble_Tile_X.jpg" };
scrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_Y.jpg" };
scrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "./Images/tiles/Scrabble_Tile_Z.jpg" };
scrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "./Images/tiles/Scrabble_Tile_Blank.jpg" };

// Scrabble Board Object
var scrabbleBoard = {};
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
scrabbleBoard.slots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "./Images/squares/Scrabble_BlankSquare_81x87.jpg" };
scrabbleBoard.slots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "./Images/squares/Scrabble_DoubleWordScore_81x87.jpg" };
scrabbleBoard.slots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "./Images/squares/Scrabble_BlankSquare_81x87.jpg" };
scrabbleBoard.slots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "./Images/squares/Scrabble_BlankSquare_81x87.jpg" };
scrabbleBoard.slots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "./Images/squares/Scrabble_DoubleWordScore_81x87.jpg" };
scrabbleBoard.slots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "./Images/squares/Scrabble_BlankSquare_81x87.jpg" };
scrabbleBoard.slots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "./Images/squares/Scrabble_BlankSquare_81x87.jpg" };
// Obtain length of rows
scrabbleBoard.rowCount = Object.keys(scrabbleBoard.slots).length;
scrabbleBoard.columnCount = Object.keys(scrabbleBoard.slots[0]).length;

// Keep track of current scores
var scrabbleScore = { "totalScore": 0, "highestScore": 0 };

// Generate tiles on letter-rack
function GenerateRackTiles() {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tileId = 0;

    for (let i = 0; i < 7; i++) {
        let result = alpha.charAt(Math.floor(Math.random() * alpha.length));
        $('#letter-rack').append(
            `<img class="letter-tile" letter="${result}" id="tile-${tileId}"
                src="./Images/tiles/Scrabble_Tile_${result}.jpg">
            `
        )
    }
}

// Refresh page to restart board
function restart() {
    window.location.reload();
}

// Generates board
function GenerateBoard() {
    var row, col, bgImagePath, newSlot;
    var BG_IMAGE_WIDTH = 81, BG_IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

    $("#board").css("height", (BG_IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.rowCount);
    $("#board").css("width", (BG_IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.columnCount);

    for (row = 0; row < scrabbleBoard.rowCount; ++row) {
        for (col = 0; col < scrabbleBoard.columnCount; ++col) {
            bgImagePath = scrabbleBoard.slots[row][col].image;
            newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
            $("#board").append(newSlot);
            newSlot.css({ "width": BG_IMAGE_WIDTH, "height": BG_IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH });
        }
    }
}

// Adds tiles to scrabbleBoard data-structure
function addToSlot(tileId, letter, row, col) {
    for (let i = 0; i < scrabbleBoard.rowCount; ++i) {
        for (let j = 0; j < scrabbleBoard.columnCount; ++j) {
            if (scrabbleBoard.slots[i][j].tileId === tileId) {
                delete scrabbleBoard.slots[i][j].tileId;
                delete scrabbleBoard.slots[i][j].letter;
            }
        }
    }

    // Record that this slot has the tile now.
    scrabbleBoard.slots[row][col].letter = letter;
    scrabbleBoard.slots[row][col].tileId = tileId;
}

function findSlotFromTileId(tileId) {
    for (let row = 0; row < scrabbleBoard.rowCount; ++row) {
        for (let col = 0; col < scrabbleBoard.columnCount; ++col) {
            if (scrabbleBoard.slots[row][col].tileId === tileId) {
                return [row, col];
            }
        }
    }

    return false;
}

function deleteFromSlot(row, col) {
    delete scrabbleBoard.slots[row][col].tileId;
    delete scrabbleBoard.slots[row][col].letter;
}


function calculateBoardScore() {
    let letter, letterValue, wordMultiplier = 1, boardScore = 0;

    for (let row = 0; row < scrabbleBoard.rowCount; ++row) {
        for (let col = 0; col < scrabbleBoard.columnCount; ++col) {
            letter = scrabbleBoard.slots[row][col].letter;
            if (letter) {
                letterValue = scrabbleTiles[letter].value;
                boardScore += letterValue * scrabbleBoard.slots[row][col].letterMultiplier;
                wordMultiplier *= scrabbleBoard.slots[row][col].wordMultiplier;
            }
        }
    }

    // Now apply the word modifier.
    boardScore *= wordMultiplier;

    return boardScore;
}

// Update
function update() {
    var boardScore = calculateBoardScore();

    $("#score").html(scrabbleScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");

    $("#highestScore").html(scrabbleScore.highestScore);
}

function getLetterFromSlot(row, col) {
    return scrabbleBoard.slots[row][col].letter;
}


// Get the current word
let current_word_array = [];
function getCurrentWord() {
    for (let i = 0; i < scrabbleBoard.rowCount; i++) {
        for (let j = 0; j < scrabbleBoard.columnCount; j++) {
            let current_letter = scrabbleBoard.slots[i][j].letter;
            if (current_letter) {
                current_word_array.push(current_letter);
            }
        }
    }

    $("#word").html(current_word_array)
}


// jQuery
$(window).load(function () {

    GenerateRackTiles();
    GenerateBoard();

    // On click, call restart func
    $("#restartButton").click(function () {
        restart();
    });

    $("#nextWordButton").click(function () {
        nextWord();
    });

    // Make letter-tile draggable
    $(".letter-tile").draggable();
    // // Make Letter-tile revertable
    $(".letter-tile").draggable({ revert: "invalid" });

    // Make the board slots droppable.
    $(".boardSlot").droppable({
        accept: ".letter-tile",
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        drop: function (event, ui) {
            let row, col, letter, tileId;

            ui.draggable.removeClass("letterTileOnRack");
            ui.draggable.addClass("letterTileOnBoard");

            row = $(this).attr("row");
            col = $(this).attr("col");

            letter = ui.draggable.attr("letter");
            tileId = ui.draggable.attr("id");

            $(ui.draggable).css("top", "");
            $(ui.draggable).css("left", "");
            $(this).append(ui.draggable);


            addToSlot(tileId, letter, row, col);
            getCurrentWord();

        }
    });
    $("#letter-rack").droppable({
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        tolerance: "touch",
        drop: function (event, ui) {
            var tileId, pos;

            ui.draggable.removeClass("letterTileOnBoard");
            ui.draggable.addClass("letterTileOnRack");

            if ($(ui.draggable).hasClass("blankTile")) {
                $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
            }

            tileId = ui.draggable.attr("id");
            pos = findSlotFromTileId(tileId);
            if (pos) {
                deleteFromSlot(pos[0], pos[1]);  // pos[0]: row, pos[1]: column

                $("#letter-rack").append(ui.draggable);
                ui.draggable.css({ "position": "relative", "top": "", "left": "" });

                update();
            } else {
                ui.draggable.draggable("option", "revert", true);
            }
        }
    });
});



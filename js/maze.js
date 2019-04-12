'use strict';

let isGameOn;
const winMsg = "You Win !!";
const loseMsg = "You Lose !";
let originalHeadMsg;

$(function () {
    const header = $('#status');
    originalHeadMsg = header.text();

    const maze = $('#maze');
    maze.mouseleave(function () {
        mouseLeftBoundaries();
    });

    const boundaries = $('#maze div.boundary');
    boundaries.mouseover(function () {
        mouseLeftBoundaries();
    });

    const start = $('#start');
    start.click(function () {
        boundaries.removeClass('youlose');
        isGameOn = true;
        header.text(originalHeadMsg);
    });

    const end = $('#end');
    end.mouseover(function () {
        if (isGameOn) {
            alert(winMsg);
            header.text(winMsg);
            resetGame();
        }
    });

    function mouseLeftBoundaries() {
        if (isGameOn) {
            gameOver();
            setTimeout(function () {
                alert(loseMsg);
                header.text(loseMsg);
                resetGame();
            });
        }
    }

    function gameOver() {
        boundaries.addClass('youlose');
    }

    function resetGame() {
        isGameOn = false;
    }
});
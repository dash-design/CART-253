Starting ideas:
Start/End screen you click to start the game showing the high score

You need to click ON the fly to catch it

Score shown on-screen while playing
    score = 1
    
    if (frog catches fly)
        score = score + 1
    
    drawScore()
        display score at top right corner
        
Add lives <3 you can lose if fly escape, game end if you lose all 3
    draw heart
    
    if (fly > width)
        lose heart
        if (no heart left)
            state = gameOver
            
Fly move up and down too

Add bees you lose a life/points if you catch it
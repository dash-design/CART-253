let mazes = [
    [["W", "W", "N", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "D", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "N", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "D", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],

    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
    [["W", "W", " ", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", " ", " ", "W", "W", "W", "W", "W", "W", "W", " ", " ", "W", "W", "W", "W", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ],
];
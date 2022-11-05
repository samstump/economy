// CAVEAT: Agent has a single production plan
export const production_plans = {
    farm: {
        "in": {
            "food": 1,
            "timber": 2,
            "stone": 1,
            "iron": 1
        },
        "out": {"food": 10}
    },
    sawmill: {
        "in": {
            "food": 1,
            "timber": 1,
            "stone": 1,
            "iron": 2
        },
        "out": {"timber": 10}
    },
    quarry: {
        "in": {
            "food": 1,
            "timber": 3,
            "stone": 1,
            "iron": 2
        },
        "out": {"stone": 10}
    },
    mine: {
        "in": {
            "food": 1,
            "timber": 2,
            "stone": 2,
            "iron": 2
        },
        "out": {"iron": 10}
    }
}


export enum Agent {
    unknown,
    farm,
    sawmill,
    quarry,
    mine
}

export const agent_names = Object.values(Agent).filter(t => typeof(t) == typeof(''));

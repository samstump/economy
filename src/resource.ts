export enum Resource {
    unknown,
    food,
    timber,
    stone,
    iron,
}

export const resource_names = Object.values(Resource).filter(t => typeof(t) == typeof(''));


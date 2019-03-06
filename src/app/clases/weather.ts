export interface Weather {
    name: string;
    main: {
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    };
    weather: Array<Weather>;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
}

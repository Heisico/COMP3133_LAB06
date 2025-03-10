const helloWorld = (): void => {
    console.log(`Hello, World!`);
};

const helloName = (firstName: string, lastName: string): void => {
    console.log(`Hello, ${firstName} ${lastName}!`);
};

helloWorld();
helloName("Daniel", "Fajardo");

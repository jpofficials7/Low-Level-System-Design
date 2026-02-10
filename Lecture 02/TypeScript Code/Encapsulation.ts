/*
Encapsulation says 2 things:
1. An Object's Characteristics and its behaviour are encapsulated together
within that Object.
2. All the characteristics or behaviours are not for everyone to access.
Object should provide data security.

We follow above 2 pointers about Object of real world in programming by:
1. Creating a class that act as a blueprint for Object creation. Class contain
all the characteristics (class variable) and behaviour (class methods) in one block,
encapsulating it together.
2. We introduce access modifiers (public, private, protected, default) etc to provide data
security to the class members.
*/
class SportsCar {
  private brand: string;
  private model: string;
  private isEngineOn: boolean = false;
  private currentSpeed: number = 0;
  private currentGear: number = 0;

  // Introduce new variable to explain setters
  private tyreCompany: string | undefined;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  public getSpeed(): number {
    return this.currentSpeed;
  }

  public getTyreCompany(): string | undefined {
    return this.tyreCompany;
  }

  public setTyreCompany(tyreCompany: string): void {
    this.tyreCompany = tyreCompany;
  }

  public startEngine(): void {
    this.isEngineOn = true;
    console.log(`${this.brand} ${this.model} : Engine starts with a roar!`);
  }

  public shiftGear(gear: number): void {
    this.currentGear = gear;
    console.log(
      `${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`,
    );
  }

  public accelerate(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot accelerate.`,
      );
      return;
    }
    this.currentSpeed += 20;
    console.log(
      `${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`,
    );
  }

  public brake(): void {
    this.currentSpeed -= 20;
    if (this.currentSpeed < 0) this.currentSpeed = 0;
    console.log(
      `${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`,
    );
  }

  public stopEngine(): void {
    this.isEngineOn = false;
    this.currentGear = 0;
    this.currentSpeed = 0;
    console.log(`${this.brand} ${this.model} : Engine turned off.`);
  }
}

function main(): void {
  const mySportsCar: SportsCar = new SportsCar("Ford", "Mustang");

  mySportsCar.startEngine();
  mySportsCar.shiftGear(1);
  mySportsCar.accelerate();
  mySportsCar.shiftGear(2);
  mySportsCar.accelerate();
  mySportsCar.brake();
  mySportsCar.stopEngine();

  // Setting arbitrary value to speed.
  //   mySportsCar.currentSpeed = 500; // This will cause a TypeScript error because currentSpeed is private

  // console.log("Current Speed of My Sports Car is set to " + mySportsCar.currentSpeed);  // Error: Property 'currentSpeed' is private

  //   console.log("Current Speed of My Sports Car is " + mySportsCar.getSpeed());
}

// Execute main function
main();

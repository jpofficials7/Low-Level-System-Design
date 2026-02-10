// Base Car class
abstract class Car {
  protected brand: string;
  protected model: string;
  protected isEngineOn: boolean;
  protected currentSpeed: number;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.isEngineOn = false;
    this.currentSpeed = 0;
  }

  // Common methods for All cars.
  public startEngine(): void {
    this.isEngineOn = true;
    console.log(`${this.brand} ${this.model} : Engine started.`);
  }

  public stopEngine(): void {
    this.isEngineOn = false;
    this.currentSpeed = 0;
    console.log(`${this.brand} ${this.model} : Engine turned off.`);
  }

  // Abstract method for Dynamic Polymorphism
  public abstract accelerate(): void;

  // Abstract method for Static Polymorphism (Method Overloading)
  public abstract accelerate(speed: number): void;

  // Abstract method for Dynamic Polymorphism
  public abstract brake(): void;
}

class ManualCar extends Car {
  private currentGear: number;

  constructor(brand: string, model: string) {
    super(brand, model);
    this.currentGear = 0;
  }

  // Specialized method for Manual Car
  public shiftGear(gear: number): void {
    this.currentGear = gear;
    console.log(
      `${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`,
    );
  }

  // Overriding and overloading accelerate - Static & Dynamic Polymorphism
  public accelerate(speed?: number): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Cannot accelerate! Engine is off.`,
      );
      return;
    }

    if (speed !== undefined) {
      // Overloaded version with speed parameter
      this.currentSpeed += speed;
    } else {
      // Default version without parameter
      this.currentSpeed += 20;
    }

    console.log(
      `${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h`,
    );
  }

  // Overriding brake - Dynamic Polymorphism
  public brake(): void {
    this.currentSpeed -= 20;
    if (this.currentSpeed < 0) this.currentSpeed = 0;
    console.log(
      `${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h`,
    );
  }
}

class ElectricCar extends Car {
  private batteryLevel: number;

  constructor(brand: string, model: string) {
    super(brand, model);
    this.batteryLevel = 100;
  }

  // Specialized method for Electric Car
  public chargeBattery(): void {
    this.batteryLevel = 100;
    console.log(`${this.brand} ${this.model} : Battery fully charged!`);
  }

  // Overriding and overloading accelerate - Static & Dynamic Polymorphism
  public accelerate(speed?: number): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Cannot accelerate! Engine is off.`,
      );
      return;
    }
    if (this.batteryLevel <= 0) {
      console.log(
        `${this.brand} ${this.model} : Battery dead! Cannot accelerate.`,
      );
      return;
    }

    if (speed !== undefined) {
      // Overloaded version with speed parameter
      this.batteryLevel -= 10 + speed;
      this.currentSpeed += speed;
    } else {
      // Default version without parameter
      this.batteryLevel -= 10;
      this.currentSpeed += 15;
    }

    console.log(
      `${this.brand} ${this.model} : Accelerating to ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`,
    );
  }

  // Overriding brake - Dynamic Polymorphism
  public brake(): void {
    this.currentSpeed -= 15;
    if (this.currentSpeed < 0) this.currentSpeed = 0;
    console.log(
      `${this.brand} ${this.model} : Regenerative braking! Speed is now ${this.currentSpeed} km/h. Battery at ${this.batteryLevel}%.`,
    );
  }
}

// Main function
function main(): void {
  const myManualCar: Car = new ManualCar("Ford", "Mustang");
  myManualCar.startEngine();
  myManualCar.accelerate();
  myManualCar.accelerate();
  myManualCar.brake();
  myManualCar.stopEngine();

  console.log("----------------------");

  const myElectricCar: Car = new ElectricCar("Tesla", "Model S");
  myElectricCar.startEngine();
  myElectricCar.accelerate();
  myElectricCar.accelerate();
  myElectricCar.brake();
  myElectricCar.stopEngine();
}

// Execute main function
main();

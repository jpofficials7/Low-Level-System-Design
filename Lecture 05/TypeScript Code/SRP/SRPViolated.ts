// Product class representing any item of any ECommerce.
class Product {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Violating SRP: ShoppingCart is handling multiple responsibilities
class ShoppingCart {
  private products: Product[] = [];

  public addProduct(p: Product): void {
    this.products.push(p);
  }

  public getProducts(): Product[] {
    return this.products;
  }

  // 1. Calculates total price in cart.
  public calculateTotal(): number {
    let total = 0;
    for (const p of this.products) {
      total += p.price;
    }
    return total;
  }

  // 2. Violating SRP - Prints invoice (Should be in a separate class)
  public printInvoice(): void {
    console.log("Shopping Cart Invoice:");
    for (const p of this.products) {
      console.log(`${p.name} - Rs ${p.price}`);
    }
    console.log(`Total: Rs ${this.calculateTotal()}`);
  }

  // 3. Violating SRP - Saves to DB (Should be in a separate class)
  public saveToDatabase(): void {
    console.log("Saving shopping cart to database...");
  }
}

// Main function
function main(): void {
  const cart: ShoppingCart = new ShoppingCart();

  cart.addProduct(new Product("Laptop", 50000));
  cart.addProduct(new Product("Mouse", 2000));

  cart.printInvoice();
  cart.saveToDatabase();
}

// Execute main function
main();

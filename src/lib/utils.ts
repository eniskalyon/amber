export const validateString = (
    value: unknown,
    maxLength: number
  ): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
  
    return true;
  };

  class CustomError extends Error {
    senderName: string;
  
    constructor(message: string, senderName: string) {
      super(message); // Call the parent constructor with the message
      this.senderName = senderName;
      this.name = this.constructor.name; // Set the error name to the class name
    }
  }
  
  
  export const getErrorMessage = (error: unknown): string => {
    let senderName: string;
  
    if (error instanceof CustomError) {
      senderName = error.senderName;
    } else if (error && typeof error === "object" && "senderName" in error) {
      senderName = String(error.senderName);
    } else if (typeof error === "string") {
      senderName = error;
    } else {
      senderName = "Something went wrong";
    }
  
    return senderName;
  };
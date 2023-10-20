import { AbstractControl, ValidationErrors } from "@angular/forms";

export function asyncValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
        // Perform some asynchronous validation logic here
        // For example, you can make an HTTP request and resolve the promise based on the response.
        if (control.valid) {
            resolve(null); // Validation passed
        } else {
            resolve({ asyncValidationFailed: true }); // Validation failed
        }
    });
}

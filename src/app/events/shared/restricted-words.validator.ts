import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function restrictedWords(words:any): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        if (!words) return null

        var invalidWords = words.map((w: any) => control.value.includes(w) ? w : null)
            .filter((w:any) => w !=null)

        return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null
    }       
}
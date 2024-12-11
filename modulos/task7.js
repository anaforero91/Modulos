export function rubricPerfect(nota ) {
    if (nota == 11){
        return "Perfect";
    }
    else if(nota >= 9){
        return "Excellent";
    }else if(nota < 9 && nota >= 5) {
        return "Pass";
    }else {
        return "Fail";
    }
}
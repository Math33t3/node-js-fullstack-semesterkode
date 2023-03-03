export const guards = [
    "Hank the tank",
    "Thomas the tank engine",
    "CEPUS"
];
//i can choose exactly what to export

export function addGuard(guard) {
    guards.push(guard);
    return guards;
};

//exporting 
/*export default{
    guards,
    addGuard
};*/
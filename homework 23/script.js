function Animal(name, icon, category, breed, voice) {
    this.name = name;
    this.icon = icon;
    this.category = category;
    this.breed = breed;
    this.voice = voice;
}

Animal.prototype.getVoice = function() {
    let voice = this.category == 'dog' ? "I can say gav-gav." : this.category == 'cat' ? 'I can say myu-myu.' : '';

    return `Hello, me name is ${this.name} ${this.icon}. I'm ${this.breed} ${this.category}. ${voice}`;
};


let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
    Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

    Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
    Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),

    Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');

console.log(Ivan.getVoice());
console.log(Anna.getVoice());
console.log(Olena.getVoice());
console.log(Simba.getVoice());
console.log(Kesha.getVoice());